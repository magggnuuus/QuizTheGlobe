
export default function ButtonAnswer ({AntwortMoeglichkeit, selected, onClick}) {

    return (
        <button onClick={onClick}> {AntwortMoeglichkeit} </button>
    )
}