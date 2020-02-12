// import React from "react"

// import Navbar from "react-bootstrap/Navbar"
// import Nav from "react-bootstrap/Nav"

// class HeaderSticky extends React.Component {

//     state = {
//         intervalId: 0,
//         thePosition: false
//     }; 
//     componentDidMount() { 
//         document.addEventListener("scroll", () => { 
//             if (window.scrollY > 80) { 
//                 this.setState({ thePosition: true });
                
//             } else { 
//                 this.setState({ thePosition: false }) 
//             } 
//         }); 
//         window.scrollTo(0, 0); 
//         } 
//     onScrollStep = () => { 
//         if (window.pageYOffset === 0){ 
//             clearInterval(this.state.intervalId); 
//         } 
//         window.scroll(0, window.pageYOffset - this.props.scrollStepInPx); 
//     } 
//     scrollToTop = () => { 
//         let intervalId = setInterval(this.onScrollStep, this.props.delayInMs); 
//         this.setState({ intervalId: intervalId }); 
//     } 
//     testDiv = () => { 
//         if (this.state.thePosition){ 
//             return (
                // <header className="header-sticky">
                //     <div className="container">
                //         <div className="bottom">
                //             <Navbar bg="none">
                //             <Nav>
                //                 <Nav.Link href="/">World</Nav.Link>
                //                 <Nav.Link href="/">U.S.</Nav.Link>
                //                 <Nav.Link href="/">Politics</Nav.Link>
                //                 <Nav.Link href="/">N.Y.</Nav.Link>
                //                 <Nav.Link href="/">Business</Nav.Link>
                //                 <Nav.Link href="/">Opinion</Nav.Link>
                //                 <Nav.Link href="/">Tech</Nav.Link>
                //                 <Nav.Link href="/">Science</Nav.Link>
                //                 <Nav.Link href="/">Health</Nav.Link>
                //                 <Nav.Link href="/">Sports</Nav.Link>
                //                 <Nav.Link href="/">Arts</Nav.Link>
                //                 <Nav.Link href="/">Books</Nav.Link>
                //                 <Nav.Link href="/">Style</Nav.Link>
                //                 <Nav.Link href="/">Food</Nav.Link>
                //                 <Nav.Link href="/">Travel</Nav.Link>
                //                 <Nav.Link href="/">Magazine</Nav.Link>
                //                 <Nav.Link href="/">Real Estate</Nav.Link>
                //                 <Nav.Link id="test" href="/">Video</Nav.Link>
                //             </Nav>
                //             </Navbar>
                //         </div>
                //     </div>
                // </header>
//             )
//         } 
//     } 
//     render(){ 
//         return (
//             <>
//             {this.testDiv()} 
//             </>
//         ) 
//     } 
// }

// export default HeaderSticky

// ================================================================================

// import React from "react"
// class HeaderSticky extends React.Component {
//     state = {
//         isTop: true,
//     };
//     componentDidMount() {
//         document.addEventListener('scroll', () => {
//             const isTop = window.scrollY < 100;
//             if (isTop !== this.state.isTop) {
//                 this.setState({ isTop })
//             }
//         });
//     }
//     render() {
//         return (
//             <div style={{ height: '30px' }}>
//                 <h2 style={{ position: 'fixed', top: 0 }}>Scroll {this.state.isTop ? 'down' : 'hello'}!</h2>
//             </div>
//         );
//     }
// } 
// export default HeaderSticky

// ================================================================================

import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
class HeaderBottom extends React.Component {
    state = {
        isTop: true,
    };
    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 80;
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