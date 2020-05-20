import React from 'react'
import styled from 'styled-components';

function NavBar(props) {
  
  const {setSelectedPage} = props

  return (
    <div style={styles.navBarDiv}>
      <Tab>
        Home
        </Tab>
      <button 
        className = {'navBarTab'}
        style = {styles.navBarTab}
        onClick = {() => setSelectedPage('projects')}
      >
        Projects
      </button>
      <button 
        className = {"navBarTab"}
        style = {styles.navBarTab}
        onClick = {() => setSelectedPage('blog')}
      >
        Blog
      </button>
      <button 
        className = {"navBarTab"}
        style = {styles.navBarTab}
        onClick = {() => setSelectedPage('resume')}
      >
        Resume
      </button>
      <button 
        className = {"navBarTab"}
        style = {styles.navBarTab}
        onClick = {() => setSelectedPage('contactMe')}
      >
        Contact Me
      </button>
    </div>
  )
}

export default NavBar

const Tab = styled.button`
width: 20vw;
height: 100%;
border-style: none;
background-color: rgb(226, 230, 233);
border-right-style: solid;
border-width: 2px;
border-color: rgb(78, 78, 78);
&:hover {
  background-color: rgb(188, 191, 193)
}
`

const styles = {
  navBarDiv:{
    height: 45,
    backgroundColor: "rgb(226, 230, 233"
  },
  navBarTab: {
    width: '20vw',
    height: '100%',
    borderStyle: 'none',
    backgroundColor: 'rgb(226, 230, 233',
    borderRightStyle: 'solid',
    borderWidth: 2,
    borderColor: 'rgb(78, 78, 78)'
  }
}