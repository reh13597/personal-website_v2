import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import me from '../../assets/images/me.jpg'
import './index.scss'

const Home = () => {
    const [letterClass, setLetterClass] = useState("text-animate")
    const nameArray = [' ', 'A', 'l', 'e', 'x', ' ', 'G', 'u', 'o', '!']
    const titleArray = ['a', ' ', 'p', 'r', 'o', 'g', 'r', 'a', 'm', 'm', 'e',
                        'r', ' ', '.', ' ', '.', ' ', '.']

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass("text-animate-hover")
        }, 4000)
    }, [])

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <span className={`${letterClass} _13`}>,</span>
                    <br />
                    <span className={`${letterClass} _14`}>I</span>
                    <span className={`${letterClass} _15`}>'</span>
                    <span className={`${letterClass} _16`}>m</span>
                    <AnimatedLetters letterClass={letterClass}
                        strArray={nameArray}
                        idx={17}/>
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                        strArray={titleArray}
                        idx={22}/>
                    </h1>
                    <h2>CS&#128187; & Finance&#128202; student @ SFU&#127809;</h2>
                    <Link to="/contact" className="flat-button">CONTACT ME</Link>
                </div>
                <div className='pic-container'>
                    <img src={me} className='pic'/>
                </div>
            </div>
            <Loader color="#92BFFF" type="ball-pulse-sync"/>
        </>

    )
}
export default Home
