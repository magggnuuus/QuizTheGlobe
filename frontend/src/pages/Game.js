import ButtonNextQuestion from "../components/ButtonNextQuestion";
import React, {useEffect, useState} from "react";
import getGameData from "../service/ApiService";
import ButtonAnswer from "../components/ButtonAnswer";
import Question from "../components/Question";
import Counter from "../components/Counter";
import GameOver from "./GameOver";
import styled from "styled-components/macro";

export default function Game() {
    const [gameData, setGameData] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false)
    const [chosen, setChosen] = useState("")
    const [countryName, setCountryName] = useState("")
    const [rightAnswer, setRightAnswer] = useState("")
    const [countRight, setCountRight] = useState(0);
    const [countWrong, setCountWrong] = useState(0);
    const [countryFlag, setCountryFlag] = useState("");
    const [disabled, setDisabled] = useState(false);
    const [nextQuestionDisabled, setNextQuestionDisabled] = useState(true);
    const [visible, setVisible] = useState("hidden")


    useEffect(() => {
        if (!isLoaded) {

            getGameData()
                .then(setGameData)
                .catch(error => console.log(error))
        }
    }, [isLoaded])

    useEffect(() => {
        if (gameData.length > 0) {

            const shuffled = gameData.sort(() => 0.5 - Math.random());
            const selected = shuffled.slice(0, 4);
            const categories = ["capital", "population", "topLevelDomain"]
            const chooseCategory = categories.sort(() => 0.5 - Math.random());
            const chosen = chooseCategory[0];
            setChosen(chooseCategory[0])

            const countryFlag = selected[0].flag;
            setCountryFlag(selected[0].flag);

            setCountryName(selected[0].name);
            setRightAnswer(selected[0][chosen]);
            console.log(countryFlag)
            const wrongAnswer1 = selected[1][chosen];
            const wrongAnswer2 = selected[2][chosen];
            const wrongAnswer3 = selected[3][chosen];

            const shuffledAnswers = [selected[0][chosen], wrongAnswer1, wrongAnswer2, wrongAnswer3]
            shuffledAnswers.sort(() => 0.5 - Math.random());
            setAnswers(shuffledAnswers)
            setIsLoaded(true)
            setDisabled(false)
            setVisible("hidden")

        }
    }, [gameData])

    const loadNewQuestion = () => {
        setIsLoaded(false);
    }

    function checkUserAnswer(answer) {
        if (rightAnswer === answer) {
            setCountRight(countRight + 1);
            setDisabled(true);
            setNextQuestionDisabled(false);

        } else {
            setCountWrong(countWrong + 1);
            setDisabled(true);
            setNextQuestionDisabled(false);
            setVisible("");


        }
    }

    if (countWrong >= 3) {
        return (<> <GameOver onClick={Game} countRight={countRight}/>
        </>)
    } else {


        return (
            <>
                <Question chosen={chosen} countryName={countryName} countryFlag={countryFlag}/>
                <ContainerButton>
                    <ButtonAnswers>
                        {answers?.map(answer => <ButtonAnswer onClick={checkUserAnswer}

                                                              disabled={disabled}
                                                              key={answer}
                                                              answer={answer}/>)}
                    </ButtonAnswers>
                </ContainerButton>


                <ButtonNextQuestion disabled={nextQuestionDisabled}
                                    loadNewQuestion={loadNewQuestion}/>

                <p hidden={visible}>The answer is {rightAnswer} </p>
                <Counter countRight={countRight} countWrong={countWrong}/>
            </>
        )
    }
}

const ContainerButton = styled.div`
display: flex;
justify-content: center;`

const ButtonAnswers = styled.div`

display : flex;
width: 400px;
flex-wrap: wrap;

`