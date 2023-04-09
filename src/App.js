import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';
import {
  HashRouter,
  Route,
  Routes
} from "react-router-dom";
import ProfilePage from './components/ProfilePage';
import FollowersDisplay from './components/FollowersDisplay';
import UserState from './context/users/UserState';

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
        <UserState>
          <Navbar mode={mode} toggleMode={toggleMode} />
          <Routes>
            <Route exact path='/' element={<ProfilePage mode={mode} />} />
            <Route exact path='/followers' element={<FollowersDisplay />} />
          </Routes>
        </UserState>
      </HashRouter>
    </div>
  );
}

export default App;
