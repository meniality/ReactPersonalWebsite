import React, {useState} from 'react';
import './App.css';
import Header from './containers/header'
import NavBar from './containers/navBar'
import HomePage from './containers/pages/home'
import ProjectsPage from './containers/pages/projects'
import ContactMe from './containers/pages/contactMe'
import Footer from './containers/footer'

function App() {

  const [selectedPage, setSelectedPage] = useState('home')

  const renderPage = () => {
    switch(selectedPage) {
      case 'home':
        return <HomePage />
      case 'projects':
        return <ProjectsPage />
      case'contactMe':
          return <ContactMe />
      default:
        return null
    }
  }
  return (
    <div className="App">
      <div style = {styles.topDiv}>
        <Header />
        <NavBar setSelectedPage={setSelectedPage}/>
      </div>
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;

const styles = {
  topDiv:{
    position: 'fixed',
    width: '100%'
  },
}