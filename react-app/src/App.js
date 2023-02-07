import logo from './logo.svg';
import './App.css'
import Greet from './components/Greet';
import Welcome from './components/welcome';
import Message from './components/message';
import ParentComp from './components/parentComp';

function App() {
  return (
    <div className="App">
      <ParentComp/>
      <Greet name="Mohsin ALi"><p>this is children</p></Greet>
      <Welcome />
      <Message />
    </div>
  );
}

export default App;
