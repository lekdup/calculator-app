import './CalcForm.scss';

function CalcForm() {
    return (
        <form className="CalcForm">
            <input
                type="number"
                inputmode="decimal"
                className="CalcForm-value"
            />
        </form>
    )
}

export default CalcForm;