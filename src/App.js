
import './App.css';

import Header from './components/header'
import Hero from './components/hero'
import Perks from './components/perks'
import Pricing from './components/pricing'
import Signup from './components/signup'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero/>
      <Perks/>
      <Pricing />
      <Signup />
    </div>
  );
}

export default App;
