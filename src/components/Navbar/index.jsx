import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import './navbar.css'

export default function Navbar(){
    return(
        <nav className='navbar'>
            <a href="https://br.linkedin.com/" className='social' target='_blank'>
                <BsLinkedin size={24} color='#fff'/>
            </a>
            <a href="https://github.com/" className='social' target='_blank'>
                <BsGithub size={24} color='#fff'/>
            </a>
            <Link className='navbar-item' to ="/links">
                Meus Links
            </Link>
        </nav>
    )
}