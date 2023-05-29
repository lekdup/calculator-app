import './Keypad.scss';

function Keypad() {
    const [numberPressed, setNumberPressed] = useState
    return (
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
    )
}

export default Keypad;