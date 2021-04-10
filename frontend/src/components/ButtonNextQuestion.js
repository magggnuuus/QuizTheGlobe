import React from 'react';
import styled from "styled-components/macro";

export default function ButtonNextQuestion({loadNewQuestion, nextQuestionDisabled}) {

    return (
        <div>
            <FunkyButton onClick={loadNewQuestion} disabled={nextQuestionDisabled} type="button"><h2>
                Next Question</h2>
            </FunkyButton>
        </div>
    );
}

const FunkyButton = styled.button`
      background-color: blueviolet;
      margin: 10px;
    border: none;
    color: #92aac7
    padding: 40px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 28px;
    background: linear-gradient(currentColor 0 0) var(--p, 100%) 0,
    linear-gradient(currentColor 0 0) 0 var(--d, 0),
    linear-gradient(currentColor 0 0) var(--d, 0) 100%,
    linear-gradient(currentColor 0 0) 100% var(--p, 100%);
    background-size: var(--d, 0) 3px, 3px var(--d, 0);
    background-repeat: no-repeat;
    transition: 0.5s, background-position 0s 0.5s;
&:hover {
    background-color: lightgoldenrodyellow;
    --d: 100%;
    --p: 0%;
}

&:disabled {
    color: grey;
    opacity: 0.1;
    cursor: default;
}
`