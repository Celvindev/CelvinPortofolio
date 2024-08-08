import { motion } from "framer-motion";
import Navbar from "../../Components/Navbar";
import { useSpring, animated } from '@react-spring/web';
import { useState, useEffect } from 'react';

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
        transform: `translateY(${scrollY * -0.2}px)`,
        config: { mass: 1, tension: 280, friction: 80 }
    });

    const parallaxTextEffect = useSpring({
        transform: `translateY(${scrollY * -0.1}px)`,
        config: { mass: 1, tension: 280, friction: 100 }
    });

    const parallaxImgEffect = useSpring({
        transform: `translateY(${scrollY * -0.1}px)`,
        config: { mass: 1, tension: 280, friction: 100 }
    });

    return (
        <>
            <div className="px-4 md:px-8">
                <animated.div
                    style={parallaxEffect}
                    className="w-full bg-[#14151A] h-auto mt-8 pb-20 rounded-3xl"
                >
                    <Navbar />
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                        className="flex flex-col md:flex-row mt-16 md:mt-24 text-white"
                    >
                        <animated.div
                            style={parallaxTextEffect}
                            className="content1 -mt-5 md:pl-10 flex-1 text-left"
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
                                className="text-sm mt-4 md:mt-8 font-poppins font-light text-justify mx-auto md:mx-0 w-full md:w-[500px] px-5 md:px-0 leading-normal"
                            >
                                Celvin Alfino Fernandes is a frontend developer and UI/UX
                                designer passionate about creating intuitive and visually
                                appealing user interfaces. He strives to deliver seamless and
                                engaging user experiences, stays updated with industry trends,
                                and continuously improves his skills to bring innovative solutions to projects.
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
                    <animated.div
                        style={parallaxImgEffect}
                        className="content2 mt-[20rem] md:mt-2 flex justify-end px-5 md:px-0"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.5 }}
                            className="rounded-2xl md:rounded-r-none md:rounded-l-3xl bg-base-100 -mt-24 h-[200px] md:h-[400px] w-full md:w-96 px-3 py-0 md:px-0 md:py-5">
                            <div className="h-[360px] -mt-44 md:mt-0 pl-0 md:pl-5 md:h-[360px]">
                                <animated.img
                                    style={parallaxImgEffect}
                                    src="/assets/one.jpg"
                                    alt="profile"
                                    className="rounded-2xl md:rounded-r-none md:rounded-l-lg h-full object-cover w-full"
                                />
                            </div>
                        </motion.div>
                    </animated.div>
                </animated.div>

                <animated.div
                    style={parallaxEffect}
                    className="w-full bg-[#14151A] h-auto mt-8 pb-20 rounded-3xl"
                >
                </animated.div>
            </div>

        </>
    );
}

export default Homee;
