import { useForm, SubmitHandler } from "react-hook-form"
import { useMutation } from '@apollo/client';
import { CREATE_BOOK } from '../../graphql/mutations';
import { GET_BOOKS } from "../../graphql/queries";

const NewBookForm = () => {

    const { register, reset, handleSubmit, formState: { errors } } = useForm<{ title: string, author: string }>();

    const [ addBook, { loading, error } ] = useMutation(CREATE_BOOK, {
        refetchQueries: [
            { query: GET_BOOKS }
        ],
        onCompleted: () => reset()
    });

    const onSubmit: SubmitHandler<{ title: string, author: string }> = async (data) => {
        
        console.log(data);

        const response = await addBook({
            variables: {
                ...data
            }
        });

        console.log(response.data);

    };

    return (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-bold mb-4">Formular</h2>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">Titel</label>
              <input 
                type="text" 
                id="title" 
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" 
                placeholder="Titel eingeben"
                {...register('title', { required: 'Titel ist ein Pflichtfeld' })}
              />
              {errors.title && <p className="text-sm text-red-500" id="title-error">{ errors.title.message }</p>}
            </div>
            <div>
              <label htmlFor="author" className="block text-sm font-medium text-gray-700">Autor</label>
              <input 
                type="text" 
                id="author" 
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" 
                placeholder="Autor eingeben"
                {...register('author', { required: 'Autor ist ein Pflichtfeld' })}
              />
              {errors.author && <p className="text-sm text-red-500" id="title-error">{ errors.author.message }</p>}
            </div>
            <div>
              <button 
                type="submit" 
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
              >
                Speichern
              </button>
            </div>
            {loading && <p className="text-gray-500"><span className="text-blue-500">Buch wird gespeichert...</span></p>}
            {error && <p className="text-red-500" id="form-error">{ error.message }</p>}
          </form>
        </div>
    );
};

export { NewBookForm };