import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function CustomNav(props) {
  const {
    contactSelected,
    setContactSelected,
    aboutSelected,
    setAboutSelected,
    calendarSelected,
    setCalendarSelected,
    cultureSelected,
    setCultureSelected,
    gallerySelected,
    setGallerySelected,
    membershipSelected,
    setMembershipSelected,
  } = props;

  function handleClick(target) {
    setContactSelected(false);
    setCalendarSelected(false);
    setAboutSelected(false);
    setCultureSelected(false);
    setGallerySelected(false);
    setMembershipSelected(false);

    if (target === 0) {
      setContactSelected(true);
    }
    if (target === 1) {
      setAboutSelected(true);
    }
    if (target === 2) {
      setCalendarSelected(true);
    }
    if (target === 3) {
      setCultureSelected(true);
    }
    if (target === 4) {
      setGallerySelected(true);
    }
    if (target === 5) {
      setMembershipSelected(true);
    }
  }

  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">SoCal Tanzanian Community</Navbar.Brand>
          <Navbar.Collapse>
            <Nav className="me-auto">
              {contactSelected ? (
                <>
                  <Nav.Link id="nav-selected">Contact</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link onClick={() => handleClick(0)}> Contact </Nav.Link>
                </>
              )}
              {aboutSelected ? (
                <>
                  <Nav.Link id="nav-selected">About</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link onClick={() => handleClick(1)}> About </Nav.Link>
                </>
              )}
              {calendarSelected ? (
                <>
                  <Nav.Link id="nav-selected">Calendar</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link onClick={() => handleClick(2)}>
                    {" "}
                    Calendar{" "}
                  </Nav.Link>
                </>
              )}
              {cultureSelected ? (
                <>
                  <Nav.Link id="nav-selected">Culture</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link onClick={() => handleClick(3)}> Culture </Nav.Link>
                </>
              )}
              {gallerySelected ? (
                <>
                  <Nav.Link id="nav-selected">Gallery</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link onClick={() => handleClick(4)}> Gallery </Nav.Link>
                </>
              )}
              {membershipSelected ? (
                <>
                  <Nav.Link id="nav-selected">Membership</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link onClick={() => handleClick(5)}>
                    {" "}
                    Membership{" "}
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default CustomNav;