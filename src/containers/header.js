import React from 'react'

function Header() {
  return (
    <div style= {styles.outerDiv}>
      <h1 style={styles.name}>Patrick Hoehn</h1>
      <h2 style={styles.title}>Software Engineer</h2>
    </div>
  )
}

export default Header

const styles = {
  outerDiv: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    // alignItems: 'baseline',
    height: 60,
    width: '100%',
    fontSize: 40,
    backgroundColor: '#f4f5f0'
  },
  name: {
    fontFamily: 'Frank Ruhl Libre',
    paddingLeft: '20px'
  },
  title: {
    fontFamily: 'Frank Ruhl Libre',
    fontSize: 20,
    paddingLeft: 30,
    
  }
}