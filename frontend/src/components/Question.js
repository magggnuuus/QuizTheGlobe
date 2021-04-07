export default function Question({chosen, countryName}) {
    if (chosen === "capital") {
        return <h1> What's the capital of {countryName} ?</h1>
    } else if (chosen === "topLevelDomain") {
        return <h1> What's the topleveldomain of {countryName} ? </h1>
    } else if (chosen === "population") {
        return <h1> Whats the population of {countryName} ? </h1>
    } else {
        return (
            <></>
        )
    }
}