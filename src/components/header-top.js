import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

// import Navbar from "react-bootstrap/Navbar"
// import Nav from "react-bootstrap/Nav"
// import Form from "react-bootstrap/Form"
// import FormControl from "react-bootstrap/FormControl"
// import Button from "react-bootstrap/Button"
import SearchIcon from "../images/search.svg"
import Hamburger from "../images/hamburger.svg"

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
                      <Hamburger style={{marginRight: `20px`}}/>
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
