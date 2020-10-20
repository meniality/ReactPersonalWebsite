import React from 'react'

function Footer(){
  return(
    <div style={styles.footerDiv}>
      <div>
        <a href = "https://www.linkedin.com/in/patrick-hoehn-0a1238197/" target="_blank" rel="noopener noreferrer">
          <img id = "linkedin-icon"className= "icon" alt ="linkedIn" src="https://img.icons8.com/color/48/000000/linkedin.png"/>
        </a>
        <a href = "https://github.com/meniality" target="_blank" rel="noopener noreferrer">
          <img id = "github-icon" className= "icon" alt = "github" src="https://img.icons8.com/windows/48/000000/github.png"/> 
        </a>
        <a href ="https://patrh99.wixsite.com/website/blog" target="_blank" rel="noopener noreferrer">
          <img id = "wix-icon" className= "icon" alt = "Wix" src="https://img.icons8.com/windows/48/000000/wix.png"/>
        </a>
      </div>
      <p id = "footer-text">
        &copy; 2020 Patrick Hoehn, Made in React
      </p>
    </div>
  )
}

export default Footer

const styles = {
  footerDiv:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f5f0',
    paddingTop: '30px'
  }
}