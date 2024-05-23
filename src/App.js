import './App.css';
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Offers from './Components/Offers/Offers'
import Menu from './Components/Menu/Menu'
import News from './Components/News/News'
import Gallery from './Components/Gallery/Gallery'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <About></About>
      <Offers></Offers>
      <Menu></Menu>
      <News></News>
      <Gallery></Gallery>
      <Contact></Contact>
    </div>
  );
}

export default App;
