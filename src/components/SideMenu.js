import React, { useState,useEffect } from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo/merocare.png'
const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);
  useEffect(() => {
    if (inactive) {
      // removeActiveClassFromSubMenu();
    }

    props.onCollapse(inactive);
  }, [inactive]);
  return (
    <>
      {/* <Container fluid className="pl-0">
        <Row>
          <Col sm={3} style={{position:"fixed"}}>
            <div className={`side-menu ${inactive ? "inactive" : ""}`}>
              <div className="top-section">
                <div className="logo">
                  <img src={logo} alt="merocare" />
                </div>
                <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
                  {inactive ? (
                    <i class="bi bi-arrow-right-square-fill " ></i>
                  ) : (
                    <i class="bi bi-arrow-left-square-fill" style={{ color: "white" }}></i>
                  )}
                </div>
              </div>
              <div className="divider mt-2"></div>
           <div className="main-menu">
             <Navbar classname="pl-5">
               <Nav>
                 <Nav.Link to="/overview"><span className="menu-icon"><i class="bi bi-speedometer2" style={{color:'white'}}></i></span><span className="dashboard">Overview</span></Nav.Link>
               </Nav>
             </Navbar>
           </div>
            </div>
          </Col>
          <Col sm={9} style={{marginLeft:'310px',height:'1900px'}}>
          <h1>items</h1>
          </Col>
        </Row>
      </Container> */}
      <div className={`side-menu ${inactive ? "inactive" : ""}`}>
              <div className="top-section">
                <div className="logo">
                  <img src={logo} alt="merocare" />
                </div>
                <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
                  {inactive ? (
                    <i class="bi bi-arrow-right-square-fill " ></i>
                    
                  ) : (
                    <i class="bi bi-arrow-left-square-fill" style={{ color: "white" }}></i>
                  
                  )}
                </div>
              </div>
              <div className="divider mt-2"></div>
           <div className="main-menu">
             {/* <ul>
               <li>

               </li>
             </ul> */}
             <Navbar classname="pl-5">
               <Nav>
                 <Nav.Link to="/overview" href="/overview"><span className="menu-icon"><i class="fas fa-tachometer-alt"></i></span><span className="dashboard">Overview</span></Nav.Link>
                 <Nav.Link to="/overview" href="/hospital"><span className="menu-icon"><i class="fas fa-hospital"></i></span><span className="dashboard">hospitals</span></Nav.Link>
                 <Nav.Link to="/overview" href="/hospital"><span className="menu-icon"><i class="fas fa-users"></i></span><span className="dashboard">Users</span></Nav.Link>
                 <Nav.Link to="/overview" href="/hospital"><span className="menu-icon ticket"><i class="fas fa-ticket-alt"></i></span><span className="dashboard">Tickets</span></Nav.Link>
                 <Nav.Link to="/overview" href="/hospital"><span className="menu-icon"><i class="fas fa-envelope"></i></span><span className="dashboard">Enquiries</span></Nav.Link>
                 <Nav.Link to="/overview" href="/hospital"><span className="menu-icon"><i class="fas fa-user-cog"></i></span><span className="dashboard">Settings</span></Nav.Link>
                 <Nav.Link to="/overview" href="/hospital"><span className="menu-icon"><i class="fas fa-sign-out-alt"></i></span><span className="dashboard">Logout</span></Nav.Link>

               </Nav>
             </Navbar>
           </div>
            </div>
    </>
  )
}

export default SideMenu
