import React ,{useState , useRef , useEffect} from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import TodoList from '../TodoList';
const { v4: uuidv4 } = require('uuid');

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function Home() {
  const [todos,setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  },[])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  },[todos])

  function toggleTodo(id){
    const newTodos =[...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e){
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos =>{
      return[...prevTodos,{id:uuidv4(),name:name,complete:false}]
    })
    console.log(name)
    todoNameRef.current.value = null
  }

  function handleClearTodos(){
    const newTodos = todos.filter( todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <>
      <HeroSection />
      <Cards />
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <input ref={todoNameRef} type = "text"/>
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear Complete</button>
      <div>{todos.filter(todo => !todo.complete).length}</div>
      <Footer />
    </>
  );
}

export default Home;
