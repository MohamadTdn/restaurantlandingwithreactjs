import './App.css';
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Offers from './Components/Offers/Offers'
import Menu from './Components/Menu/Menu'
import News from './Components/News/News'

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <About></About>
      <Offers></Offers>
      <Menu></Menu>
      <News></News>
    </div>
  );
}

export default App;
