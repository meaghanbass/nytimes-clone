import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import NewspaperIcon from "../images/newspaper-icon.svg"
import NYTIcon from "../images/nyt-icon-black.svg"
import CrosswordIcon from "../images/crossword-icon.svg"
import CookingIcon from "../images/cooking-icon.svg"

const Footer = ({ siteTitle }) => (
    <footer>
        <div className="container">
            <div className="top">
                <h1>
                    <Link to="/">{siteTitle}</Link>
                </h1>
                <Link className="home-link" to="/">Go to Home Page »</Link>
            </div>
            <div className="middle">
                <div className="section-wrapper">
                    <section>
                        <h3>News</h3>
                        <ul>
                            <li><a href="/">Home Page</a></li>
                            <li><a href="/article-index">Article Index</a></li>
                            <li><a href="/">World</a></li>
                            <li><a href="/">U.S.</a></li>
                            <li><a href="/">Politics</a></li>
                            <li><a href="/">New York</a></li>
                            <li><a href="/">Business</a></li>
                            <li><a href="/">Tech</a></li>
                            <li><a href="/">Science</a></li>
                            <li><a href="/">Sports</a></li>
                            <li><a href="/">Obituaries</a></li>
                            <li><a href="/">Today's Paper</a></li>
                            <li><a href="/">Corrections</a></li>
                        </ul>
                    </section>
                    <section>
                        <h3>Opinion</h3>
                        <ul>
                            <li><a href="/">Today's Opinion</a></li>
                            <li><a href="/">Op-ed Columnists</a></li>
                            <li><a href="/">Editorials</a></li>
                            <li><a href="/">Op-ed Contributors</a></li>
                            <li><a href="/">Letters</a></li>
                            <li><a href="/">Sunday Review</a></li>
                            <li><a href="/">Video: Opinion</a></li>
                        </ul>
                    </section>
                    <section>
                        <h3>Arts</h3>
                        <ul>
                            <li><a href="/">Today's Arts</a></li>
                            <li><a href="/">Art & Design</a></li>
                            <li><a href="/">Books</a></li>
                            <li><a href="/">Dance</a></li>
                            <li><a href="/">Movies</a></li>
                            <li><a href="/">Music</a></li>
                            <li><a href="/">Pop Culture</a></li>
                            <li><a href="/">Television</a></li>
                            <li><a href="/">Theater</a></li>
                            <li><a href="/">Video: Arts</a></li>
                        </ul>
                    </section>
                    <section>
                        <h3>Living</h3>
                        <ul>
                            <li><a href="/">Automobiles</a></li>
                            <li><a href="/">Crossword</a></li>
                            <li><a href="/">Education</a></li>
                            <li><a href="/">Food</a></li>
                            <li><a href="/">Health</a></li>
                            <li><a href="/">Jobs</a></li>
                            <li><a href="/">Magazine</a></li>
                            <li><a href="/">Parenting</a></li>
                            <li><a href="/">Real Estate</a></li>
                            <li><a href="/">Style</a></li>
                            <li><a href="/">T Magazine</a></li>
                            <li><a href="/">Travel</a></li>
                            <li><a href="/">Weddings</a></li>
                        </ul>
                    </section>
                    <section>
                        <h3>More</h3>
                        <ul>
                            <li><a href="/">Reader Center</a></li>
                            <li><a href="/">Wirecutter</a></li>
                            <li><a href="/">Live Events</a></li>
                            <li><a href="/">The Learning N</a>etwork</li>
                            <li><a href="/">Tools & Servic</a>es</li>
                            <li><a href="/">N.Y.C. Events </a>Guide</li>
                            <li><a href="/">Multimedia</a></li>
                            <li><a href="/">Photograph</a>y</li>
                            <li><a href="/">Video</a></li>
                            <li><a href="/">Newsletter</a>s</li>
                            <li><a href="/">NYT Store</a></li>
                            <li><a href="/">Times Journeys</a></li>
                            <li><a href="/">Manage My Acco</a>unt</li>
                        </ul>
                    </section>
                    <section className="subscribe">
                        <h3>Subscribe</h3>
                        <ul className="subscribe-list">
                            <li><a href="/"><NewspaperIcon />Home Delivery</a></li>
                            <li><a href="/"><NYTIcon />Digital Subscriptions</a></li>
                            <li><a href="/"><CrosswordIcon />Crossword</a></li>
                            <li><a href="/"><CookingIcon />Cooking</a></li>
                        </ul>
                        <ul className="alternate-links">
                            <li><a href="/">Email Newsletters</a></li>
                            <li><a href="/">Corporate Subscriptions</a></li>
                            <li><a href="/">Education Rate</a></li>
                            <hr />
                            <li><a href="/">Mobile Applications</a></li>
                            <li><a href="/">Replica Edition</a></li>
                        </ul>
                    </section>
                </div>
            </div>
            <div className="bottom">
                <p className="copyright">&copy; 2020 The New York Times Company</p>
                <ul className="site-information">
                    <li><a href="/">NYTCo</a></li>
                    <li><a href="/">Contact Us</a></li>
                    <li><a href="/">Work with us</a></li>
                    <li><a href="/">Advertise</a></li>
                    <li><a href="/">T Brand Studio</a></li>
                    <li><a href="/">Your Ad Choices</a></li>
                    <li><a href="/">Privacy</a></li>
                    <li><a href="/">Terms of Service</a></li>
                    <li><a href="/">Terms of Sale</a></li>
                    <li><a href="/">Site Map</a></li>
                    <li><a href="/">Help</a></li>
                    <li><a href="/">Subscriptions</a></li>
                    <li><a href="/">Do Not Sell My Personal Information</a></li>
                </ul>
            </div>
        </div>
    </footer>
)

Footer.propTypes = {
    siteTitle: PropTypes.string,
}

Footer.defaultProps = {
    siteTitle: ``,
}

export default Footer
