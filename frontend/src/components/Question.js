import Flag from "./Flag";

export default function Question({chosen, countryName, countryFlag}) {


    console.log("2", countryFlag)

    if
    (chosen === "capital") {
        return (
            <>
                <h1> What's the capital of {countryName}? </h1>
                <Flag countryFlag={countryFlag}/>
            </>)
    } else if (chosen === "topLevelDomain") {
        return (
            <>
                <h1> What's the topleveldomain of {countryName} ?</h1>
                <Flag countryFlag={countryFlag}/>
            </>)
    } else if (chosen === "population") {
        return <>
            <h1> What's the number of citizens in {countryName} ? </h1>
            <Flag countryFlag={countryFlag}/>
        </>

    } else {
        return (
            <></>
        )
    }
}




