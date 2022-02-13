import React from 'react'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <p>
        &copy;Copyright by{' '}
        <a target="_blank" href="https://www.linkedin.com/in/ayush-choubey-4974b821a/">
          Ayush Choubey
        </a>
        . <br />
        All Rights Reserved. {year}
      </p>
    </footer>
  )
}

export default Footer