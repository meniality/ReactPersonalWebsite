import React, {useEffect} from 'react'
import styled from 'styled-components'
import headshot from '../../images/headshot.JPG'
import codingPic from '../../images/coding.jpg'
import boardgamesPic from '../../images/boardgames.jpg'

function HomePage() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <BackgroundContainer> 
      <div style = {styles.firstDiv}>
        <MainPageImage src = {headshot} />
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
      <div style = {styles.secondDiv}>
      <div style = {styles.introDiv}>
          <h3 style ={styles.intro}>Becoming A Coder.</h3>
          <p style={styles.paragraph}>
            I started my coding career back in highshcool where I took 2 years at the technical college in the 
            "big" town near my home town. There we focused on Visual Basic and the teacher was learning as he went and
            was only a week ahead of where the students were. I had a blast creating simple projects there like calclators 
            and calendars but when I graduated, for whatever reason, I never thought a coding career was even a possibility. 
            10 years later I was discussing a career change with my boyfriend and he pitched coding. I remembered the excitment 
            I used to get whenever I made something appear on the page and 2 months later I was attending my first day at Flatiron School's 
            bootcamp. What followed was an intensive 15 week course that was jam packed full of amazing information taught by an even 
            more amazing team of teachers and leads. Upon graduation I knew I had made the right decision to become a coder and love it 
            more every day.
          </p>
        </div>
        <MainPageImage src = {codingPic} />
      </div>
      <div style = {styles.thirdDiv}>
        <MainPageImage src = {boardgamesPic} />
        <div style = {styles.introDiv}>
          <h3 style ={styles.intro}>Hobbies and Interests.</h3>
          <p style={styles.paragraph}>
            As you can probably tell from my projects, board games are a big part of my life. When I say board games people's minds usually
            go to the likes of Monopoly and Risk but there is such a rich and vibrant world of games out there that put games like those to 
            shame. Games like Five Tribes, Gloomhaven, Patchwork and countless are currently being played on my gaming table. Along with board
            games, I am also a costumer with Halloween being my favorite holiday simply for the excuse to build a new costume. My previous 
            costuems include Ironman, The Rocketeer, Batman and many others. 
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
  flex-direction: column;
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
  },
  secondDiv:{
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    marginTop: '100px',
    backgroundImage: 'linear-gradient(to bottom right, rgb(138 203 255), rgb(193 165 245))',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '20px',
    boxShadow: '3px 6px 8px'
  },
  thirdDiv :{
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    marginTop: '100px',
    backgroundImage: 'linear-gradient(to bottom right, rgb(255 217 102), rgb(251 162 207))',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '20px',
    boxShadow: '3px 6px 8px'
  }
}

