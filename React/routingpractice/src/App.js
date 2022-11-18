import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Welcome from './components/Welcome';
import Text from './components/Text';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />}/>
        <Route path='/:text' element={<Text />}/>
        <Route path='/:text/:color/:bgColor' element={<Text />}/>
        




      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
