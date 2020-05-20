import React from 'react'
import styled from 'styled-components'

function HomePage() {
  return (
    <BackgroundContainer>
        <MainPageImage src="https://drive.google.com/uc?id=1CIkHpbvdrzCUOTcUUCGunYasXNU9iezb" />
      <h3 style ={styles.intro}>Hi, I'm Patrick.</h3>
      <p style={styles.paragraph}>
        I am a recent graduate from the Flatiron School bootcamp in Denver. 
        I had been working in the retail jewelry industry for many years and 
        I knew I wasn't happy. I wanted to create. I wanted to do something 
        that actually mattered. I remebered the times in high school when I 
        was coding and the joys it brought me. I decided it was now or never 
        to put everything I have into a career change and go for it. 
      </p>
    </BackgroundContainer>
  )
}

export default HomePage

const BackgroundContainer = styled.div`
  background-image: linear-gradient(to bottom right, hsl(219, 23%, 55%), hsl(201, 13%, 90%));
  background-size: cover;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;`

const MainPageImage = styled.img`
  object-fit: cover;
  width: 25rem;
  height: 25rem;
  border-radius: 200px;
  margin: 2rem;`

const styles = {
  imageDiv: {
    height: 500,
    display: 'flex',
    justifyContent: 'center',
  },
  intro:{
    fontSize: 40
  },
  paragraph:{
    margin: 90,
    marginTop: 30,
    marginBottom: 30,
    fontFamily: 'Adamina',
    color: 'rgb(70, 70, 70)',
    fontSize: '1.3rem',
    textAlign: 'center',
  }
}

