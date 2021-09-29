import React from 'react';
import styles from './App.module.css';
import Header from './components/Header';
import MainSection from './components/MainSection';
import NewsNotification from './components/NewsNotification';
import SideSection from './components/SideSection';
import Over9000 from "./components/Images/Over9000.jpg";
import End from "./components/Images/End.jpg";

function App() {

  const SideSectionData = [
    {
      title: '1.Maailma',
      body: 'Maailmanloppu tulee tänään' 
    },
    {
      title: '2.Kaupat',
      body: 'Helsinki on päätetty myydä Namibialle'
    },
    {
      title: '3.Ruoka',
      body: 'Näin paistat täydellistä kissanlihaa'
    },
  ];


  const MainSectionData = [
    {
      title: 'MAAILMANLOPPU TULEE',
      body: 'Tutkijat ovat huomanneet maailmanlopun tulevan 2 tunnin kuluttua.',
      topic: 'Uutiset',
      time: '9:00',
      img: <img src={End} />
    },
    {
      title: 'SAMULI ON ÄLYKKÄIN IHMINEN',
      body: 'Samulin ÄO:ksi on arvioitu huikeat 9001!',
      topic: 'Ihmeellinen maailma',
      time: '4:20',
      img: <img src={Over9000} />
    },
  ];

  const newsNotificationData = [
    {
      topic: 'HS-TESTAA',
      body: 'Oletko aina käyttänyt amfetamiinia väärin?'
    },
    {
      topic: 'HS-RAKENTAMINEN',
      body: 'Näin teet itse metamfetamiini-laboratorion!'
    },
    {
      topic: 'HS-UUTISET',
      body: 'Samuli Edelmann onkin Vesa-Matti Loiri valeasussa!'
    },
  ];
  return (
    <div>
      <Header />
      {
        newsNotificationData.map(element => <NewsNotification topic={element.topic} body={element.body} />)
      }
      <div className={styles.newsContainer}>
        <div>{
          MainSectionData.map(element => <MainSection title={element.title} body={element.body} img={element.img} topic={element.topic} time={element.time} />)
        }
        </div>
        <div>{
          SideSectionData.map(element => <SideSection title={element.title} body={element.body} />)
        }
        </div>
      </div>
    </div>
  );
}

export default App;
