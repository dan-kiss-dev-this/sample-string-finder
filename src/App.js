import logo from './logo.svg';
import './App.css';
import Finder from './LongStringFinder'
import Counter from './Counter'
import RefSample from './RefSample';
import Increment from './Increment';
import Todo from './todo';
import HookSample from './hookSample';
import Debounce from './debounce'

function App() {
  const todos = [
    { id: 1, title: "wash dishes", completed: false },
    { id: 2, title: "make dinner", completed: true },
  ];

  return (
    <div className="App">
      <Finder />
      <br />
      <Counter />
      <br />
      <RefSample />
      <Increment initialValue={5} />
      {todos.map((todo) => (<Todo todo={todo} />))}
      <Todo todo={5} />
      <HookSample />
      <Debounce />
    </div>
  );
}

export default App;
