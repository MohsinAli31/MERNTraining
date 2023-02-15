import logo from './logo.svg';
import './App.css'
import Greet from './components/Greet';
import Welcome from './components/welcome';
import Message from './components/message';
import ParentComp from './components/parentComp';
import FormComp from './components/formComp';

function App() {
  return (
    <div className="App">
      <ParentComp/>
      <Greet name="Mohsin ALi"><p>this is children</p></Greet>
      <Welcome />
      <Message />
      <FormComp></FormComp>
    </div>
  );
}

export default App;
