import { motion } from "framer-motion";
import { useSpring, animated } from '@react-spring/web';
import { useState, useEffect } from 'react';
import content from './Content.json';


const Hcontent2 = () => {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const parallaxEffect = useSpring({
        transform: `translateY(${scrollY * -0.6}px)`,
        config: { mass: 1, tension: 280, friction: 80 }
    });

    const parallax2Effect = useSpring({
        transform: `translateY(${scrollY * -0.6}px)`,
        config: { mass: 1, tension: 280, friction: 80 }
    });

    // const parallaxTextEffect = useSpring({
    //     transform: `translateY(${scrollY * -0.1}px)`,
    //     config: { mass: 1, tension: 280, friction: 100 }
    // });

    const parallaxImgEffect = useSpring({
        transform: `translateY(${scrollY * -0.1}px)`,
        config: { mass: 1, tension: 280, friction: 100 }
    });
    return (
        <>
            <div className="flex flex-col gap-0 md:gap-3 md:flex-row">
                <animated.div
                    style={parallaxEffect}
                    className="w-full md:w-[400px] bg-[#14151A] h-auto md:h-[400px] mt-20 md:mt-8 p-5 rounded-3xl"
                >
                    <animated.div
                        style={parallaxImgEffect}
                        className="content2 mt-[5rem] md:mt-[3rem] flex justify-end px-5 md:px-0"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.5 }}>
                            <div className="h-[320px] -mt-44 md:mt-0 pl-0 md:pl-5 md:h-[360px]">
                                <animated.img
                                    style={parallaxImgEffect}
                                    src="/assets/profile2.svg"
                                    alt="profile"
                                    className="rounded-2xl md:rounded-r-none md:rounded-l-lg h-full object-cover w-full"
                                />
                            </div>
                        </motion.div>
                    </animated.div>
                </animated.div>

                <animated.div
                    style={parallax2Effect}
                    className="w-full bg-[#14151A] h-auto mt-3 md:mt-8 p-5 rounded-3xl flex-1 "
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl  mt-3 text-white font-poppins font-semibold"
                    >
                        Hello, I Am <br /><span className="text-[#07C65D]">Celvin Alfino Fernandes</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-sm mt-4 md:mt-8 font-poppins text-white font-light text-justify mx-auto md:mx-0 w-full  leading-normal"
                    >
                        {content.description}
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl  mt-3 text-white font-poppins font-semibold"
                    >
                        Work <span className="text-[#07C65D]">Experience</span>
                    </motion.h1>
                    <div className="text-sm mt-2 md:mt-4 font-poppins text-white font-light text-justify mx-auto md:mx-0 w-full  leading-normal">
                        <div tabIndex={0} className="collapse collapse-arrow border-base-300 border">
                            <div className="collapse-title text-xl font-medium">Infinite Learning Indonesia</div>
                            <div className="collapse-content">
                                {content.description3}
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse mt-2 collapse-arrow border-base-300 border">
                            <div className="collapse-title text-xl font-medium">PT. Epson Batam</div>
                            <div className="collapse-content">
                                .
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse mt-2 collapse-arrow border-base-300 border">
                            <div className="collapse-title text-xl font-medium">PT. Techno Pilot Indonesia</div>
                            <div className="collapse-content">
                                {content.description3}
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse mt-2 collapse-arrow border-base-300 border">
                            <div className="collapse-title text-xl font-medium">PT. Ezb Wisata Indonesia</div>
                            <div className="collapse-content">
                                {content.description3}
                            </div>
                        </div>
                    </div>
                </animated.div>
            </div>
        </>
    )
}

export default Hcontent2
