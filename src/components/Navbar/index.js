import './index.scss'
import { NavLink }  from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX, faHome, faUser, faCode } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react'

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    const toggle = () => setShowNav(!showNav);

    return (
        <div className='nav-bar' style={{ background: showNav ? '#2A324B' : '#2B2F39' }}>
            <nav style={{display: showNav ? 'none' : 'block'}}>
                <NavLink
                    exact='true'
                    activeclassname='active'
                    to='/'>
                    <FontAwesomeIcon className='nav-link' icon={faHome} color='#6B7181' />
                </NavLink>
                <NavLink
                    exact='true'
                    activeclassname='active'
                    to='/about'>
                    <FontAwesomeIcon className='nav-link' icon={faUser} color='#6B7181' />
                </NavLink>
                <NavLink
                    exact='true'
                    activeclassname='active'
                    to='/projects'>
                    <FontAwesomeIcon className='nav-link' icon={faCode} color='#6B7181' />
                </NavLink>
            </nav>
            <ul className='socials' style={{display: showNav ? 'none' : 'block'}}>
                <li className='media-item'>
                    <a
                        target='_blank'
                        rel='noreferrer'
                        href='https://www.instagram.com/alex_guo_888/'
                        className='icon'>
                        <FontAwesomeIcon icon={faInstagram} color='#6B7181'/>
                    </a>
                </li>
                <li className='media-item'>
                    <a
                        target='_blank'
                        rel='noreferrer'
                        href='https://www.linkedin.com/in/alex-guo-3088461ba/'
                        className='icon'>
                        <FontAwesomeIcon icon={faLinkedin} color='#6B7181'/>
                    </a>
                </li>
                <li className='media-item'>
                    <a
                        target='_blank'
                        rel='noreferrer'
                        href='https://github.com/reh13597'
                        className='icon'>
                        <FontAwesomeIcon icon={faGithub} color='#6B7181'/>
                    </a>
                </li>
            </ul>
            <FontAwesomeIcon
                onClick={toggle}
                icon={faBars}
                color="#6B7181"
                className='bars-icon'
                style={{display: showNav ? 'block' : 'none'}}
            />
            <FontAwesomeIcon
                onClick={toggle}
                icon={faX}
                color="#6B7181"
                className='close-icon'
                style={{display: showNav ? 'none' : 'block'}}
            />
        </div>
    )
}

export default Navbar