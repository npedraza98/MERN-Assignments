import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import AuthorForm from './components/AuthorForm';
import AuthorList from './components/AuthorList';
import EditAuthor from './components/EditAuthor';

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AuthorList/>}/>
          <Route path='/createauthor' element={<AuthorForm/>}/>
          <Route path='/edit/:id' element={<EditAuthor/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
