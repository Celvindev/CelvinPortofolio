import { motion } from "framer-motion";
import Navbar from "../../Components/Navbar";
import { useSpring, animated } from '@react-spring/web';
import { useState, useEffect } from 'react';
import Caraousel from "../../Components/Caraousel";
import Hcontent2 from "../../Components/Hcontent2";
import content from '../../Components/Content.json';

const Homee = () => {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const parallaxEffect = useSpring({
        transform: `translateY(${scrollY * -0.5}px)`,
        config: { mass: 1, tension: 280, friction: 80 }
    });

    const parallaxTextEffect = useSpring({
        transform: `translateY(${scrollY * -0.1}px)`,
        config: { mass: 1, tension: 280, friction: 100 }
    });

    return (
        <>
            <div className="px-4 md:px-8">
                <animated.div
                    style={parallaxEffect}
                    className="w-full bg-[#14151A] h-auto mt-8 pb-5 md:pb-20 rounded-3xl"
                >
                    <Navbar />
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                        className="mt-16 md:mt-24 text-white"
                    >
                        <animated.div
                            style={parallaxTextEffect}
                            className="content1 -mt-5 md:pl-10 flex-1 text-left md:text-center"
                        >
                            <motion.h5
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-[#07C65D] px-5 md:px-0 font-poppins"
                            >
                                HI THERE,
                            </motion.h5>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-2xl md:text-4xl px-5 md:px-0 mt-3 font-poppins font-bold"
                            >
                                I Am <span className="text-[#07C65D]">FrontEnd Developer</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="text-sm mt-4 md:mt-8 font-poppins font-light text-justify md:text-center mx-auto md:mx-0 w-full px-5 md:px-[16rem] leading-normal"
                            >
                                {content.description2}
                            </motion.p>
                            <div className="px-5 md:px-0">
                                <motion.button
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.8 }}
                                    className="py-2 px-5 w-full md:w-[120px] rounded-lg mt-6 font-poppins md:mt-10 bg-[#07C65D]"
                                >
                                    More Info
                                </motion.button>
                            </div>
                        </animated.div>
                    </motion.div>
                </animated.div>

                {/* CONTENT 2 */}
                <Hcontent2 />
                {/* CONTENT 3 */}
                <Caraousel />
            </div>

        </>
    );
}

export default Homee;
