export default function ButtonAnswer({answer, onClick}) {


    return (
        <button onClick={() => onClick(answer)}> {answer} </button>
    )
}