import { motion } from "framer-motion";
import Navbar from "../../Components/Navbar";
import { useSpring, animated } from '@react-spring/web';
import { useState, useEffect, useRef } from 'react';
import Caraousel from "../../Components/Caraousel";
import Hcontent2 from "../../Components/Hcontent2";
import content from '../../Components/Content.json';
import Hskill from "../../Components/Hskill";

const Homee = () => {
    const [scrollY, setScrollY] = useState(0);
    const [loading, setLoading] = useState(true);
    const hcontent2Ref = useRef(null);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeout);
        };
    }, []);

    const parallaxEffect = useSpring({
        transform: `translateY(${scrollY * -0.5}px)`,
        config: { mass: 1, tension: 280, friction: 80 }
    });

    const parallaxTextEffect = useSpring({
        transform: `translateY(${scrollY * -0.1}px)`,
        config: { mass: 1, tension: 280, friction: 100 }
    });

    const handleMoreInfoClick = () => {
        if (hcontent2Ref.current) {
            hcontent2Ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {loading ? (
                <div className="flex items-center justify-center h-screen bg-white">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-black text-center text-2xl md:text-4xl font-extrabold font-poppins"
                    >
                        LOADING BANG, SABAR DULU...
                    </motion.div>
                </div>
            ) : (
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
                                        onClick={handleMoreInfoClick} // Attach the click handler
                                    >
                                        More Info
                                    </motion.button>
                                </div>
                            </animated.div>
                        </motion.div>
                    </animated.div>

                    {/* CONTENT 2 */}
                    <div ref={hcontent2Ref}>
                        <Hcontent2 />
                    </div>
                    {/* CONTENT 3 */}
                    <Caraousel />
                    {/* CONTENT 4 */}
                    <Hskill />
                </div>
            )}
        </>
    );
}

export default Homee;
