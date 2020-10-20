import React, {useEffect}  from 'react'
import styled from 'styled-components'
import theAgency from '../../images/TheAgencyScreenShot.png'

function ProjectsPage() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={styles.outerDiv}>
      <div style = {styles.backgroundDiv}>
        <div style = {styles.projectContainer1}>
          <div style={styles.outerTitleDiv}>
            <div style = {styles.innerTitleDiv}>
              <h3 style={styles.projectTitle}>The Agency</h3>
              <p style ={styles.projectType}>Web App</p>
            </div>
          </div>
          <div style = {styles.staticImageContainer}>
            <a style = {styles.staticImageAnchor} href = "https://the-agency-clicker.web.app/" target="_blank" rel="noopener noreferrer">
              <AgencyImage src = {theAgency} alt = "The Agency"/>
            </a>
          </div>
            <a href = "https://the-agency-clicker.web.app/" target="_blank" rel="noopener noreferrer"> Click to Play!</a>
          <p style= {styles.description}>The Agency is a test of my knowledge of react-redux and seeing how complicated I could make a project. This is just the 
              beginning and is an ongoing project so expect some issues. The Agency is a clicker/idle style game. I fell in love with the game style many years ago 
              and decided I wanted to put my own spin on the genre. The app only has the first 20 mins of gameplay online and currently it does not have a save function 
              due to still being in test. It is built in React with future plans of having a Java backend to support online saving and player interactivity.</p>
          {/* <div style={styles.githubDiv}>
          </div> */}
            <a style = {styles.agencyGit}href = "https://github.com/meniality/theAgencyFrontEnd" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
        <div style = {styles.projectContainer2}>
          <div style={styles.outerTitleDiv}>
            <div style = {styles.innerTitleDiv}>
              <h3 style={styles.projectTitle}>Dm Mapper</h3>
              <p style ={styles.projectType}>Mobile</p>
            </div>
          </div>
          <iframe 
            title = "dmMapper"
            width = '80%'
            height = '472'
            borderRadius = '9px'
            src="https://www.youtube.com/embed/yAn3X77H940" 
            frameBorder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullScreen>
          </iframe>
          <p style= {styles.description}>The DM mapper is an application built in React Native for the Dungeon/Game Master on the go. The application allows a user to create a card with whatever information they wish on it. They can then easily make relationships between cards which allows the user to build a tree of interconnected cards. In this way the user can organize the world that they are creating by seeing what card belongs to other cards.</p>
          <div style={styles.githubDiv}>
            <a href = "https://github.com/meniality/DmMapper" target="_blank" rel="noopener noreferrer">Github for Front End</a>
            <a href = "https://github.com/meniality/DmMapperBackEnd" target="_blank" rel="noopener noreferrer">Github for Back End</a>
          </div>
        </div>
        <div style = {styles.projectContainer3}>
          <div style={styles.outerTitleDiv}>
            <div style = {styles.innerTitleDiv}>
              <h3 style={styles.projectTitle}>BibFox</h3>
              <p style ={styles.projectType}>Web App</p>
            </div>
          </div>
          <iframe 
            title = "bibFox"
            width="80%" 
            height="472" 
            src="https://www.youtube.com/embed/ZT6jnVjRpR0" 
            frameBorder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullScreen>
          </iframe>
          <p style= {styles.description}>BibFox is a Single Page App that allows a visitor to create a new user account. Within this account the user can add and remove books in their personal library. A user can add title, author, page count, description, and an image URL for each book. A user can also look at the embedded Google Maps API to locate a book share kiosk nearest them.</p>
          <div style={styles.githubDiv}>
            <a href = "https://github.com/meniality/library-share-frontend" target="_blank" rel="noopener noreferrer">Github for Front End</a>
            <a href = "https://github.com/meniality/library_share_backend" target="_blank" rel="noopener noreferrer">Github for Back End</a>
          </div>
        </div>
        <div style = {styles.projectContainer4}>
          <div style={styles.outerTitleDiv}>
            <div style = {styles.innerTitleDiv}>
              <h3 style={styles.projectTitle}>Board Game Meet Up</h3>
              <p style ={styles.projectType}>Web App</p>
            </div>
          </div>
          <iframe 
            title = "boardGameMeetup"
            width="80%" 
            height="472" 
            src="https://www.youtube.com/embed/KafJbb7Uj0c" 
            frameBorder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullScreen>
          </iframe>
          <p style= {styles.description}>Within The Board Game Meetup you can create a new meetup which includes date, time, location and you can pick the game from what is currently loaded in the back end. Upon submiting, the form adds a new meet up card on the front page. You can also add new users on the front page. You can click on any meetup card which brings you to its individual show page. On this page it displays the info for the meetup along with which players are currently signed up for the meetup. On this page you can add players, update the location and delete the meetup. You can click on either the game name or player name and it will bring you to their indivdual show pages. On a players Show Page it shows which board games are owned by that player which and allows a user to add a game to a players library.</p>
          <div style={styles.githubDiv}>
            <a href = "https://github.com/meniality/BoardGameMeetupFrontend" target="_blank" rel="noopener noreferrer">Github for Front End</a>
            <a href = "https://github.com/meniality/BoardGameMeetupBackend" target="_blank" rel="noopener noreferrer">Github for Back End</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage

const AgencyImage = styled.img`
width: 100%;
height: auto;
position: static;
&:hover {
  transform: scale(1.01);
  cursor: pointer;
  z-index: -1
}
`

const styles = {
  outerDiv:{
    display: 'flex',
    justifyContent: 'center',
    backgroundSize: 'cover',
    backgroundColor: '#f4f5f0',
    paddingTop: '140px'
  },
  backgroundDiv: {
    width: '92%',
    margin: 20,
    backgroundColor: '#f4f5f0',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  projectContainer1:{
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 40,
    borderRadius: 10,
    backgroundImage: 'linear-gradient(to bottom right, rgb(138 203 255), rgb(193 165 245))',
    boxShadow: '3px 6px 8px'
  },
  projectContainer2:{
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 40,
    borderRadius: 10,
    backgroundImage: 'linear-gradient(to bottom right, rgb(138 203 255), rgb(193 165 245))',
    boxShadow: '3px 6px 8px'
  },
  projectContainer3:{
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 40,
    borderRadius: 10,
    backgroundImage: 'linear-gradient(to bottom right, rgb(138 203 255), rgb(193 165 245))',
    boxShadow: '3px 6px 8px'
  },
  projectContainer4:{
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 40,
    borderRadius: 10,
    backgroundImage: 'linear-gradient(to bottom right, rgb(138 203 255), rgb(193 165 245))',
    boxShadow: '3px 6px 8px'
  },
  outerTitleDiv:{
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%'
  },
  innerTitleDiv:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  projectTitle:{
    fontSize: 40,
    fontFamily: 'Adamina',
    margin: 40,
    marginBottom:20
  },
  projectType: {
    fontSize: 20,
    fontFamily: 'Adamina',
    marginBottom: 20
  },
  staticImageContainer:{
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  staticImageAnchor: {
    width: '80%',
    height: 'auto',
    marginBottom: 20,
  },
  staticImage:{
    width: '100%',
    height: 'auto',
    borderRadius: 3
  },
  description:{
    width: '75%',
    margin: 40,
    fontFamily: 'Adamina',
  },
  githubDiv:{
    width: '50%',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 20,
    fontFamily: 'Adamina',
  },
  agencyGit:{
    marginBottom: 20
  }
}

