import AddNewUser from "../components/InputFormForRanking";


export default function UserName({setName}) {
    return (
        <>
            <h1>Welcome to Quiz The Globe</h1>
            <h2> Please insert your username </h2>
            <div><AddNewUser onAdd={incomingName => setName(incomingName)}/></div>

            <h3>The questions are about the countries of the world, their capitals and, since we're a bit nerdy, their
                topleveldomain.
                The 3rd wrong answer ends the game</h3>
        </>

    )
}