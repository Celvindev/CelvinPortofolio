import { motion } from "framer-motion";
import { animated } from '@react-spring/web';

const Hskill = () => {

    return (
        <>
            <animated.div
                className="w-full skeleton  bg-[#14151A] h-auto mt-3 md:mt-8 p-5 rounded-3xl flex-1"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-center text-white font-poppins font-semibold"
                >
                    My
                    <span className="text-[#07C65D]">Skills</span>
                </motion.h1>
                <div className="flex justify-center mt-8 overflow-x-scroll space-x-8 scrollbar-hide">
                    <img src="./icon/ae.ico" className="w-20 flex-shrink-0" />
                    <img src="./icon/codei.ico" className="w-20 flex-shrink-0" />
                    <img src="./icon/cshap.ico" className="w-20 flex-shrink-0" />
                    <img src="./icon/css.ico" className="w-20 flex-shrink-0" />
                    <img src="./icon/html.ico" className="w-20 flex-shrink-0" />
                    <img src="./icon/js.ico" className="w-20 flex-shrink-0" />
                    <img src="./icon/lara.ico" className="w-20 flex-shrink-0" />
                    <img src="./icon/mysql.ico" className="w-20 flex-shrink-0" />
                    <img src="./icon/php.ico" className="w-20 flex-shrink-0" />
                    <img src="./icon/pr.ico" className="w-20 flex-shrink-0" />
                    <img src="./icon/react.ico" className="w-20 flex-shrink-0" />
                    <img src="./icon/vue.ico" className="w-20 flex-shrink-0" />
                </div>
            </animated.div>
        </>
    )
}

export default Hskill;
