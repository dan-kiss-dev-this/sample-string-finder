import './App.css';
import Finder from './LongStringFinder'
import Counter from './Counter'
import RefSample from './RefSample';
import Increment from './Increment';
import Todo from './Todo';
import HookSample from './HookSample';
import Debounce from './Debounce'
import Clipboard from './Clipboard';
import DetectClickOutside from './DetectClickOutside';
import FocusOnMount from './FocusOnMount';
import Batching from './Batching';
import StyledComponent from './StyledComponent';
import GetRequest from './GetRequest';
import PostRequest from './PostRequest';
import FullTodo from './todo/TodoFull'

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
      <Clipboard />
      <DetectClickOutside />
      <FocusOnMount />
      <Batching />
      <br />
      <StyledComponent />
      <GetRequest />
      <PostRequest />
      <br />
      <FullTodo />
    </div>
  );
}

export default App;
