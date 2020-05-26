import React from 'react'
import styled from 'styled-components';

function NavBar(props) {
  
  const {setSelectedPage} = props

  return (
    <div style={styles.navBarDiv}>
      <Tab onClick = {() => setSelectedPage('home')}>
        Home
      </Tab>
      <Tab onClick = {() => setSelectedPage('projects')}>
        Projects
      </Tab>
      <Tab onClick = {() => {window.location='https://patrh99.wixsite.com/website/blog'}}>
        Blog
      </Tab>
      <Tab onClick = {() => {window.open('/Patrick Hoehn Technical Resume.pdf', '_blank')}}>
        Resume
      </Tab>
      <Tab onClick = {() => setSelectedPage('contactMe')}>
        Contact Me
      </Tab>
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
border-left-style: solid;
border-width: 1px;
border-color: rgb(78, 78, 78);
font-size: 20px;
font-family: 'Frank Ruhl Libre';
&:hover {
  background-color: rgb(188, 191, 193)
}
&:focus {
  outline: none
}
`

const styles = {
  navBarDiv:{
    height: 45,
    backgroundColor: "rgb(226, 230, 233"
  },
}