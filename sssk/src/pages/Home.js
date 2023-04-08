import React from "react";

import ColorChanger from '../ColorChanger';

import infoPic from '../pic/info.png';
import reportPic from '../pic/report.png';
import helpPic from '../pic/help.png';

class Home extends React.Component {
  render() {
    return (

      <main>

      <div className="headerPic">
        <div className="header-text">
          <h1>Välkommen till Stockholms Skridskoseglarklubb, SSSK!</h1>
          <h3>Sveriges största klubb för långfärdsskridskoåkare</h3>
        </div>
      </div>

      <ColorChanger />


      <div className="newInfo">

        <div className="notiser">
          <h2>Notiser</h2>
          <div className="not" id= "not1" onmousemove="increaseFontSize('not1')" onmouseleave="decreaseFontSize('not1')">
            <p>Årsmöte med nya styrelsen</p>
            <p>2023-02-23</p>
          </div>
          <div className="not"id= "not2" onmousemove="increaseFontSize('not2')" onmouseleave="decreaseFontSize('not2')">
            <p>Skridskons dag i Sigtuna</p>
            <p>2023-02-23</p>
          </div>
          <div className="not"id= "not3" onmousemove="increaseFontSize('not3')" onmouseleave="decreaseFontSize('not3')">
            <p>Fika på Östermalms IP</p>
            <p>2023-02-27</p>
          </div>
          <div className="not"id= "not4" onmousemove="increaseFontSize('not4')" onmouseleave="decreaseFontSize('not4')">
            <p>Fika på Östermalms IP</p>
            <p>2023-02-27</p>
          </div>
          <div className="not"id= "not5" onmousemove="increaseFontSize('not5')" onmouseleave="decreaseFontSize('not5')">
            <p>Fika på Östermalms IP</p>
            <p>2023-02-27</p>
          </div>
        </div>

          <div className="newMembers">
            <h2>Bli medlem i SSSK!</h2>
            <p>Ligger skridskorna ofta hemma? Åker du på plogade banor men är redo
              för större utmaningar? Vill du vistas heldagar på naturis tillsammans
              med engagerade skridskoåkare och bidra till en säker och angenäm
              upplevelse? I så fall är vi klubben för dig. Du bli medlem genom att
              delta i vårt välkommenprogram. Det ger dig enintroduktion till vad det
              innebär att åka på naturis och skapar trygghet får dig och dina
              gruppkamrater.
            </p>
            <button type="button" name="button">Logga in</button>
            <button type="button" name="button">Registrera dig</button>
          </div>
      </div>



      <div id="draggable">
        <img src="pic/draggeble.gif" alt=""></img>
      </div>


      <div className="big-menu">

        <div className="about">
          <h2>Om sssk</h2>
          <img src={infoPic} alt="about" className=""></img>
          <p>SSSK är ansluten till Svenska Isseglarförbundet sedan 1906. Vi
            seglar och tävlar på naturis med flera klasser och även med skidor
            när det är snö på isen. Definitionen "skridskosegling" stämmer inte
            helt med vår verksamhet.</p>
        </div>
        <div className="report">
          <h2>Rapportera</h2>
          <img src={reportPic} alt="rapportera" className=""></img>
          <p>Här rapporterar du in dina isobservationer. Nu finns det en ny
            möjlighet att rapportera isobservationer från mobiltelefonen.
            Funktionen är en webbsida som är anpassad för mobiltelefoner och
            fungerar både på iPhone och Android-telefoner. </p>
        </div>

        <div className="help">
          <h2>Hjälp</h2>
          <img src={helpPic} className=""></img>
          <p>Har du svårt att hitta det su söker? Hitta svaren på de vanligaste
            frågorna, sök på hemsidan eller kontakta oss. Här hittar du
            sökfunktionen, vanliga frågor och kontaktinformation. </p>
        </div>

      </div>



      </main>
    );
  }
}

export default Home;
