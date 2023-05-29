import './App.scss';

export const ACTIONS = {
  ADD_DIGIT:  "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
} 
function reducer(state, { type, payload }) {
  switch(type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state
      }
    default:
  }
}

function App() {
  return (
    <div className="App">
      <header className="Theme">
        <h1>calc</h1>
        <div className="Theme-toggleBtn">
          <p>THEME</p>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      </header>
      <form className="CalcForm">
        <input
          type="number"
          inputMode="decimal"
          className="CalcForm-value"
        />
      </form>
      <section className="Keypad">
        <button type="button" value="7" className="num" >7</button>
        <button type="button" value="8">8</button>
        <button type="button" value="9">9</button>
        <button id="del" type="button">DEL</button>
        <button type="button" value="4">4</button>
        <button type="button" value="5">5</button>
        <button type="button" value="6">6</button>
        <button type="button">+</button>
        <button type="button" value="1">1</button>
        <button type="button" value="2">2</button>
        <button type="button" value="3">3</button>
        <button type="button">-</button>
        <button type="button">.</button>
        <button type="button" value="0">0</button>
        <button type="button">/</button>
        <button type="button">x</button>
        <button className="Keypad-reset" id="reset" type="button">RESET</button>
        <button className="Keypad-equal" id="equal" type="button">=</button>
      </section>
    </div>
  );
}

export default App;
