import React from 'react'

function ContactMePage(){
  return(
    <div style={styles.outerDiv}>
      <a 
        href = {'https://www.linkedin.com/in/patrick-hoehn-0a1238197/'} 
        target="_blank"
        style = {styles.anchor}
      >
        LinkedIn
      </a>
      <a 
        href = {'https://github.com/meniality'} 
        target="_blank"
        style = {styles.anchor}
        >
        GitHub
      </a>

      <h3 style = {styles.h3}>Email: thePatrickHoehn@gmail.com</h3>
    </div>
  )
}

export default ContactMePage

const styles={
  outerDiv:{
    height: 500,
    backgroundImage: 'linear-gradient(to bottom right, hsl(219, 23%, 55%), hsl(201, 13%, 90%))',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  anchor:{
    margin:40,
    fontSize: 30
  },
  h3:{
    margin:40,
    fontSize: 30
  }
}