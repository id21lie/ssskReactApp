import React from "react";

class Footer extends React.Component {
  render () {
    return(
      <footer>
        <div className="bottom-bar">
          <div className="bar-contact">
            <h2>Kontakt</h2>
            <br></br>
            <h3>Kansli</h3>
            <p>kansli@sssk.se</p>

            <h3>Allmäna frågor</h3>
            <p>info@sssk.se</p>

            <h3>Press</h3>
            <p>press@sssk.se</p>

            <h3>Styrelsen</h3>
            <p>styrelse@sssk.se</p>

            <h3>Frågor rörande välomsprogrammet</h3>
            <p>valkomsprogrammet@sssk.se</p>
          </div>

          <div className="bar-klubblokal">
            <h2>Klubblokal</h2>
            <p>Skateboet, Norr Mälarstrand 86, Stockholm</p>
            <br></br>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8140.840772501716!2d18.0277883!3d59.3294445!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77d42acd402b%3A0x1b16906a9707b1a7!2sSkateboet!5e0!3m2!1sen!2sse!4v1675176870513!5m2!1sen!2sse"></iframe>
          </div>

      </div>
    </footer>
    )
  }
}
export default Footer;
