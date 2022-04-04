import React from "react";
import styles from "../styles/HomePage.module.css";
import NavigationBar from "./NavigationBar/Navbar";
import Footer from "./Footer/Footer";

const Homepage = () => {
  return (
    <>
      <NavigationBar />
      <div>
        <div className={styles.banner}>
          <div className={styles.twoSection}></div>
          <div className={styles.twoSection}>
            <h1>Happy Place: Mental Health Matters</h1>
            <p>
              Facilitating peers support groups and aiding proffessional and
              client connections
            </p>
          </div>
        </div>

        <div className={styles.colorBanner}>
          <h1 className={styles.title}>What we offer</h1>
          <div className={styles.threeRow}>
            <div className={styles.threeSection}>
              <h2 className={styles.title}>Peer Support</h2>
              <p>Lorem ipsum</p>
            </div>

            <div className={styles.threeSection}>
              <h2 className={styles.title}>Simple interface</h2>
              <p>loremipsum</p>
            </div>

            <div className={styles.threeSection}>
              <h2 className={styles.title}>professional appointments</h2>
              <p>lorem ipsum</p>
            </div>
          </div>
        </div>

        <div className={styles.banner2}>
          <div className={styles.missionStatement}>
            <h1 className={styles.title}>Our Mission</h1>
            <p>Connecting, facilitating, supporting</p>
          </div>
        </div>

        <div className={styles.banner2}>
          <h1 className={styles.title}>Start today!</h1>
          <div>
            <div className={styles.selectTopicButtonContainer}>
              <a className={styles.selectTopicButton} href="/login">
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
      )
      <Footer />
    </>
  );
};

export default Homepage;
