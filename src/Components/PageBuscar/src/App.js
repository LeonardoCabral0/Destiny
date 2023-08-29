import './App.css';
import Header from './Components/Header/Header';
import PageBuscar from './Components/PageBuscar/PageBuscar';
import PageCadastrar from './Components/PageCadastrar/PageCadastrar';

function App() {
  return (
    <div className="App">
      <Header/>
      <PageBuscar />
      {/* <PageCadastrar /> */}
    </div>
  );
}

export default App;
