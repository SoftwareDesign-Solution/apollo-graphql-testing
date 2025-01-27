import { useQuery } from '@apollo/client';
import { GET_BOOKS } from '../../graphql/queries';

const BookList = () => {

    const { loading, error, data } = useQuery(GET_BOOKS);

    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-bold mb-4">Liste</h2>
            <div className="mb-4">
                {loading && <p className="text-gray-500"><span className="text-blue-500">Bücher werden geladen...</span></p>}
                {error && <p className="text-gray-500">Fehler: <span className="text-red-500">{error?.message}</span></p>}
            </div>
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Title</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Author</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.books.map((book: { id: number, title: string, author: string}) => {
                        return (<tr key={book.id}>
                            <td className="border border-gray-300 px-4 py-2">{ book.id }</td>
                            <td className="border border-gray-300 px-4 py-2">{ book.title }</td>
                            <td className="border border-gray-300 px-4 py-2">{ book.author }</td>
                        </tr>);
                    })}
                </tbody>
            </table>
        </div>
    )
};

export { BookList };