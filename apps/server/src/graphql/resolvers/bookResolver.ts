let books = [
    {
        id: 1,
        title: 'The Awakening',
        author: 'Kate Chopin',
    },
    {
        id: 2,
        title: 'City of Glass',
        author: 'Paul Auster',
    },
];

export const bookResolver = {
    Query: {
        books: async () => {
            return books;
        },
    },
    Mutation: {
        createBook: async (_: any, args: { title: string; author: string }) => {

            const book = {
                id: books.length + 1,
                title: args.title,
                author: args.author
            };

            books = [
                ...books,
                book
            ];

            return book;

          },
    }
}