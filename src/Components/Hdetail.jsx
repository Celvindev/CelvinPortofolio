import { motion } from "framer-motion";
import { animated } from '@react-spring/web';



const Hdetail = () => {

    return (
        <>
            <animated.div
                className="w-full bg-[#14151A] h-auto mt-3 md:mt-8 p-5 rounded-3xl flex-1"
            >
                <motion.h5
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="font-poppins font-semibold text-xl text-center md:text-2xl text-white tracking-wide"
                >Detail <span className="text-[#07C65D]">Project</span></motion.h5>
                <div className="flex flex-col md:flex-row gap-3 justify-center mt-20">
                    <div className="card card-compact bg-white w-full md:w-[300px] shadow-xl transition-transform duration-300 ease-in-out hover:scale-105">
                        <figure>
                            <img
                                src="/assets/IL.webp"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body font-poppins">
                            <h2 className="font-semibold text-lg text-[#14151A]">Internship Project</h2>
                            <h5 className="font-medium mt-3 text-[#F5004F]">Web Company Profile Infinite Learning</h5>
                            <p className="font-light text-xs">If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="bg-[#07C65D] p-2 rounded-md w-full mt-3  font-poppins font-normal hover:bg-[#14151A]  text-white">Read more</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact bg-white w-full md:w-[300px] shadow-xl transition-transform duration-300 ease-in-out hover:scale-105">
                        <figure>
                            <img
                                src="/assets/PEB.webp"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body font-poppins">
                            <h2 className="font-semibold text-lg text-[#14151A]">Internship Project</h2>
                            <h5 className="font-medium mt-3 text-[#F5004F]">Web PEB Recruitment</h5>
                            <p className="font-light text-xs">If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="bg-[#07C65D] p-2 rounded-md w-full mt-3  font-poppins font-normal hover:bg-[#14151A]  text-white">Read more</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact bg-white w-full md:w-[300px] shadow-xl transition-transform duration-300 ease-in-out hover:scale-105">
                        <figure>
                            <img
                                src="/assets/tech.webp"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body font-poppins">
                            <h2 className="font-semibold text-lg text-[#14151A]">Internship Project</h2>
                            <h5 className="font-medium mt-3 text-[#F5004F]">Web Company Profile PT. Techno Pilot Indonesia</h5>
                            <p className="font-light text-xs">If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="bg-[#07C65D] p-2 rounded-md w-full mt-3  font-poppins font-normal hover:bg-[#14151A]  text-white">Read more</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact bg-white w-full md:w-[300px] shadow-xl transition-transform duration-300 ease-in-out hover:scale-105">
                        <figure>
                            <img
                                src="/assets/prima.webp"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body font-poppins">
                            <h2 className="font-semibold text-lg text-[#14151A]">Freelance Project</h2>
                            <h5 className="font-medium mt-3 text-[#F5004F]">Web Company Profile Primago Development</h5>
                            <p className="font-light text-xs">If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="bg-[#07C65D] p-2 rounded-md w-full mt-3  font-poppins font-normal hover:bg-[#14151A]  text-white">Read more</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact bg-white w-full md:w-[300px] shadow-xl transition-transform duration-300 ease-in-out hover:scale-105">
                        <figure>
                            <img
                                src="/assets/repajak.webp"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body font-poppins">
                            <h2 className="font-semibold text-lg text-[#14151A]">Academy Project</h2>
                            <h5 className="font-medium mt-3 text-[#F5004F]">Apps Mobile Re-Pajak</h5>
                            <p className="font-light text-xs">If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="bg-[#07C65D] p-2 rounded-md w-full mt-3  font-poppins font-normal hover:bg-[#14151A]  text-white">Read more</button>
                            </div>
                        </div>
                    </div>

                </div>
            </animated.div>
        </>
    )
}

export default Hdetail