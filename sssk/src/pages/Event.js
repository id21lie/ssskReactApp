import React from "react";

import event1Pic from '../pic/event1.jpg';
import event2Pic from '../pic/event2.jpg';
import event3Pic from '../pic/event3.jpg';
import event4Pic from '../pic/event4.jpg';
import event5Pic from '../pic/event5.jpg';

class Event extends React.Component {
  render(){
    return(
      <main>
        <div className="eventpic-container">
          <img src={event1Pic} alt="about" className=""></img>
          <img src={event2Pic} alt="rapportera" className=""></img>
          <img src={event3Pic} alt="help" className=""></img>
          <img src={event4Pic} alt="help" className=""></img>
          <img src={event5Pic} alt="help" className=""></img>
        </div>
        <h1 id="event-h1">Evenemangskalender</h1>
        <p id="event-p">Hitta event event</p>
        <input id="input" type="text" placeholder="Sök event" />
        <br />
        <table className="event">
          <tbody id="eventTable">
            <tr>
              <th>Aktivitet</th>
              <th>Datum</th>
              <th>Kontaktperson</th>
              <th>Plats</th>
            </tr>
            <tr>
              <td>Årsmöte</td>
              <td>2023-02-13</td>
              <td>eva@sssk.se</td>
              <td>Skateboet, Norr Mälarstrand 86, Stockholm</td>
            </tr>
            <tr>
              <td>Städdag</td>
              <td>2023-02-14</td>
              <td>sven@sssk.se</td>
              <td>Skateboet, Norr Mälarstrand 86, Stockholm</td>
            </tr>
            <tr>
              <td>Årsmöte</td>
              <td>2023-02-13</td>
              <td>eva@sssk.se</td>
              <td>Skateboet, Norr Mälarstrand 86, Stockholm</td>
            </tr>
            <tr>
              <td>Årsmöte</td>
              <td>2023-02-13</td>
              <td>eva@sssk.se</td>
              <td>Skateboet, Norr Mälarstrand 86, Stockholm</td>
            </tr>
            <tr>
              <td>Årsmöte</td>
              <td>2023-02-13</td>
              <td>eva@sssk.se</td>
              <td>Skateboet, Norr Mälarstrand 86, Stockholm</td>
            </tr>
            <tr>
              <td>Årsmöte</td>
              <td>2023-02-13</td>
              <td>eva@sssk.se</td>
              <td>Skateboet, Norr Mälarstrand 86, Stockholm</td>
            </tr>
            <tr>
              <td>Årsmöte</td>
              <td>2023-02-13</td>
              <td>eva@sssk.se</td>
              <td>Skateboet, Norr Mälarstrand 86, Stockholm</td>
            </tr>
          </tbody>
        </table>
      </main>

    );
  }
}

export default Event;
