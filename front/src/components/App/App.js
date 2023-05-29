import CalcForm from '../CalcForm/CalcForm';
import Keypad from '../Keypad/Keypad';
import Theme from '../Theme/Theme';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Theme />
      <CalcForm />
      <Keypad />
    </div>
  );
}

export default App;
