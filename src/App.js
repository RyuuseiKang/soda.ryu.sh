import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom'
import Snowfall from 'react-snowfall'

function App() {
  return (
    <div className="App" >
      <Snowfall style={{ transform: `rotate(180deg)` }} color="#C8D276" snowflakeCount={40} speed={[1, 2]} wind={[0, 0]} radius={[2, 12]} />
    </div >
  );
}

export default App;
