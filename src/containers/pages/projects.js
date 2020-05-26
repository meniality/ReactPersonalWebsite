import React from 'react'

function ProjectsPage() {
  return (
    <div style={styles.outerDiv}>
      <div style = {styles.backgroundDiv}>
        <div style = {styles.projectContainer}>
          <h3 style={styles.projectTitle}>Dm Mapper</h3>
          <iframe width="840" height="472" src="https://www.youtube.com/embed/yAn3X77H940" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <p style= {styles.description}>The DM mapper is an application built in React Native for the Dungeon/Game Master on the go. The application allows a user to create a card with whatever information they wish on it. They can then easily make relationships between cards which allows the user to build a tree of interconnected cards. In this way the user can organize the world that they are creating by seeing what card belongs to other cards.</p>
          <div style={styles.githubDiv}>
            <a href = "https://github.com/meniality/DmMapper" target="_blank">Github for Front End</a>
            <a href = "https://github.com/meniality/DmMapperBackEnd" target="_blank">Github for Back End</a>
          </div>
        </div>
        <div style = {styles.projectContainer}>
          <h3 style={styles.projectTitle}>BibFox</h3>
          <iframe width="840" height="472" src="https://www.youtube.com/embed/ZT6jnVjRpR0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <p style= {styles.description}>BibFox is a Single Page App that allows a visitor to create a new user account. Within this account the user can add and remove books in their personal library. A user can add title, author, page count, description, and an image URL for each book. A user can also look at the embedded Google Maps API to locate a book share kiosk nearest them.</p>
          <div style={styles.githubDiv}>
            <a href = "https://github.com/meniality/library-share-frontend" target="_blank">Github for Front End</a>
            <a href = "https://github.com/meniality/library_share_backend" target="_blank">Github for Back End</a>
          </div>
        </div>
        <div style = {styles.projectContainer}>
          <h3 style={styles.projectTitle}>Board Game Meetup</h3>
          <iframe width="840" height="472" src="https://www.youtube.com/embed/KafJbb7Uj0c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <p style= {styles.description}>Within The Board Game Meetup you can create a new meetup which includes date, time, location and you can pick the game from what is currently loaded in the back end. Upon submiting, the form adds a new meet up card on the front page. You can also add new users on the front page. You can click on any meetup card which brings you to its individual show page. On this page it displays the info for the meetup along with which players are currently signed up for the meetup. On this page you can add players, update the location and delete the meetup. You can click on either the game name or player name and it will bring you to their indivdual show pages. On a players Show Page it shows which board games are owned by that player which and allows a user to add a game to a players library.</p>
          <div style={styles.githubDiv}>
            <a href = "https://github.com/meniality/BoardGameMeetupFrontend" target="_blank">Github for Front End</a>
            <a href = "https://github.com/meniality/BoardGameMeetupBackend" target="_blank">Github for Back End</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage

const styles = {
  outerDiv:{
    display: 'flex',
    justifyContent: 'center',
    backgroundImage: 'linear-gradient(to bottom right, hsl(219, 23%, 55%), hsl(201, 13%, 90%))',
    backgroundSize: 'cover',
  },
  backgroundDiv: {
    width: '92%',
    margin: 20,
    backgroundColor: 'rgb(227, 227, 232',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  projectContainer:{
    width: '80%',
    backgroundColor: 'rgb(197, 197, 197)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    borderRadius: 10
  },
  projectTitle:{
    fontSize: 40,
    fontFamily: 'Adamina',
    margin: 10
  },
  description:{
    width: '75%',
    margin: 20,
    fontFamily: 'Adamina',
  },
  githubDiv:{
    width: '50%',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 20
  }
}

