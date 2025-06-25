// import React from 'react';
// import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';


// const MedinoNavbar = () => {
//   return (
//     <Navbar bg="light" expand="lg" className="shadow-sm py-3 sticky-top">
//       <Container>
//         <Navbar.Brand href="#home" className="d-flex align-items-center">
//           <img
//             src="./Image/logo1.png"
//             alt="Medino logo"
//             width="150"
//             height="30"
//             className="d-inline-block align-top me-2"
//           />
//           {/* <span className="fw-semibold text-dark fs-5">Medino</span> */}
//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="basic-navbar-nav" />

//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto text-uppercase fw-semibold">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#departments">Departments</Nav.Link>
//             <Nav.Link href="#doctors">Doctors</Nav.Link>
//             <NavDropdown title="Pages" id="pages-dropdown">
//               <NavDropdown.Item href="#action1">Page 1</NavDropdown.Item>
//               <NavDropdown.Item href="#action2">Page 2</NavDropdown.Item>
//             </NavDropdown>
//             <NavDropdown title="Blog" id="blog-dropdown">
//               <NavDropdown.Item href="#blog1">Blog 1</NavDropdown.Item>
//               <NavDropdown.Item href="#blog2">Blog 2</NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="#contact">Contact</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default MedinoNavbar;

import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import './nav2.scss'

const MedinoNavbar = () => {
  const [showPages, setShowPages] = useState(false);
  const [showBlog, setShowBlog] = useState(false);

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm py-3 sticky-top">
      <Container>
        <Navbar.Brand href="/home" className="d-flex align-items-center">
          <img
            src="./Image/logo1.png"
            alt="Medino logo"
            width="150"
            height="30"
            className="d-inline-block align-top me-2"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-uppercase fw-semibold">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/departments">Departments</Nav.Link>
            <Nav.Link href="/doctors">Doctors</Nav.Link>

            {/* Pages Dropdown */}
            <NavDropdown
              title="Pages"
              id="pages-dropdown"
              show={showPages}
              onMouseEnter={() => setShowPages(true)}
              onMouseLeave={() => setShowPages(false)}
            >
              <NavDropdown.Item href="/action1">Page 1</NavDropdown.Item>
              <NavDropdown.Item href="/action2">Page 2</NavDropdown.Item>
            </NavDropdown>

            {/* Blog Dropdown */}
            <NavDropdown
              title="Blog"
              id="blog-dropdown"
              show={showBlog}
              onMouseEnter={() => setShowBlog(true)}
              onMouseLeave={() => setShowBlog(false)}
            >
              <NavDropdown.Item href="/blog1">Blog 1</NavDropdown.Item>
              <NavDropdown.Item href="/blog2">Blog 2</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MedinoNavbar;
