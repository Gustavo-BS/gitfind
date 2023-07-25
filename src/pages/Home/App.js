import Header from "../../components/Header/Header";
import backgorund from "../../assets/background.png"
import "./styles.css"
import ItemList from "../../components/ItemList/ItemList";

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
          <div className="perfil">
            <img src="https://avatars.githubusercontent.com/u/106408316?s=400&u=ac7c573bb1d1f0eb0c3cacaa931edc599b01e0ae&v=4" className="profile" alt="user img"></img>
            <div>
              <h3>Gustavo Borges</h3>
              <span>@Gustavo-BS</span>
              <p>Descrição</p>
            </div>
          </div>
          <hr/>
          <div>
            <h4 className="repositorio">Repositorios</h4>
            <ItemList title="teste" description="teste descri"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
