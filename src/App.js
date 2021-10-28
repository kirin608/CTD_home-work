import logo from './logo.svg';
import './App.css';

const todoList = [
  {
  id: '1',
  title: 'Open the file',
  },
  {
    id: '2',
  title: 'Remove existing JSX',
  },
  {
    id: '3',
  title: 'Create level one heading',
  },
];

function App() {
  return(
  <div>
    <h1>To do list</h1>
    <ul>
      {todoList.map(function(item) {
      return <li key={item.id}>
        {/*<spam>{item.id}</spam> */}
        <spam>{item.title}</spam>
        </li>;
     
      })}
      </ul>


    </div>
  );
}

export default App;
