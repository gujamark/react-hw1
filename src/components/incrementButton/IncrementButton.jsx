import './IncrementButton.css';

function IncrementButton({incrementValue, onClick}) {
    return (
        <button type="button" className="increment-button" onClick={onClick}>{incrementValue}</button>
    );
}
export default IncrementButton;