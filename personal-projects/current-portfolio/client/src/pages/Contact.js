import React from 'react'

const Contact = () => {
  function sendEmail() {
    window.location = 'mailto:jinim.bran@gmail.com'
  }

  return (
    <div id="contact" className="scroller">
      <div id="contact-main">
        <h1>Let's Talk!</h1>
        <h2>My inbox is always open, so reach out if you'd like to talk!</h2>
        <div onClick={sendEmail} id="say-hi">
          Say Hi!
        </div>
      </div>
    </div>
  )
}

export default Contact
