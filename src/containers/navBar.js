import React from 'react'
import styled from 'styled-components';

function NavBar(props) {
  
  const {setSelectedPage} = props

  return (
    <div style = {styles.outerDiv}>
      <div style={styles.navBarDiv}>
        <Tab onClick = {() => setSelectedPage('home')} style = {styles.home}>
          About
          <Underline/>
        </Tab>
        <Tab onClick = {() => setSelectedPage('projects')}>
          Projects
          <Underline/>
        </Tab>
        <Tab onClick = {() => {window.open('https://patrh99.wixsite.com/website/blog', '_blank')}}>
          Blog
          <Underline/>
        </Tab>
        <Tab onClick = {() => {window.open('/Patrick Hoehn Technical Resume.pdf', '_blank')}}>
          Resume
          <Underline/>
        </Tab>
        <Tab onClick = {() => setSelectedPage('contactMe')}>
          Contact
          <Underline/>
        </Tab>
      </div>
      <div style = {styles.linkIcon}>
        <a href = "https://www.linkedin.com/in/patrick-hoehn-0a1238197/" target="_blank">
          <img id = "linkedin-icon"class= "icon" src="https://img.icons8.com/color/48/000000/linkedin.png"/>
        </a>
      </div>
    </div>
  )
}

export default NavBar

const Underline = styled.div`
  display: none;
  height: 9px;
  width: 70px;
  background-color: #bfbfbf;
  margin: 0 auto;
  border-radius: 5px
`

const Tab = styled.button`
width: 100px;
height: 100%;
border-style: none;
background-color: #f4f5f0;
font-size: 20px;
font-family: 'Frank Ruhl Libre';
&:hover ${Underline}{
  display: block
}
&:hover {
  transform: translate3d(0,-5px,0);
  cursor: pointer
}
&:focus {
  outline: none
}
`

const styles = {
  outerDiv:{
    display: 'flex',
    justifyContent: 'space-between'
  },
  navBarDiv:{
    height: 45,
    backgroundColor: "#f4f5f0",
    width: '100%'
  },
  linkIcon:{
    paddingRight: 20,
    backgroundColor: "#f4f5f0",
    height: 45
  },
  home: {
    marginLeft: '-2px'
  },
  underline:{
    display: 'none',
    height: '9px',
    width: '70px',
    backgroundColor: '#bfbfbf',
    margin: '0 auto',
    borderRadius: '5px'
  }
}