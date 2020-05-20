import React, {useState} from 'react';
import './App.css';
import Header from './containers/header'
import NavBar from './containers/navBar'

function App() {

  const [selectedPage, setSelectedPage] = useState('home')
  
  return (
    <div className="App">
      <Header />
      <NavBar setSelectedPage={setSelectedPage}/>
    </div>
  );
}

export default App;
