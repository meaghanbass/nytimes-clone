import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
// import Form from "react-bootstrap/Form"
// import FormControl from "react-bootstrap/FormControl"
// import Button from "react-bootstrap/Button"
import SearchIcon from "../images/search.svg"
// import Hamburger from "../images/hamburger.svg"

import DateComponent from "../components/today-date"

// const HeaderTop = ({ siteTitle }) => (
  // <header>
    // <div className="container">
    //   <div className="top">
    //     <div className="left">
    //       <Hamburger style={{marginRight: `20px`}}/>
    //       <SearchIcon />
    //       {/* <Form inline>
    //         <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    //         <Button variant="outline-primary">Search</Button>
    //       </Form> */}
    //     </div>
    //     <div className="center">
    //       <Link to="/">english </Link>
    //     </div>
    //     <div className="right">
    //       <button>subscribe now</button>
    //       <button>login</button>
    //     </div>
    //   </div>

    //   <div className="middle">
    //     <div className="left">
    //       <DateComponent />
    //     </div>
    //     <div className="center">
    //       <h1>
    //         <Link to="/">{siteTitle}</Link>
    //       </h1>
    //     </div>
    //     <div className="right"></div>
    //   </div>
    // </div>
  // </header>
// )

class HeaderTop extends React.Component {
  state = {
      isTop: true,
  };
  componentDidMount() {
      document.addEventListener('scroll', () => {
          const isTop = window.scrollY < 110;
          if (isTop !== this.state.isTop) {
              this.setState({ isTop })
          }
      });
  }
  render() {
      return (
              <header className={this.state.isTop ? '' : 'nav-shadow header-sticky mobile-only'}>
                <div className="container">
                  <div className="top">
                    <div className="left">
                      {/* <Hamburger style={{marginRight: `20px`}}/> */}

                      <Navbar bg="none" expand="full">
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                          <ul>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" className="sidebar-toggler"/>
                            <Nav.Link href="/">World</Nav.Link>
                            <Nav.Link href="/">U.S.</Nav.Link>
                            <Nav.Link href="/">Politics</Nav.Link>
                            <Nav.Link href="/">N.Y.</Nav.Link>
                            <Nav.Link href="/">Business</Nav.Link>
                            <Nav.Link href="/">Opinion</Nav.Link>
                            <Nav.Link href="/">Tech</Nav.Link>
                            <Nav.Link href="/">Science</Nav.Link>
                            <Nav.Link href="/">Health</Nav.Link>
                            <Nav.Link href="/">Sports</Nav.Link>
                            <Nav.Link href="/">Arts</Nav.Link>
                            <Nav.Link href="/">Books</Nav.Link>
                            <Nav.Link href="/">Style</Nav.Link>
                            <Nav.Link href="/">Food</Nav.Link>
                            <Nav.Link href="/">Travel</Nav.Link>
                            <Nav.Link href="/">Magazine</Nav.Link>
                            <Nav.Link href="/">Real Estate</Nav.Link>
                            <Nav.Link id="test" href="/">Video</Nav.Link>
                          </ul>
                        </Navbar.Collapse>
                      </Navbar>

                      <SearchIcon />
                      {/* <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-primary">Search</Button>
                      </Form> */}
                    </div>
                    <div className="center">
                      <Link to="/">english </Link>
                    </div>
                    <div className="right">
                      <button>subscribe now</button>
                      <button>login</button>
                    </div>
                  </div>

                  <div className="middle">
                    <div className="left">
                      <DateComponent />
                    </div>
                    <div className="center">
                      <h1>
                        {/* <Link to="/">{siteTitle}</Link> */}
                        <Link to="/">The New York Times</Link>
                      </h1>
                    </div>
                    <div className="right"></div>
                  </div>
                </div>
              </header>
      );
  }
} 

HeaderTop.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderTop.defaultProps = {
  siteTitle: ``,
}

export default HeaderTop
