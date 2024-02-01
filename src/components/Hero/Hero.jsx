import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import NumberCounter from 'number-counter'

import {motion} from 'framer-motion'

const Hero = () => {
    const transition = {type: 'spring', duration: 3}
    const mobile = window.innerWidth<=768 ? true: false;

    

    return (
        <div className="hero" id='home'>

            <div className="blur hero-blur"></div>

            <div className="left-h">
                <Header/>
{/* the best ad */}
                <div className='the-best-ad'>
                    <motion.div
                    initial={{left: mobile? "155px": '238px'}}
                    whileInView={{left: '8px'}}
                    transition={{...transition, type: 'tween'}}
                    ></motion.div>
                    <span>The best fitness club in the town</span>
                </div>

                {/* hero heading */}
                <div className='hero-text'>
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal Body</span>
                    </div>
                    <div>
                        <span>In here we will help you to shape and build ideal body and live up your life to fullest</span>
                    </div>
                </div>

                {/* figures */}
                <div className="figures">
                    <div>
                        <span>
                            <NumberCounter end={140} start={50} delay='4' preFix='+'/>
                        </span>
                        <span>Expert coachs</span>
                    </div>
                    <div>
                        <span>
                        <NumberCounter end={987} start={500} delay='4' preFix='+'/>
                        </span>
                        <span>Members joined</span>
                    </div>
                    <div>
                        <span>
                        <NumberCounter end={50} start={10} delay='4' preFix='+'/>
                        </span>
                        <span>Fitness programs</span>
                    </div>
                </div>
                {/* hero buttons */}
                <div className='hero-buttons'>
                <button className="btn" onClick={() => window.location.href = 'mailto:kgaurav852201@gmail.com'}>
                    Get Started
                </button>

                    <a href="https://en.wikipedia.org/wiki/Exercise" target="_blank" rel="noopener noreferrer" className="btn">
                        Learn More
                    </a>

                </div>
            </div>
            <div className="right-h">
            <a href="mailto:kgaurav852201@gmail.com" className="btn" target="_blank" rel="noopener noreferrer">
                Join Now
            </a>

                <motion.div
                transition={transition}
                whileInView={{right: '4rem'}}
                initial= {{right: '-1rem'}}
                className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span><span>116 bpm</span>
                </motion.div>

                {/* hero image */}
                <img src={hero_image} alt="" className="hero-image" />
                <motion.img
                initial= {{right: '11rem'}}
                whileInView={{right: "20rem"}}
                transition={transition}
                src={hero_image_back} alt="" className="hero-image-back" />

                {/* calories */}
                <motion.div 
                initial= {{right: '37rem'}}
                whileInView={{right: "28rem"}}
                transition={transition}
                className="calories">
                    <img src={Calories} alt="" />
                    <div>
                        <span>CaloriesBurned</span>
                        <span>220 kcal</span>
                    </div>
                    
                </motion.div>
            </div>
        </div>
    )
}

export default Hero