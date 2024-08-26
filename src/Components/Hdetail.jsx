import { motion } from "framer-motion";
import { animated } from '@react-spring/web';
import content from './Content.json';



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
                >Detail <span className="text-[#07C65D]">My Project</span></motion.h5>
                <div className="flex flex-col md:flex-row gap-3 justify-center mt-5 md:mt-10">
                    <div className="card card-compact bg-white w-full md:w-[300px] shadow-xl transition-transform duration-300 ease-in-out hover:scale-105">
                        <figure>
                            <img
                                src="/assets/IL.webp"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body font-poppins text-[#14151A]">
                            <h2 className="font-semibold text-lg text-[#14151A]">Internship Project</h2>
                            <h5 className="font-medium mt-3 text-[#F5004F]">Web Company Profile Infinite Learning</h5>
                            <p className="font-light text-xs text-justify"> During my internship at Infinite Learning, I had the opportunity to build a company profile web project using React.js technology with Tailwind CSS and Daisy UI. The website can be visited at the following link:<br /><br />
                                <a href="https://www.infinitelearning.id/" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
                                    https://www.infinitelearning.id/
                                </a></p>
                            <div className="card-actions justify-end">
                                <button href="#IL"
                                    className="bg-[#07C65D] p-2 rounded-md w-full mt-3 font-poppins font-normal hover:bg-[#14151A]  text-white"
                                    onClick={() => document.getElementById('IL').showModal()}
                                >Read more</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact bg-white w-full md:w-[300px] shadow-xl transition-transform duration-300 ease-in-out hover:scale-105">
                        <figure>
                            <img
                                src="/assets/PEB.webp"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body font-poppins text-[#14151A]">
                            <h2 className="font-semibold text-lg text-[#14151A]">Internship Project</h2>
                            <h5 className="font-medium mt-3 text-[#F5004F]">Web PEB Recruitment</h5>
                            <p className="font-light text-xs mt-4 text-justify">PEB Recruitment is a website I developed during my internship at PT Epson Batam, designed to manage the recruitment process, from applicant registration to selection and final result announcements.</p>
                            <div className="card-actions justify-end">
                                <button
                                    className="bg-[#07C65D] p-2 rounded-md w-full mt-3  font-poppins font-normal hover:bg-[#14151A]  text-white"
                                    onClick={() => document.getElementById('PEB').showModal()}
                                >Read more</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact bg-white w-full md:w-[300px] shadow-xl transition-transform duration-300 ease-in-out hover:scale-105">
                        <figure>
                            <img
                                src="/assets/tech.webp"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body font-poppins text-[#14151A]">
                            <h2 className="font-semibold text-lg text-[#14151A]">Internship Project</h2>
                            <h5 className="font-medium mt-3 text-[#F5004F]">Web Company Profile PT. Techno Pilot Indonesia</h5>
                            <p className="font-light text-xs text-justify">Company Profile is a website I developed during my internship at PT. Techno Pilot Indonesia, showcasing the companys information, services, portfolio, and contact details, The website can be visited at the following link:<br /><br />
                                <a href="https://technopilot.id/" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
                                    https://technopilot.id/
                                </a></p>
                            <div className="card-actions justify-end">
                                <button
                                    className="bg-[#07C65D] p-2 rounded-md w-full mt-3  font-poppins font-normal hover:bg-[#14151A]  text-white"
                                    onClick={() => document.getElementById('tech').showModal()}
                                >Read more</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact bg-white w-full md:w-[300px] shadow-xl transition-transform duration-300 ease-in-out hover:scale-105">
                        <figure>
                            <img
                                src="/assets/prima.webp"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body font-poppins text-[#14151A]">
                            <h2 className="font-semibold text-lg text-[#14151A]">Freelance Project</h2>
                            <h5 className="font-medium mt-3 text-[#F5004F]">Web Company Profile Primago Development</h5>
                            <p className="font-light text-xs">I completed my first freelance project for Primago Development using WordPress and Elementor. Despite a tight deadline, I enhanced their online presence and learned key skills in time management and client communication. Check out the site<br /><br />
                                <a href="https://primagodevelopment.com/" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
                                    https://primagodevelopment.com/
                                </a>
                            </p>
                            <div className="card-actions justify-end">
                                <button
                                    className="bg-[#07C65D] p-2 rounded-md w-full mt-3  font-poppins font-normal hover:bg-[#14151A]  text-white"
                                    onClick={() => document.getElementById('prima').showModal()}
                                >Read more</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact bg-white w-full md:w-[300px] shadow-xl transition-transform duration-300 ease-in-out hover:scale-105">
                        <figure>
                            <img
                                src="/assets/dyo.avif"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body font-poppins text-[#14151A]">
                            <h2 className="font-semibold text-lg text-[#14151A]">Freelance Project</h2>
                            <h5 className="font-medium mt-3 text-[#F5004F]">Website Portfolio Diyogusti Putra Setiawan</h5>
                            <p className="font-light text-xs">
                                I built a portfolio website for Diyogusti in a week using React.js, Tailwind CSS, and Daisy UI. This project improved my time management and
                                delivered a strong online presence for Diyogusti. Check out the site<br /><br />
                                <a href="https://diyogusti-mixologist.vercel.app/" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
                                    https://diyogusti-mixologist.vercel.app/
                                </a>
                            </p>
                            <div className="card-actions justify-end">
                                <button
                                    className="bg-[#07C65D] p-2 rounded-md w-full mt-3  font-poppins font-normal hover:bg-[#14151A]  text-white"
                                    onClick={() => document.getElementById('diyo').showModal()}
                                >Read more</button>
                            </div>
                        </div>
                    </div>

                </div>
            </animated.div >


            {/* MODAL */}
            < dialog id="IL" className="modal" >
                <div className="modal-box w-11/12 max-w-2xl font-poppins text-[#14151A] bg-white">
                    <h3 className="font-semibold text-lg">Web Company Profile Infinite Learning</h3>
                    <p className="py-4 mt-2 text-justify  font-light">
                        {content.detail_IL}&nbsp;
                    </p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="bg-[#07C65D] px-10 py-2 rounded-md w-full font-poppins font-normal hover:bg-[#14151A] text-sm text-white">Close</button>
                        </form>
                    </div>
                </div>
            </dialog >

            < dialog id="PEB" className="modal" >
                <div className="modal-box w-11/12 max-w-2xl font-poppins text-[#14151A] bg-white">
                    <h3 className="font-semibold text-lg">Web PEB Recruitment</h3>
                    <p className="py-4 mt-2 text-justify  font-light">
                        {content.detail_peb}&nbsp;
                    </p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="bg-[#07C65D] px-10 py-2 rounded-md w-full font-poppins font-normal hover:bg-[#14151A] text-sm text-white">Close</button>
                        </form>
                    </div>
                </div>
            </dialog >

            < dialog id="tech" className="modal" >
                <div className="modal-box w-11/12 max-w-2xl font-poppins text-[#14151A] bg-white">
                    <h3 className="font-semibold text-lg">Web Company Profile PT. Techno Pilot Indonesia</h3>
                    <p className="py-4 mt-2 text-justify  font-light">
                        {content.detail_Tech}&nbsp;
                    </p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="bg-[#07C65D] px-10 py-2 rounded-md w-full font-poppins font-normal hover:bg-[#14151A] text-sm text-white">Close</button>
                        </form>
                    </div>
                </div>
            </dialog >

            < dialog id="prima" className="modal" >
                <div className="modal-box w-11/12 max-w-2xl font-poppins text-[#14151A] bg-white">
                    <h3 className="font-semibold text-lg">Website Company Profile Primago Development</h3>
                    <p className="py-4 mt-2 text-justify  font-light">
                        {content.detail_primago}&nbsp;
                    </p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="bg-[#07C65D] px-10 py-2 rounded-md w-full font-poppins font-normal hover:bg-[#14151A] text-sm text-white">Close</button>
                        </form>
                    </div>
                </div>
            </dialog >

            < dialog id="diyo" className="modal" >
                <div className="modal-box w-11/12 max-w-2xl font-poppins text-[#14151A] bg-white">
                    <h3 className="font-semibold text-lg">Website Portfolio Diyogusti Putra Setiawan</h3>
                    <p className="py-4 mt-2 text-justify  font-light">
                        {content.detail_diyo}&nbsp;
                    </p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="bg-[#07C65D] px-10 py-2 rounded-md w-full font-poppins font-normal hover:bg-[#14151A] text-sm text-white">Close</button>
                        </form>
                    </div>
                </div>
            </dialog >

        </>
    )
}

export default Hdetail