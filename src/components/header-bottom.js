import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
class HeaderBottom extends React.Component {
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
                <header className={this.state.isTop ? '' : 'nav-shadow header-sticky'}>
                    <div className="container">
                        <div className="bottom">
                            <Navbar bg="none" className={this.state.isTop ? 'navbar ' : 'navbar alt '}>
                                <Nav>
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
                                </Nav>
                            </Navbar>
                        </div>
                    </div>
                </header>
        );
    }
} 
export default HeaderBottom