import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import ImageSlider from '../ImageSlider'
import { SliderData } from '../ImageSlider/SliderData'
import Loader from 'react-loaders'
import { useEffect, useState } from 'react'

const About = () => {
    const [letterClass, setLetterClass] = useState("text-animate")

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass("text-animate-hover")
        }, 3000)
    }, [])

    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I'm currently a first year student at SFU, enrolled within the
                        SFU-ZJU Dual Degree program. In this program, I first have to
                        study 3.5 years of Computing Science at SFU, then I fly over
                        to Zhejiang University in China to get a Master of Finance over
                        the course of 1.5 years.
                    </p>
                    <p>
                        Some of my hobbies include skiing, hiking, going to the gym, playing video
                        games, visiting animal cafes, and eating food.
                    </p>
                    <p>
                        If you get to know me well enough, you'll come to find that I'm a
                        pretty chill person that loves to crack jokes and just have a good time.
                    </p>
                </div>
                <div className="image-slider">
                    <ImageSlider slides={SliderData} />
                </div>
            </div>
            <Loader color="#92BFFF" type="ball-pulse-sync"/>
        </>

    )
}

export default About