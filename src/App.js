import './App.scss';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import PortfolioList from './components/portfolioList/PortfolioList';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Intro/>
      <About/>
      <PortfolioList/>
      <Contact/>
    </div>
  );
}

export default App;
