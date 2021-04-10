import AddNewUser from "../components/InputFormForRanking";

export default function UserName({setName}) {
    return (
        <>
            <h1>Welcome to Quiz The Globe</h1>
            <h2> Please insert your username </h2>
            <div><AddNewUser onAdd={incomingName => setName(incomingName)}/></div>
        </>

    )
}