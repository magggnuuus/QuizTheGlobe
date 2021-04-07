import './App.css';
import {useState} from "react";
import Game from "./pages/Game";
import UserName from "./pages/UserName";
import styled from "styled-components/macro";
import Header from "./components/Header";


function App() {
    const [name, setName] = useState();
    return (
        <Center>
            <Header/>
            {name && <Game/>}
            {!name && <UserName setName={setName}/>}
        </Center>
    )


}

const Center = styled.div`
text-align: center;
 font-size: calc(10px + 2vmin);
    color: #92aac7;
`

export default App;
