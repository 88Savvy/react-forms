import "./App.css";
import { useState } from "react";
import FormComplexos from "./components/FormComplexos";
import FormSimples from "./components/FormSimples";
import FormIdade from "./components/FormIdade";
import FormLogin from "./components/FormLogin";
import MusicList from "./components/MusicList";

function App() {
  const [showMusicList, setShowMusicList] = useState(false);

  const toggleMusicList = () => {
    setShowMusicList(!showMusicList);
  };

  return (
    <>
      <div className="exercicio">
        <h1>Form de Idade</h1>
        <FormIdade />
      </div>
      <div className="exercicio">
        <h1>Form de Login</h1>
        <FormLogin />
      </div>
      <div className="exercicio">
        <h1>Form de Músicas</h1>
        <button onClick={toggleMusicList}>
          {showMusicList ? "Hide Add Song Form" : "Show Add Song Form"}
        </button>
        {showMusicList && <MusicList />}
      </div>
    </>
  );
}

export default App;
