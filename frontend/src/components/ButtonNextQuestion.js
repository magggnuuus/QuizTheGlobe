import React from 'react';

function ButtonNextQuestion({loadNewQuestion}) {

    //  const [ /*answers */, setAnswers] = useState("")


    return (
        <div>

            <button onClick={loadNewQuestion} type="button">
                Next Question
            </button>
        </div>
    );
}

export default ButtonNextQuestion;