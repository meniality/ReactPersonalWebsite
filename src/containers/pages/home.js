import React from 'react'
import styled from 'styled-components'

function HomePage() {
  return (
    <BackgroundContainer>
      <div style = {styles.firstDiv}>
        <MainPageImage src="https://drive.google.com/uc?id=1CIkHpbvdrzCUOTcUUCGunYasXNU9iezb" />
        <div style = {styles.introDiv}>
          <h3 style ={styles.intro}>Hello, I'm Patrick.</h3>
          <p style={styles.paragraph}>
            I am a recent graduate from the Flatiron School bootcamp in Denver. 
            I had been working in the retail jewelry industry for many years and 
            I knew I wasn't happy. I wanted to create. I wanted to do something 
            that actually mattered. I though back on the times in high school when I 
            was coding and the joys it brought me and I decided it was now or never. 
            It was time to put everything I have into a career change and go for it. 
          </p>
        </div>
      </div>
    </BackgroundContainer>
  )
}

export default HomePage

const BackgroundContainer = styled.div`
  background-color: #f4f5f0;
  background-size: cover;
  padding-top: 140px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center`

const MainPageImage = styled.img`
  object-fit: cover;
  width: 25rem;
  height: 25rem;
  border-radius: 125px;
  margin: 3rem;
  box-shadow: 5px 6px 8px;`

const styles = {
  imageDiv: {
    height: 500,
    display: 'flex',
    justifyContent: 'center',
  },
  introDiv:{
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center'
  },
  intro:{
    fontSize: 40
  },
  paragraph:{
    margin: 40,
    marginTop: 30,
    marginBottom: 30,
    fontFamily: 'Adamina',
    color: 'rgb(70, 70, 70)',
    fontSize: '1.3rem',
    textAlign: 'center',
  },
  firstDiv:{
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    backgroundImage: 'linear-gradient(to bottom right, rgb(251 207 207), rgb(230 230 167))',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '20px',
    boxShadow: '3px 6px 8px'
  }
}

