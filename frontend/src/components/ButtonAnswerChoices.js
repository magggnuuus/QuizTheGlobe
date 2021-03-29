import ButtonAnswer from "./ButtonAnswer";
import {useState} from "react"

// a b c d als antwortmöglichkeiten definieren. also input von ner api
const ahh = Math.random().toString(36).substr(2, 5);
const bee = Math.random().toString(36).substr(2, 5);
const cee = Math.random().toString(36).substr(2, 5);
const dae = Math.random().toString(36).substr(2, 5);



function ButtonAnswerChoices() {
   var [answers, setAnswers] = useState([ahh, bee, cee, dae])
    answers = answers.sort(() => Math.random() - 0.5)

    const [lockedAnswer, setLockedAnswer] = useState("")
    const [answerId, setAnswerId] = useState(1)
    const [selected, setSelected] = useState(false)


    function setId() {
        const id = answerId
        setAnswerId(answerId + 1)

        return (
            id

        )
    }

   function onClick() {
        setSelected(true)

    }




    return (
        <div>
            {answers.map(answer => <ButtonAnswer id={setId} onClick={onClick}  key={setId}
                                                 AntwortMoeglichkeit={answer}/>)}
        </div>
    )
}


export default ButtonAnswerChoices