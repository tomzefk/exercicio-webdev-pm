import { useState } from 'react';
import './App.scss';

import Header from './components/header'
import Sidebar from './components/sidebar'
import Settings from './pages/userSettings'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div id="App">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      <div className={`container ${isMenuOpen ? "open" : ""}`}>
        <Sidebar />
        <Settings />
      </div>
    </div>
  );
}

export default App;
