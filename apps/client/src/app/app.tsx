import { BookList } from './components/booklist/BookList';
import { NewBookForm } from './components/newbookform/NewBookForm';

export function App() {
  return (
    <div className="container mx-auto">

      <title>Apollo GraphQL Testing mit Vitest</title>
      
      <h1 className="text-2xl font-bold mb-8 text-center">Apollo GraphQL Testing mit Vitest</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <BookList />

        <NewBookForm />
        
      </div>

      <footer className="mt-8 text-center text-gray-500">
        &copy; 2025 SoftwareDesign-Solution. Alle Rechte vorbehalten.
      </footer>

    </div>
  );
}

export default App;
