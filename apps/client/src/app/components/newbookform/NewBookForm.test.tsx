import '@testing-library/jest-dom/vitest';
import { beforeAll, describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event'
import { MockedProvider, MockedResponse, wait } from '@apollo/client/testing'
import { NewBookForm } from './NewBookForm';
import { CREATE_BOOK } from '../../graphql/mutations';
import { GET_BOOKS } from '../../graphql/queries'

describe('NewBookForm', () => {

    let mocks: MockedResponse[] = [];

    beforeAll(() => {

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
            },
            {
                request: {
                    query: CREATE_BOOK,
                    variables: {
                        title: 'Hello World',
                        author: 'Autoren'
                    }
                },
                result: {
                    data: {
                        addBook: {
                            id: 3,
                            title: 'Hello World',
                            author: 'Autoren'
                        }
                    }
                }
            }
        ];

    });

    it('show errors when form is empty', async () => {

        const { findByText, getByRole } = render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <NewBookForm />
            </MockedProvider>
        );

        const submit = getByRole('button', {
            name: /Speichern/i
        });
        await userEvent.click(submit);

        expect(await findByText('Titel ist ein Pflichtfeld')).toBeInTheDocument();
        expect(await findByText('Autor ist ein Pflichtfeld')).toBeInTheDocument();
        
    });

    it('show loading message when form is valid', async () => {
        
        mocks[1].delay = Infinity;

        const { findByText, getByRole } = render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <NewBookForm />
            </MockedProvider>
        );

        await userEvent.type(getByRole('textbox', { name: /titel/i }), "Hello World");
        await userEvent.type(getByRole('textbox', { name: /autor/i }), "Autoren");

        const submit = getByRole('button', {
            name: /Speichern/i
        });
        await userEvent.click(submit);

        expect(await findByText('Buch wird gespeichert...')).toBeInTheDocument();

    });

    it('show graphql response in console.log when form is valid', async () => {
        
        mocks[1].delay = 10;

        const mockedConsoleLog = vi.spyOn(console, 'log');

        const { getByRole } = render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <NewBookForm />
            </MockedProvider>
        );

        await userEvent.type(getByRole('textbox', { name: /titel/i }), "Hello World");
        await userEvent.type(getByRole('textbox', { name: /autor/i }), "Autoren");

        const submit = getByRole('button', {
            name: /Speichern/i
        });
        await userEvent.click(submit);

        await wait(100);

        expect(mockedConsoleLog).toHaveBeenLastCalledWith(
            expect.objectContaining({
                addBook: expect.objectContaining({
                    title: 'Hello World',
                }),
            })
        );

        mockedConsoleLog.mockRestore();

    });

});