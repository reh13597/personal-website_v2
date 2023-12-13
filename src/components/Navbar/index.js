import './index.scss'
import { NavLink }  from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faCode } from '@fortawesome/free-solid-svg-icons'
import Stack from '@mui/material/Stack';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => (
    <Stack direction="row" className="nav-bar">
        <nav>
            <NavLink
                exact="true"
                activeclassname="active"
                to="/">
                <FontAwesomeIcon icon={faHome} color="#6B7181" />
            </NavLink>
            <NavLink
                exact="true"
                activeclassname="active"
                className="about-link"
                to="/about">
                <FontAwesomeIcon icon={faUser} color="#6B7181" />
            </NavLink>
            <NavLink
                exact="true"
                activeclassname="active"
                className="projects-link"
                to="/projects">
                <FontAwesomeIcon icon={faCode} color="#6B7181" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/alex_guo_888/">
                    <FontAwesomeIcon icon={faInstagram} color="#6B7181"/>
                </a>
            </li>
            <li>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/alex-guo-3088461ba/">
                    <FontAwesomeIcon icon={faLinkedin} color="#6B7181"/>
                </a>
            </li>
            <li>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/reh13597">
                    <FontAwesomeIcon icon={faGithub} color="#6B7181"/>
                </a>
            </li>
        </ul>
    </Stack>
)
export default Navbar