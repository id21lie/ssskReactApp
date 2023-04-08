import React from "react";

import svagheterVid from '../pic/svagheter.mp4';
import varisVid from '../pic/varis.mp4';
import utrustningVid from '../pic/issakerhet.mp4';

class Weather extends React.Component {
  render() {
    return (
      <main>

      <div id="ww_d5fbc9efdc4ef" v='1.3' loc='id' a='{"t":"responsive","lang":"sv","sl_lpl":1,"ids":["wl1612"],"font":"Arial","sl_ics":"one_a","sl_sot":"celsius","cl_bkg":"image","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#81D4FA","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722"}'>Weather Data Source: <a href="https://stockholm.wetter-heute.org/" id="ww_d5fbc9efdc4ef_u" target="_blank">stockholm.wetter-heute.org/</a></div><script async src="https://app1.weatherwidget.org/js/?id=ww_d5fbc9efdc4ef"></script>
      <div className="weather-container">
        <div className="ice">
          <div className="weather-list">
            <div className="warnings">
              <h2>Varningar</h2>
              <ul>
                <li>Isränna Mälaren - Kvistabergsviken från Lc</li>
                <li>OBS!! isbrytning Prästfjärden från Markus Eriksson</li>
                <li>Ränntest från Palle Zetterstrand</li>
                <li>Isränna Mälaren - Kvistabergsviken från Lc</li>
                <li>OBS!! isbrytning Prästfjärden från Markus Eriksson</li>
                <li>Ränntest från Palle Zetterstrand</li>
              </ul>
            </div>
            <div className="icereport">
              <h2>Israpporter</h2>
              <ul>
                <li>Stordammen (2023-02-10)</li>
                <li>Trehörningen (2023-02-10)</li>
                <li>Rönningesjön (2023-02-10)</li>
                <li>Orlången (2023-02-9)</li>
                <li>Svängbågen (2023-02-9)</li>
                <li>Steinsfjorden (2023-02-8)</li>
              </ul>
            </div>
          </div>



          <div className="weather-maps">
            <img src="https://aro.lfv.se/tor/nswc2aro.gif?755390" alt=""></img>
            <img src="http://www.smhi.se/oceanografi/istjanst/produkter/sstcolor.png" alt=""></img>
          </div>
        </div>

        <div className="ice-videos">
          <div className="">
            <h4>Isens vanliga svagheter</h4>
            <video width="320" height="240" controls>
              <source src={svagheterVid} type="video/mp4"></source>
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="">
            <h4>Våris</h4>
            <video width="320" height="240" controls>
              <source src={varisVid} type="video/mp4"></source>
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="">
            <h4>Issäkerhet och utrustning</h4>
            <video width="320" height="240" controls>
              <source src={utrustningVid} type="video/mp4"></source>
              Your browser does not support the video tag.
            </video>
          </div>

        </div>

      </div>


      </main>
    );
  }
}

export default Weather;
