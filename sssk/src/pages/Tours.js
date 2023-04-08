import React from "react";

import grupp5Pic from '../pic/grupp500.png';
import grupp4Pic from '../pic/grupp400.png';
import grupp3Pic from '../pic/grupp300.png';
import grupp2Pic from '../pic/grupp200.png';
import grupp1Pic from '../pic/grupp100.png';

import tour5Pic from '../pic/grupp5.png';
import tour4Pic from '../pic/grupp4.png';
import tour3Pic from '../pic/grupp3.png';
import tour2Pic from '../pic/grupp2.png';
import tour1Pic from '../pic/grupp1.png';

class Tours extends React.Component {
  render() {
    return (
      <main>
        <div className="groups">


          <div className="group">
            <h2>Grupp 5</h2>
            <img src={grupp5Pic} alt="about" className=""></img>
            <p>Mindre vana åkare som vill åka lugnt. Åksträcka ca 3 mil, högst 10 km/h.</p>
          </div>

          <div className="group">
            <h2>Grupp 4</h2>
            <img src={grupp4Pic} alt="rapportera" className=""></img>
            <p>Vana åkare som åker i måttlig fart. Åksträcka ca 4-5 mil, 10-12 km/h.</p>
          </div>

          <div className="group">
            <h2>Grupp 3</h2>
            <img src={grupp3Pic} alt="help" className=""></img>
            <p>Vana åkare. Åksträcka ca 5-6 mil, 13-15 km/h.</p>
          </div>

          <div className="group">
            <h2>Grupp 2</h2>
            <img src={grupp2Pic} alt="help" className=""></img>
            <p>Erfarna, konditionsstarka åkare. Åksträcka ca 6-8 mil, 16-18 km/h.</p>
          </div>

          <div className="group">
            <h2>Grupp 1</h2>
            <img src={grupp1Pic} alt="help" className=""></img>
            <p>Erfarna, konditionsstarka åkare. Åksträcka ca 10 mil och mer än 20 km/h.</p>
          </div>


        </div>

        <h1>Turer</h1>
        <div className="main-content">

         <div className="tour">
           <div className="tour-pic">
             <img src={tour4Pic} alt=""></img>
           </div>
           <h3>Ängsö naturreservat</h3>
           <div className="line"></div>
            <p>Contrary to popular belief, Lorem Ipsum is not                   simply random text. It has roots in a piece                      of classical Latin
           </p>
           <button type="button" name="button">Boka tur</button>
         </div>



         <div className="tour">
           <div className="tour-pic">
             <img src={tour2Pic} alt=""></img>
           </div>
           <h3>Ängsö naturreservat</h3>
           <div className="line"></div>
            <p>Contrary to popular belief, Lorem Ipsum is not                   simply random text. It has roots in a piece                      of classical Latin
           </p>
           <button type="button" name="button">Boka tur</button>
         </div>



         <div className="tour">
           <div className="tour-pic">
             <img src={tour5Pic} alt=""></img>
           </div>
           <h3>Ängsö naturreservat</h3>
           <div className="line"></div>
            <p>Contrary to popular belief, Lorem Ipsum is not                   simply random text. It has roots in a piece                      of classical Latin
           </p>
           <button type="button" name="button">Boka tur</button>
         </div>



         <div className="tour">
           <div className="tour-pic">
             <img src={tour3Pic} alt=""></img>
           </div>
           <h3>Ängsö naturreservat</h3>
           <div className="line"></div>
            <p>Contrary to popular belief, Lorem Ipsum is not                   simply random text. It has roots in a piece                      of classical Latin
           </p>
           <button type="button" name="button">Boka tur</button>
         </div>



         <div className="tour">
           <div className="tour-pic">
             <img src={tour2Pic} alt=""></img>
           </div>
           <h3>Ängsö naturreservat</h3>
           <div className="line"></div>
            <p>Contrary to popular belief, Lorem Ipsum is not                   simply random text. It has roots in a piece                      of classical Latin
           </p>
           <button type="button" name="button">Boka tur</button>
         </div>



         <div className="tour">
           <div className="tour-pic">
             <img src={tour1Pic} alt=""></img>
           </div>
           <h3>Ånnsjön i Jämtland</h3>
           <div className="line"></div>
            <p>Contrary to popular belief, Lorem Ipsum is not                   simply random text. It has roots in a piece                      of classical Latin
           </p>
           <button type="button" name="button">Boka tur</button>
         </div>



         <div className="tour">
           <div className="tour-pic">
             <img src={tour3Pic} alt=""></img>
           </div>
           <h3>Salasjöarna</h3>
           <div className="line"></div>
            <p>Contrary to popular belief, Lorem Ipsum is not                   simply random text. It has roots in a piece                      of classical Latin
           </p>
           <button type="button" name="button">Boka tur</button>
         </div>

        </div>


      </main>
    );
  }
}

export default Tours;
