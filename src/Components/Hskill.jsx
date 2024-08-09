import { motion } from "framer-motion";
import { useSpring, animated } from '@react-spring/web';
import { useState, useEffect } from 'react';

const Hskill = () => {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const parallax2Effect = useSpring({
        transform: `translateY(${scrollY * -0.6}px)`,
        config: { mass: 1, tension: 280, friction: 80 }
    });
    return (
        <>
            <animated.div
                style={parallax2Effect}
                className="w-full bg-[#14151A] h-auto mt-3 md:mt-8 p-5 rounded-3xl flex-1 "
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl  text-center text-white font-poppins font-semibold"
                >
                    Work <span className="text-[#07C65D]">Experience</span>
                </motion.h1>
                <div className="flex justify-center mt-8 gap-8">
                    <img src="./icon/ae.ico" className="w-20" />
                    <img src="./icon/codei.ico" className="w-20" />
                    <img src="./icon/cshap.ico" className="w-20" />
                    <img src="./icon/css.ico" className="w-20" />
                    <img src="./icon/html.ico" className="w-20" />
                    <img src="./icon/js.ico" className="w-20" />
                    <img src="./icon/lara.ico" className="w-20" />
                    <img src="./icon/mysql.ico" className="w-20" />
                    <img src="./icon/php.ico" className="w-20" />
                    <img src="./icon/pr.ico" className="w-20" />
                    <img src="./icon/react.ico" className="w-20" />
                    <img src="./icon/vue.ico" className="w-20" />
                </div>

            </animated.div>
        </>
    )
}

export default Hskill
