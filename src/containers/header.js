import React from 'react'

function Header() {
  return (
    <div style= {styles.outerDiv}>
      <h1 style={styles.name}>Patrick Hoehn</h1>
      <h2 style={styles.name}>Software Engineer</h2>
    </div>
  )
}

export default Header

const styles = {
  outerDiv: {
    display: 'block',
    height: 150,
    backgroundColor: 'rgba(237, 237, 237, 0.795)',
    fontSize: 40
  },
  name: {
    float: 'left'
  }
}