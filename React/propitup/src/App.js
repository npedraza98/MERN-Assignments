import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard
        lastName={"Jane"}
        firstName={"Doe"}
        age={45}
        hair={"Black"}
      />
      <PersonCard
        lastName={"Smith"}
        firstName={"John"}
        age={88}
        hair={"Brown"}
      />
      <PersonCard
        lastName={"Fillmore"}
        firstName={"Millard"}
        age={50}
        hair={"Brown"}
      />
      <PersonCard
        lastName={"Smith"}
        firstName={"Maria"}
        age={62}
        hair={"Brown"}
      />
    </div>
  );
}

export default App;
