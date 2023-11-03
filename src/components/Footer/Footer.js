import React from 'react'
import footerStyle from '../Footer/footer.module.css'
import Icon from '../../assets/icons/Group.svg'
import facebook from '../../assets/icons/Vector.svg'
import twitter from '../../assets/icons/Vector (1).svg'
import instagram from '../../assets/icons/Vector (2).svg'
import youtube from '../../assets/icons/Vector (3).svg'
import telephone from '../../assets/icons/telephone.png'
import location from '../../assets/icons/location.png'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <footer className={footerStyle.footerComponent}>
            <div className={footerStyle.firstFooterContainer}>

                <div className={footerStyle.logoContainer}>
                    <img src={Icon} alt="logo" />
                    <h2>Sapiens</h2>
                </div>

                <div className={footerStyle.menuListContainer}>
                    <ul>
                        <h1>Platform</h1>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"./AllBooks"}>All Books</Link></li>
                        <li><Link to={"./AllAuthors"}>All Authors</Link></li>
                    </ul>

                    <ul>
                        <h1>Policy</h1>
                        <li>Privacy</li>
                        <li>Security</li>
                        <li>Terms</li>
                    </ul>

                    <ul>
                        <h1>Contact</h1>
                        <li><img src={telephone} alt='phone number' className={footerStyle.phoneImage}/><span>+961 70 178 056</span></li>
                        <li><img src={location} alt='location' className={footerStyle.phoneImage}/><span>Tripoli , Lebanon</span></li>
                    </ul>
                </div>

            </div>


            <div className={footerStyle.secondFooterContainer}>
                <hr />

                <div className={footerStyle.socialMediaContainer}>
                    <img src={facebook} alt="facebook" />
                    <img src={twitter} alt="twitter" />
                    <img src={instagram} alt="instagram" />
                    <img src={youtube} alt="youtube" />
                </div>

                <hr />
            </div>

            <p className={footerStyle.copyRights}>&copy; sapiens.com/ All rights reserved</p>
        </footer>
    )
}

export default Footer
