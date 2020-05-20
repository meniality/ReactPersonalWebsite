import React, {useState} from 'react';
import './App.css';
import Header from './containers/header'
import NavBar from './containers/navBar'
import HomePage from './containers/pages/home'
import ProjectsPage from './containers/pages/projects'

function App() {

  const [selectedPage, setSelectedPage] = useState('home')

  const renderPage = () => {
    switch(selectedPage) {
      case 'home':
        return (
          <HomePage />
        )
      case 'projects':
        return (
          <ProjectsPage />
        )
      default:
        return null
    }
  }
  return (
    <div className="App">
      <Header />
      <NavBar setSelectedPage={setSelectedPage}/>
      {renderPage()}
    </div>
  );
}

export default App;
