import './App.scss';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import PortfolioList from './components/portfolioList/PortfolioList';

function App() {
  return (
    <div className="App">
      <Intro/>
      <About/>
      {/* <Portfolio/> */}
      <PortfolioList/>
    </div>
  );
}

export default App;
