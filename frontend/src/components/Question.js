import Flag from "./Flag";
import styled from "styled-components/macro";

export default function Question({chosen, countryName, countryFlag}) {

    if
    (chosen === "capital") {
        return (
            <ContainerQuestion>
                <h2> What's the capital of {countryName}? </h2>
                <Flag countryFlag={countryFlag}/>
            </ContainerQuestion>
        )
    } else if (chosen === "topLevelDomain") {
        return (
            <ContainerQuestion>
                <h2> What's the topleveldomain of {countryName} ?</h2>
                <Flag countryFlag={countryFlag}/>
            </ContainerQuestion>)
    } else if (chosen === "population") {
        return <ContainerQuestion>
            <h2> What's the number of citizens in {countryName} ? </h2>
            <Flag countryFlag={countryFlag}/>
        </ContainerQuestion>


    } else {
        return (
            <></>
        )
    }
}


const ContainerQuestion = styled.div`
border-box: 5px;
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
height: 250px;
`
