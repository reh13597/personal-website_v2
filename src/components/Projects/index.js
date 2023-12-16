import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import emoji from '../../assets/images/emoji.png'
import Loader from 'react-loaders'
import { useEffect, useState } from 'react'

const Projects = () => {
    const [letterClass, setLetterClass] = useState("text-animate")

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass("text-animate-hover")
        }, 3000)
    }, [])

    return (
        <>
            <div className="container projects-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Coming soon...
                    </p>
                </div>
                <div className='pic-container'>
                    <img src={emoji}/>
                </div>
            </div>
            <Loader color="#92BFFF" type="ball-pulse-sync"/>
        </>

    )
}

export default Projects