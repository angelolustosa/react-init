import { Book } from "./components/Book";
import BookList from "./pages/BookList";
import FormBook from "./pages/FormBook";

function App() {

  let livros = [
    { id: 1, title: 'O Poderoso Chefão' },
    { id: 2, title: 'O Poderoso Chefão' },
    { id: 3, title: 'Carrie, A estranha' },
    { id: 4, title: 'Platoon' },
    { id: 5, title: 'Alien' },
  ]

  return (
    <div>
      <BookList />
      {/* <FormBook />

      <h1>Livros</h1>

      <div>
        {livros.map(i => <Book key={i.id} id={i.id} title={i.title} />)}
      </div> */}
    </div>
  );
}

export default App;
