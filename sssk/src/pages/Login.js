import React from "react";

class Login extends React.Component {
  render() {
    return (
      <main>
        <div className="login-page">
          <div className="form">

            <h2>Logga in</h2>
            <input type="text" placeholder="Skriv användarnamn" name="uname" required />
            <input type="password" placeholder="Skriv lösenord" name="psw" required />

            <div className="button-container">
              <button type="submit">Logga in</button>
              <p>eller</p>
              <a type="button" href="#register">Registrera konto</a>
            </div>


            <label>
              <input type="checkbox" defaultChecked name="remember" /> Kom ihåg lösenord
            </label>
          </div>

          <div className="form" id="register">
            <h2>Registrera konto</h2>
            <input type="text" placeholder="Skriv mejladress" name="uname" required />
            <input type="text" placeholder="Skriv användarnamn" name="uname" required />
            <input type="password" placeholder="Skriv lösenord" name="psw" required />

            <button type="submit">Registrera</button>

            <label>
              <input type="checkbox" defaultChecked name="remember" />Kom ihåg lösenord
            </label>
          </div>
        </div>
      </main>
    );
  }
}

export default Login;
