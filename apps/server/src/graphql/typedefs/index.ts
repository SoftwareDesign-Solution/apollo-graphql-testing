const typeDefs = `#graphql

    type Book {
        id: Int
        title: String
        author: String
    }

    type Query {
        books: [Book]
    }

    type Mutation {
        createBook(title: String!, author: String!): Book!
    }
`;

export { typeDefs };