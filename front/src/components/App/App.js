import { useReducer } from 'react';
import DigitButton from './DigitButton';
import OperationButton from './OperationButton';
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
      if(payload.digit === "0" && state.currentOperand === "0") return state
      if(payload.digit === "." && state.currentOperand.includes(".")) return state

      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`
      };
    
    case ACTIONS.CLEAR:
      return {};
    
    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand === null && state.previousOperand === null) return state;
      if(state.currentOperand == null){
        return {
          ...state,
          operation: payload.operation,
        }
      }

      if(state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        }
      }
      
      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null,
      }
    
    case ACTIONS.DELETE_DIGIT:
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1)
      };

    case ACTIONS.EVALUATE:
      return {
        ...state,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state)
      }
    default:
  }
  console.log(state.previousOperand);
} 

function evaluate({ currentOperand, previousOperand, operation }) {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return "";

  let calculate = ""
  switch (operation) {
    case "+":
      calculate = prev + current
      break
    case "-":
      calculate = prev - current
      break
    case "x":
      calculate = prev * current
      break
    case "/":
      calculate = prev / current
      break
  default:
  }

  return calculate.toString();
}

function App() {
  const [{ currentOperand }, dispatch] = useReducer(reducer, {})
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
      <div className="CalcForm">
        <div className="CalcForm-value">{currentOperand}</div>
      </div>
      <section className="Keypad">
        <DigitButton digit="7" dispatch={dispatch}/>
        <DigitButton digit="8" dispatch={dispatch}/>
        <DigitButton digit="9" dispatch={dispatch}/>
        <button
          id="del"
          onClick={() => {
            dispatch({ type: ACTIONS.DELETE_DIGIT })
          }}
        >DEL
        </button>
        <DigitButton digit="4" dispatch={dispatch}/>
        <DigitButton digit="5" dispatch={dispatch}/>
        <DigitButton digit="6" dispatch={dispatch}/>
        <OperationButton operation="+" dispatch={dispatch} />
        <DigitButton digit="1" dispatch={dispatch}/>
        <DigitButton digit="2" dispatch={dispatch}/>
        <DigitButton digit="3" dispatch={dispatch}/>
        <OperationButton operation="-" dispatch={dispatch} />
        <DigitButton digit="." dispatch={dispatch}/>
        <DigitButton digit="0" dispatch={dispatch}/>
        <OperationButton operation="/" dispatch={dispatch} />
        <OperationButton operation="x" dispatch={dispatch} />
        <button
          id="reset"
          onClick={() => {
            dispatch({ type: ACTIONS.CLEAR })
          }}
        >RESET
        </button>
        <button
          id="equal"
          onClick={() => {
            dispatch({ type: ACTIONS.EVALUATE })
          }}
        >=
        </button>
      </section>
    </div>
  );
}

export default App;
