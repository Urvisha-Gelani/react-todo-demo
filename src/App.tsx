import './App.css'
import AddTodo from './components/AddTodo'
import Navbar from './components/Navbar'
import Todos from './components/Todos'

function App() {

  return (
    <>
    <main>
      <h1>TODO REACT + TYPESCRIPT</h1>
      <Navbar />
      <AddTodo/>
      <Todos/>
    </main>
    </>
  )
}

export default App
