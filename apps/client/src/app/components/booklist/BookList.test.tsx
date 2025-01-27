import '@testing-library/jest-dom/vitest';
import { beforeEach, describe, it, expect } from 'vitest';
import { render, within } from '@testing-library/react';
import { MockedProvider, MockedResponse, wait } from '@apollo/client/testing'
import { BookList } from './BookList';
import { GET_BOOKS } from '../../graphql/queries'
import { GraphQLError } from 'graphql';

describe('BookList', () => {

    let mocks: MockedResponse[] = [];

    beforeEach(() => {

        mocks = [
            {
                delay: 10,
                request: {
                    query: GET_BOOKS
                },
                result: {
                    data: {
                        books: [
                            { id: 1, title: 'Buch 1', author: 'Autor 1' },
                            { id: 2, title: 'Buch 2', author: 'Autor 2' },
                        ]
                    }
                },
            }
        ];

    });

    it('should show loading message', async () => {

        mocks[0].delay = Infinity;

        const { findByText } = render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <BookList />
            </MockedProvider>
        );

        expect(await findByText('Bücher werden geladen...')).toBeInTheDocument();

    });

    it('should show error message', async () => {
        
        const mockErros: MockedResponse[] = [
            {
                delay: 10,
                request: {
                    query: GET_BOOKS
                },
                result: {
                    errors: [
                        new GraphQLError(
                            'Fehler beim Laden der Bücher'
                        )
                    ]
                },
            }
        ];

        const { findByText } = render(
            <MockedProvider mocks={mockErros} addTypename={false}>
                <BookList />
            </MockedProvider>
        );

        await wait(100);

        const errorMessage = await findByText('Fehler:');
        expect(within(errorMessage).getByText('Fehler beim Laden der Bücher')).toBeInTheDocument();

    });

    it('should show books', async () => {

        const { getAllByRole } = render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <BookList />
            </MockedProvider>
        );

        await wait(100);

        //const rows = await findAllByRole('row');

        //expect(rows).toHaveLength(3);

        const firstRow = getAllByRole('row')[1]; // [0] ist die Header-Zeile
        const cell = within(firstRow).getByText('Buch 1');
        expect(cell).toBeInTheDocument();

    });

});