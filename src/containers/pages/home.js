import React from 'react'
import styled from 'styled-components'

function HomePage() {
  return (
    <BackgroundContainer>
      {/* <div style={styles.imageDiv}> */}
        <MainPageImage src="https://drive.google.com/uc?id=1CIkHpbvdrzCUOTcUUCGunYasXNU9iezb" />
      {/* </div> */}
      <h3 style ={styles.intro}>Hi, I'm Patrick.</h3>
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
  align-items: center;
  `
  

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
  }
}

