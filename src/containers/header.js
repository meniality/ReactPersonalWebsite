import React from 'react'

function Header() {
  return (
    <div style= {styles.outerDiv}>
      <h1 style={styles.words}>Patrick Hoehn</h1>
      <h2 style={styles.words}>Software Engineer</h2>
    </div>
  )
}

export default Header

const styles = {
  outerDiv: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 150,
    backgroundColor: 'rgba(237, 237, 237, 0.795)',
    fontSize: 40
  },
  words: {
    margin: 10,
    fontFamily: 'Frank Ruhl Libre',
  }
}