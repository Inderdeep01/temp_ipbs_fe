import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Auth from './components/Auth'
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element = {<Home/>}/>
          <Route exact path='/signup' element = {<Auth/>}/>
          <Route exact path='/login' element = {<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
