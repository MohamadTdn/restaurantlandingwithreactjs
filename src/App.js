import './App.css';
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Offers from './Components/Offers/Offers'
import Menu from './Components/Menu/Menu'

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <About></About>
      <Offers></Offers>
      <Menu></Menu>
    </div>
  );
}

export default App;
