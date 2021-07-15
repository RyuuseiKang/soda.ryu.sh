import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom";
import Snowfall from "react-snowfall";
import char1 from './assets/char1.png';

function App() {
  return (
    <div className="App">
      <div className="Contents" style={{
      }}>

      </div>
      <div style={{ zIndex: 1, }}>
        <div className='moveCharacter' style={{ position: 'fixed', float: 'right', right: '10vw', bottom: '10vh', width: 100, height: 100, }}>
          <img src={char1} width={'100px'} height={'100px'} style={{ objectFit: 'contain' }}></img>

        </div>
        <Snowfall
          style={{ transform: `rotate(180deg)`, height: '100%' }}
          color="#C8D276C0"
          snowflakeCount={40}
          speed={[1, 2]}
          wind={[0, 0]}
          radius={[2, 20]}
        />
      </div>
    </div>
  );
}

export default App;
