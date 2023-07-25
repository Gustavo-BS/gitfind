import Header from "../../components/Header/Header";
import backgorund from "../../assets/background.png"
import "./styles.css"
import ItemList from "../../components/ItemList/ItemList";
import { useState } from "react";

function App() {

  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null)
  const [repos, setRepos] = useState(null)

  const handleSetDate = async () =>{
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

    if(newUser.name){
      const {avatar_url, name, bio, login} = newUser;
      setCurrentUser({avatar_url, name, bio, login});

      const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
      const newRepos = await reposData.json();

      if(newRepos.length){
        setRepos(newRepos);
      }
    }
  }

  return (
    <div className="App">
      <Header/>
      <div className="conteudo">
        <img src={backgorund} className="background" alt="background app"/>
        <div className="info">
          <div>
            <input 
             name="usuario" 
             value={user} 
             onChange={e => setUser(e.target.value)} 
             placeholder="@username">
            </input>
            <button onClick={handleSetDate}>Search</button>
          </div>
          {currentUser?.name ? (<>
            <div className="perfil">
              <img src={currentUser.avatar_url} className="profile" alt="user img"></img>
              <div>
                <h3>{currentUser.name}</h3>
                <span>@{currentUser.login}</span>
                <p>{currentUser.bio}</p>
              </div>
            </div>
            <hr/>
          </>) : null}
          {repos?.length ? (<div>
              <h4 className="repositorio">Repositorios</h4>
              {repos.map(repo => (
                <ItemList title={repo.name} description={repo.description}/>
              ))}
              
            </div>) : null}
          
        </div>
      </div>
    </div>
  );
}

export default App;
