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
                            <p className="font-light text-xs">If a dog chews shoes whose shoes does he choose?</p>
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
                                src="/assets/repajak.webp"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body font-poppins text-[#14151A]">
                            <h2 className="font-semibold text-lg text-[#14151A]">Academy Project</h2>
                            <h5 className="font-medium mt-3 text-[#F5004F]">Apps Mobile Re-Pajak</h5>
                            <p className="font-light text-xs">If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="bg-[#07C65D] p-2 rounded-md w-full mt-3  font-poppins font-normal hover:bg-[#14151A]  text-white">Read more</button>
                            </div>
                        </div>
                    </div>

                </div>
            </animated.div >


            {/* MODAL */}
            < dialog id="IL" className="modal" >
                <div className="modal-box w-11/12 max-w-2xl font-poppins text-[#14151A] bg-white">
                    <h3 className="font-semibold text-lg">Web Company Profile Infinite Learning</h3>
                    <p className="py-4 mt-5 text-justify  font-light">
                        During my internship at Infinite Learning, I had the opportunity to build a company profile web project using React.js technology with Tailwind CSS and Daisy UI. The website can be visited at the following link:<br />
                        <a href="https://www.infinitelearning.id/" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
                            https://www.infinitelearning.id/
                        </a>
                        <br /><br />
                        <h5 className="font-semibold">Technologies I Used:</h5>
                        <h5 className="font-semibold mt-3">React.js:</h5>
                        <p className="text-sm font-light">I chose React.js because its an efficient library for building dynamic and interactive UIs. With React, I was able to create reusable components, which made development and maintenance much easier.</p>
                        <h5 className="font-semibold mt-2">Tailwind CSS:</h5>
                        <p className="text-sm font-light">For styling, I used Tailwind CSS, a utility-first framework. Tailwind provides great flexibility in design, allowing me to add utility classes directly to HTML elements without writing a lot of custom CSS. This speeds up the styling process and ensures consistency in the appearance.</p>
                        <h5 className="font-semibold mt-2">Daisy UI:</h5>
                        <p className="text-sm font-light">To accelerate UI development, I also integrated Daisy UI, a plugin for Tailwind CSS that offers various ready-made UI components such as buttons, forms, and more. This was extremely helpful in building an attractive and professional look without having to design from scratch.</p>


                    </p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="bg-[#07C65D] px-10 py-2 rounded-md w-full mt-3  font-poppins font-normal hover:bg-[#14151A] text-sm text-white">Close</button>
                        </form>
                    </div>
                </div>
            </dialog >

            < dialog id="PEB" className="modal" >
                <div className="modal-box w-11/12 max-w-2xl font-poppins text-[#14151A] bg-white">
                    <h3 className="font-semibold text-lg">Web PEB Recruitment</h3>
                    <p className="py-4 mt-5 text-justify  font-light">
                        PEB Recruitment is a website I developed during my internship at PT Epson Batam, designed to manage the recruitment process, from applicant registration to selection and final result announcements.
                        <br /><br />
                        <h5 className="font-semibold">Technologies I Used:</h5>
                        <h5 className="font-semibold mt-3">Laravel 10:</h5>
                        <p className="text-sm font-light">I used Laravel as the PHP framework for building the backend. Laravel simplifies the management of business logic, routing, and database interactions. With built-in features like Eloquent ORM, I was able to easily perform CRUD (Create, Read, Update, Delete) operations on applicant data.</p>
                        <h5 className="font-semibold mt-2">MySQL:</h5>
                        <p className="text-sm font-light">MySQL was utilized as the database management system to store information about applicants, job details, and recruitment statuses. With a well-organized table structure, I could efficiently store and retrieve data as needed.</p>
                        <h5 className="font-semibold mt-2">Bootstrap 5:</h5>
                        <p className="text-sm font-light">I chose Bootstrap 5 to build a responsive and modern user interface. Bootstrap made it easier to create forms, tables, and other UI elements with a consistent and professional look.</p>


                    </p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="bg-[#07C65D] px-10 py-2 rounded-md w-full mt-3  font-poppins font-normal hover:bg-[#14151A] text-sm text-white">Close</button>
                        </form>
                    </div>
                </div>
            </dialog >

            < dialog id="tech" className="modal" >
                <div className="modal-box w-11/12 max-w-2xl font-poppins text-[#14151A] bg-white">
                    <h3 className="font-semibold text-lg">Web Company Profile PT. Techno Pilot Indonesia</h3>
                    <p className="py-4 mt-5 text-justify  font-light">
                        Company Profile is a website I developed during my internship at PT. Techno Pilot Indonesia, designed to showcase the company information, services, portfolio, and contact details to potential clients and partners, The website can be visited at the following link:<br />
                        <a href="https://technopilot.id/" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
                            https://technopilot.id/
                        </a>
                        <br /><br />
                        <h5 className="font-semibold">Technologies I Used:</h5>
                        <h5 className="font-semibold mt-3">CodeIgniter 4:</h5>
                        <p className="text-sm font-light">I utilized CodeIgniter 4, a lightweight PHP framework, for the backend development. CodeIgniter provided a simple and efficient way to manage the website content, including handling dynamic pages, managing user input, and ensuring secure data handling. The framework flexibility allowed me to quickly implement the necessary features and maintain clean and organized code.</p>
                        <h5 className="font-semibold mt-2">Tailwind CSS:</h5>
                        <p className="text-sm font-light">For styling, I used Tailwind CSS, a utility-first framework. Tailwind provides great flexibility in design, allowing me to add utility classes directly to HTML elements without writing a lot of custom CSS. This speeds up the styling process and ensures consistency in the appearance.</p>
                        <h5 className="font-semibold mt-2">Daisy UI:</h5>
                        <p className="text-sm font-light">To accelerate UI development, I also integrated Daisy UI, a plugin for Tailwind CSS that offers various ready-made UI components such as buttons, forms, and more. This was extremely helpful in building an attractive and professional look without having to design from scratch.</p>


                    </p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="bg-[#07C65D] px-10 py-2 rounded-md w-full mt-3  font-poppins font-normal hover:bg-[#14151A] text-sm text-white">Close</button>
                        </form>
                    </div>
                </div>
            </dialog >

        </>
    )
}

export default Hdetail