import React from 'react'
import footerStyle from '../Footer/footer.module.css'


const Footer = () => {
    return (
        <footer className={footerStyle.footerComponent}>
            <div className={footerStyle.firstFooterContainer}>

                <div className={footerStyle.logoContainer}>
                    <img src="Group.svg" alt="logo" />
                    <h2>Sapiens</h2>
                </div>

                <div className={footerStyle.menuListContainer}>
                    <ul>
                        <h1>Platform</h1>
                        <li>Home</li>
                        <li>All Books</li>
                        <li>All Authors</li>
                    </ul>

                    <ul>
                        <h1>Policy</h1>
                        <li>Privacy</li>
                        <li>Security</li>
                        <li>Terms</li>
                    </ul>

                    <ul>
                        <h1>Contact</h1>
                        <li>+961 70 178 056</li>
                        <li>Tripoli , Lebanon</li>
                    </ul>
                </div>

            </div>


            {/* <div className="second-footer-container">
                <hr />

                <div className="social-media-container">
                    <img src="Vector.svg" alt="facebook" />
                    <img src="Vector (1).svg" alt="twitter" />
                    <img src="Vector (2).svg" alt="instagram" />
                    <img src="Vector (3).svg" alt="youtube" />
                </div>

                <hr />
            </div>

            <p className="copy-rights">&copy; sapiens.com/ All rights reserved</p> */}
        </footer>
    )
}

export default Footer
