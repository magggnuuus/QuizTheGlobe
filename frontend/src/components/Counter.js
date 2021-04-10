import React from 'react';
import {ThumbDownAltTwoTone, ThumbUp} from "@material-ui/icons";
import styled from "styled-components/macro";
import {green, red} from "@material-ui/core/colors";


export default function Counter({countRight, countWrong}) {


    return (
        <>
            <CountContainer><p> {countRight} <ThumbUp style={{fontSize: 60, color: green[500]}}/> <ThumbDownAltTwoTone
                style={{fontSize: 60, color: red[500]}}/>{countWrong} </p></CountContainer>
        </>
    )
}


const CountContainer = styled.div`
    font-size: 60px;
`