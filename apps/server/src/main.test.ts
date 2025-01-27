import { describe, it, expect } from 'vitest';
import { ApolloServer, GraphQLResponse } from '@apollo/server';
import { resolvers } from './graphql/resolvers';
import { typeDefs } from './graphql/typedefs';

type Book = {
    id: number;
    title: string;
    author: string;
};

type GetBooksResponse = {
    books: Book[];
};

type CreateBookResponse = {
    createBook: Book;
};

describe('Server', () => {

    it('should return books', async () => {

        const testServer = new ApolloServer({
            typeDefs,
            resolvers
        });

        const response: GraphQLResponse<GetBooksResponse> = await testServer.executeOperation({
            query: `
                query GetBooks {
                    books {
                        title
                    }
                } `
        });

        if ((response.body.kind === 'single') && (response.body.singleResult.data)) {
            console.table(response.body.singleResult.data.books);
            expect(response.body.singleResult.data.books.length).toBe(2);
            //expect(response.body.singleResult.data.books[0].title).toBe('New World');
        };

    });

    it('createBook', async () => {

        const testServer = new ApolloServer({
            typeDefs,
            resolvers
        });
        
        const response: GraphQLResponse<CreateBookResponse> = await testServer.executeOperation({
            query: `
                mutation CreateBook($title: String!, $author: String!) {
                    createBook(title: $title, author: $author) {
                        id
                        title
                        author
                    }
                }
            `,
            variables: {
                title: "The Great Gatsby",
                author: "F. Scott Fitzgerald",
            },
        });

        //console.log(response.body.singleResult.data);

        if ((response.body.kind === 'single') && (response.body.singleResult.data)) {
            console.log(response.body.singleResult.data);
            expect(response.body.singleResult.data.createBook.title).toBe('The Great Gatsby');
        };

    });

});