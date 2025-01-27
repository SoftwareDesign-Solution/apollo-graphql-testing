import { bookResolver } from './bookResolver';

export const resolvers = {
    Query: {
        ...bookResolver.Query
    },
    Mutation: {
        ...bookResolver.Mutation
    }
};