import styled from "styled-components/macro";

export default function ButtonAnswer({answer, onClick, disabled}) {


    return (
        <FunkyButton disabled={disabled} onClick={() => onClick(answer)}> {answer} </FunkyButton>
    )
}

const FunkyButton = styled.button`
width: 50%;
      background-color: blueviolet;
    border: none;
    color: black;
    padding: 25px;
    text-align: center;
    text-decoration: none;
    
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
    
    cursor: default;
}
    `