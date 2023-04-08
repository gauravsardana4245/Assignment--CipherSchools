import Container from './components/Container';
import './App.css';
import Navbar from './components/Navbar';
import UserBox from './components/UserBox';
import { useState } from 'react';
import {
  HashRouter,
  Route,
  Routes
} from "react-router-dom";
import ProfilePage from './components/ProfilePage';
import FollowersDisplay from './components/FollowersDisplay';

function App() {
  const [mode, setMode] = useState("light")

  const toggleMode = () => {

    if (mode !== "dark") {
      setMode("dark");
      document.body.style.backgroundColor = 'black';
      document.body.style.color = "white"
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = "black"
    }
  }

  return (
    <div className="App">
      <HashRouter>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route exact path='/' element={<ProfilePage mode={mode} />} />
          <Route exact path='/followers' element={<FollowersDisplay />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
