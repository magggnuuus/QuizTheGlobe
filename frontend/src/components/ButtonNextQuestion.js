import React from 'react';

function ButtonNextQuestion({changeState}) {

    //  const [ /*answers */, setAnswers] = useState("")


    return (
        <div>

            <button onClick={changeState} type="button">
                Next Question
            </button>
        </div>
    );
}

export default ButtonNextQuestion;