import ButtonNextQuestion from "../components/ButtonNextQuestion";
import React, {useEffect, useState} from "react";
import getGameData from "../service/apiService";
import ButtonAnswer from "../components/ButtonAnswer";
import Question from "../components/Question";
import Counter from "../components/Counter";

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
    //   const [disabled, setDisabled] = useState(true);


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

        }
    }, [gameData])

    const loadNewQuestion = () => {
        setIsLoaded(false);
    }


    function checkUserAnswer(answer) {
        if (rightAnswer === answer) {
            setCountRight(countRight + 1);

        } else {
            setCountWrong(countWrong + 1);
        }
    }


    return (
        <>
            <Question chosen={chosen} countryName={countryName} countryFlag={countryFlag}/>
            <div>
                {answers?.map(answer => <ButtonAnswer onClick={checkUserAnswer}
                                                      key={answer}
                                                      answer={answer}/>)}
            </div>


            <ButtonNextQuestion
                loadNewQuestion={loadNewQuestion}/>
            <Counter countRight={countRight} countWrong={countWrong}/>
        </>
    )
}