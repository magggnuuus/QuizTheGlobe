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
    const [answerId, setAnswerId] = useState(1)
    const [countRight, setCountRight] = useState(0);
    const [countWrong, setCountWrong] = useState(0);


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
            let selected = shuffled.slice(0, 4);
            const categories = ["capital", "population", "topLevelDomain"]
            let chooseCategory = categories.sort(() => 0.5 - Math.random());
            let chosen = chooseCategory[0];
            setChosen(chooseCategory[0])
            let countryName = selected[0].name;
            setCountryName(selected[0].name);
            let rightAnswer = selected[0][chosen];
            let wrongAnswer1 = selected[1][chosen];
            let wrongAnswer2 = selected[2][chosen];
            let wrongAnswer3 = selected[3][chosen];
            let shuffledAnswers = [rightAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3]
            shuffledAnswers.sort(() => 0.5 - Math.random());

            // Random? function shuffleArray(array) {
            //     for (var i = array.length - 1; i > 0; i--) {
            //         var j = Math.floor(Math.random() * (i + 1));
            //         var temp = array[i];
            //         array[i] = array[j];
            //         array[j] = temp;
            //     }
            // }   https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

            console.log(countryName)
            console.log(rightAnswer);
            console.log(wrongAnswer1);
            console.log(wrongAnswer2);
            console.log(wrongAnswer3);
            setAnswers(shuffledAnswers)
            console.log("rightanswer " + rightAnswer)
            setIsLoaded(true)

        }
    }, [gameData])

    const changeState = () => {
        setIsLoaded(false);
    }

    function setId() {
        const id = answerId
        setAnswerId(answerId + 1)
        return (
            id
        )
    }

    function onClick() {
        console.log(rightAnswer)
        if (rightAnswer === ButtonAnswer.textContent) {
            setCountRight(countRight + 1);

        } else {
            setCountWrong(countWrong + 1);
        }
        return (
            <>
            </>
        )
    }


    return (
        <>
            <Question chosen={chosen} countryName={countryName}/>
            <div>
                {answers?.map(answer => <ButtonAnswer onClick={onClick} id={setId}
                                                      key={setId}
                                                      AntwortMoeglichkeit={answer}/>)}
            </div>
            <Counter countRight={countRight} countWrong={countWrong}/>

            <ButtonNextQuestion changeState={changeState}/>
        </>
    )
}