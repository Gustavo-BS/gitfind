import Header from "../../components/Header/Header";
import backgorund from "../../assets/background.png"
import "./styles.css"

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="conteudo">
        <img src={backgorund} className="background" alt="background app"/>
        <div className="info">
          <div>
            <input name="usuario" placeholder="@username"></input>
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
