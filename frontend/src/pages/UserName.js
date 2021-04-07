import AddNewUser from "../components/InputFormForRanking";

export default function UserName({setName}) {
    return (
        <>
            <h1>Welcome to Quiz</h1>
            <h2> Please insert your Username </h2>
            <AddNewUser onAdd={incomingName => setName(incomingName)}/>
        </>

    )
}