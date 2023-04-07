import Container from './components/Container';
import './App.css';
import Navbar from './components/Navbar';
import UserBox from './components/UserBox';

function App() {
  return (
    <div className="App">
      <Navbar />
      <UserBox />
      <Container />
    </div>
  );
}

export default App;
