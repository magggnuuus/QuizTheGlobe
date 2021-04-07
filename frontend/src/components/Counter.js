import React from 'react';

export default function Counter({countRight, countWrong}) {


    return (
        <div>
            <p>You gave right {countRight} answers</p>
            <p>You gave wrong {countWrong} answers</p>


        </div>
    )
}