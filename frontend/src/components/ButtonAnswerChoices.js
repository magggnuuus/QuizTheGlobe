import ButtonAnswer from "./ButtonAnswer";
import {useState} from "react"

// a b c d als antwortmöglichkeiten definieren. also input von ner api
const ahh = "aah";
const bee = "bee";
const cee = "cee";
const dae = "dee";



function ButtonAnswerChoices() {
   var [answers /*, setAnswers */ ] = useState([ahh, bee, cee, dae])
    answers = answers.sort(() => Math.random() - 0.5)

  //  const [lockedAnswer, setLockedAnswer] = useState("")
    const [answerId, setAnswerId] = useState(1)
  //  const [selected, setSelected] = useState(false)


    function setId() {
        const id = answerId
        setAnswerId(answerId + 1)

        return (
            id

        )
    }

/*   function onClick() {
        setSelected(true)

    } */




    return (
        <div>
            {answers.map(answer => <ButtonAnswer id={setId}  key={setId}
                                                 AntwortMoeglichkeit={answer}/>)}
        </div>
    )
}


export default ButtonAnswerChoices