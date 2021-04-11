import './App.css';
import {useState} from "react";
import Game from "./pages/Game";
import UserName from "./pages/UserName";
import styled from "styled-components/macro";
import Header from "./components/Header";


function App() {
    const [name, setName] = useState();
    return (
        <GridWrapper>
            <Header/>
            <Main>

                {name && <Game/>}
                {!name && <UserName setName={setName}/>}
            </Main>
        </GridWrapper>
    )


}

const Main = styled.div`


text-align: center;

 font-size: calc(11px + 2vmin);
 
 
   `
const GridWrapper = styled.div`
display: grid;
grid-template-rows: auto 100vh`

export default App;
