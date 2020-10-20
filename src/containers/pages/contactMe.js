import React from 'react'
import styled from 'styled-components';
import githubLogo from '../../images/GitHub_Logo.png'
import linkedInLogo from '../../images/LI-Logo.png'

function ContactMePage(){
  return(
    <div style={styles.outerDiv}>
      <div style={styles.topDiv}>
        <a style = {styles.anchor}href = "https://github.com/meniality" target="_blank" rel="noopener noreferrer">
          <ImageBack>
            <div style = {styles.container}>
              <GitIcon src={githubLogo}></GitIcon>
            </div>
          </ImageBack>
        </a>
        <a style = {styles.anchor} href = 'https://www.linkedin.com/in/patrick-hoehn-0a1238197/' target="_blank" rel="noopener noreferrer">
          <ImageBack>
            <div style = {styles.container}>
              <LinkedInIcon src={linkedInLogo}></LinkedInIcon>
            </div>
          </ImageBack>
        </a>
      </div>
      <h3 style = {styles.h3}>Email: thePatrickHoehn@gmail.com</h3>
    </div>
  )
}

export default ContactMePage

const ImageBack = styled.div`
  width: 100%;
  background-image: linear-gradient(to bottom right, rgb(251 207 207), rgb(230 230 167));
  border-radius: 5;
  box-shadow: 3px 6px 8px;
  &:hover {
    transform: scale(1.01);
    cursor: pointer
  }
`
const GitIcon = styled.img`
position: absolute;
width: 80%;
left: 11%;
top: 33%;
`

const LinkedInIcon = styled.img`
position: absolute;
width: 80%;
left: 11%;
top: 38%;
`

const styles={
  imageBack:{
    width: '100%',
    backgroundImage: 'linear-gradient(to bottom right, rgb(251 207 207), rgb(230 230 167))',
    borderRadius: 5,
    boxShadow: '3px 6px 8px'
  },
  container:{
    paddingTop: '100%',
    position: 'relative'
  },
  anchor:{
    width: '30%'
  },
  outerDiv:{
    paddingTop: '140px',
    backgroundColor: '#f4f5f0',
    backgroundSize: 'cover',
  },
  topDiv:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  h3:{
    paddingTop: 40,
    fontSize: 30,
    textAlign: 'center'
  }

}