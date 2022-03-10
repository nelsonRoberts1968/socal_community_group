import React, { useState } from "react";
import CustomNav from "./components/Nav";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Calendar from "./components/Calendar";
import Culture from "./components/Culture-History";
import Membership from "./components/Membership";
import Footer from "./components/Footer";

import { Container } from "react-bootstrap";

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(true);
  const [calendarSelected, setCalendarSelected] = useState(false);
  const [cultureSelected, setCultureSelected] = useState(false);
  const [gallerySelected, setGallerySelected] = useState(false);
  const [membershipSelected, setMembershipSelected] = useState(false);

  return (
    <div>
      <Container>
        <CustomNav
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
          aboutSelected={aboutSelected}
          setAboutSelected={setAboutSelected}
          calendarSelected={calendarSelected}
          setCalendarSelected={setCalendarSelected}
          cultureSelected={cultureSelected}
          setCultureSelected={setCultureSelected}
          gallerySelected={gallerySelected}
          setGallerySelected={setGallerySelected}
          membershipSelected={membershipSelected}
          setMembershipSelected={setMembershipSelected}
        ></CustomNav>
      </Container>

      <main>
        <Container>
          {contactSelected ? (
            <>
              <Contact></Contact>
            </>
          ) : (
            <></>
          )}
          {aboutSelected ? (
            <>
              <About></About>
            </>
          ) : (
            <></>
          )}
          {calendarSelected ? (
            <>
              <Calendar></Calendar>
            </>
          ) : (
            <></>
          )}
          {cultureSelected ? (
            <>
              <Culture></Culture>
            </>
          ) : (
            <></>
          )}
          {gallerySelected ? (
            <>
              <Gallery></Gallery>
            </>
          ) : (
            <></>
          )}
          {membershipSelected ? (
            <>
              <Membership></Membership>
            </>
          ) : (
            <></>
          )}
        </Container>
      </main>
      <Container>
        {/* <Footer></Footer> */}
      </Container>
    </div>
  );
}

export default App;


