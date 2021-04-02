import './App.css';
import ButtonNextQuestion from "./components/ButtonNextQuestion";
import ShowQuestion from "./components/ShowQuestion";
import ButtonAnswerChoices from "./components/ButtonAnswerChoices";
import ButtonSaveAnswer from "./components/ButtonSaveAnswer";
import AddNewUser from "./components/InputFormForRanking";


function App() {

    return (
        <div className="App">
            <header className="App-header">
                <h1>Around the World</h1>

                <ShowQuestion/>

                <ButtonAnswerChoices/>


                <p><ButtonSaveAnswer/><ButtonNextQuestion/></p>

                <AddNewUser/>


            </header>
        </div>
    );
}

export default App;
