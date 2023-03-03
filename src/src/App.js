import logo from './logo.svg';
import './App.css';
import Aluno from './Aluno/Aluno';
import Components from './Components/components';
import mook from './Components/hard.json'

function App() {
  return (
    <div className="App">
      <header>
        <Aluno  />
        <div className="pae">
        {mook.map(mook => (
          <Components
            src={mook.src}
            titulo={mook.titulo}
            descricao={mook.descricao}
          />
        ))}
        </div>
      </header>
    </div>
  );
}

export default App;
