import './App.css';
import ButtonNextQuestion from "./components/ButtonNextQuestion";
import ShowQuestion from "./components/ShowQuestion";
import ButtonAnswerChoices from "./components/ButtonAnswerChoices";
import ButtonSaveAnswer from "./components/ButtonSaveAnswer";





function App() {

    return (
        <div className="App">
            <header className="App-header">
                <h1>Quiz about?!</h1>

                <ShowQuestion/>

                <ButtonAnswerChoices/>

                



                <p><ButtonSaveAnswer/><ButtonNextQuestion/></p>


            </header>
    </div>
  );
}

export default App;
