import { motion } from "framer-motion";
import { animated } from '@react-spring/web';
import { useState, useEffect, useRef } from 'react';

const tabContents = [
    [
        "./assets/IL.webp",
        "./assets/PEB.webp",
        "./assets/tech.webp",
    ],
    [
        "./assets/prima.webp",
    ],
    [
        "./assets/repajak.webp",
    ]
];

const Caraousel = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);



    useEffect(() => {
        const options = {
            root: carouselRef.current,
            rootMargin: '0px',
            threshold: 0.5
        };

        const callback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setCurrentSlide(Number(entry.target.dataset.index));
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);

        const slides = carouselRef.current.querySelectorAll('.carousel-item');
        slides.forEach(slide => observer.observe(slide));

        return () => observer.disconnect();
    }, [activeTab]);


    const handleTabClick = (index) => {
        setActiveTab(index);
        setCurrentSlide(0);
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - carouselRef.current.offsetLeft);
        setScrollLeft(carouselRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll-fast
        carouselRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <>
            <div className="flex flex-col gap-0 md:gap-3 md:flex-row">
                <animated.div

                    className="w-full md:w-[200px] bg-[#14151A] h-auto mt-8 p-5 rounded-3xl block md:hidden"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-white text-center px-5 md:px-0 font-poppins font-semibold"
                    >
                        My <span className="text-[#07C65D]">Projects</span>
                    </motion.h1>

                    <div className="tab mt-3 flex flex-col">
                        <button
                            className={`tab text-[#07C65D] font-poppins font-semibold text-md ${activeTab === 0 ? 'tab-active' : ' text-white'}`}
                            onClick={() => handleTabClick(0)}
                        >
                            Internship
                        </button>
                        <button
                            className={`tab text-[#07C65D] font-poppins font-semibold text-md ${activeTab === 1 ? 'tab-active' : 'text-white'}`}
                            onClick={() => handleTabClick(1)}
                        >
                            Freelance
                        </button>
                        <button
                            className={`tab text-[#07C65D] font-poppins font-semibold text-md ${activeTab === 2 ? 'tab-active' : 'text-white'}`}
                            onClick={() => handleTabClick(2)}
                        >
                            Personal
                        </button>
                    </div>
                </animated.div>

                <animated.div

                    className="w-full bg-[#14151A] h-auto mt-3 md:mt-8 p-2 rounded-3xl flex-1"
                >
                    <div
                        ref={carouselRef}
                        className="carousel carousel-center rounded-box w-full space-x-4 p-0 overflow-x-scroll scrollbar-hide"
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                    >
                        {tabContents[activeTab].map((src, index) => (
                            <div
                                key={index}
                                data-index={index}
                                className="carousel-item w-full md:w-10/12 h-[200px] md:h-[600px]"
                            >
                                <img
                                    src={src}
                                    className="rounded-box h-full object-cover w-full"
                                    draggable="false"
                                    alt={`Project image ${index + 1}`}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-4">
                        {tabContents[activeTab].map((_, index) => (
                            <div
                                key={index}
                                className={`w-2 h-2 mx-1 rounded-full cursor-pointer ${currentSlide === index ? 'bg-[#07C65D]' : 'bg-gray-400'
                                    }`}
                                onClick={() => {
                                    const slides = carouselRef.current.querySelectorAll('.carousel-item');
                                    slides[index].scrollIntoView({ behavior: 'smooth', inline: 'center' });
                                }}
                            />
                        ))}
                    </div>
                </animated.div>

                <animated.div

                    className="w-full md:w-[200px] bg-[#14151A] h-auto mt-8 p-5 rounded-3xl hidden md:block"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-2xl md:text-2xl text-white text-center px-5 md:px-0 font-poppins font-semibold"
                    >
                        My <span className="text-[#07C65D]">Projects</span>
                    </motion.h1>

                    <div className="tab mt-[13rem] gap-4">
                        <button
                            className={`tab text-[#07C65D] font-poppins font-semibold text-lg ${activeTab === 0 ? 'tab-active' : ' text-white'}`}
                            onClick={() => handleTabClick(0)}
                        >
                            Internship
                        </button>
                        <button
                            className={`tab text-[#07C65D] font-poppins font-semibold text-lg ${activeTab === 1 ? 'tab-active' : 'text-white'}`}
                            onClick={() => handleTabClick(1)}
                        >
                            Freelance
                        </button>
                        <button
                            className={`tab text-[#07C65D] font-poppins font-semibold text-lg ${activeTab === 2 ? 'tab-active' : 'text-white'}`}
                            onClick={() => handleTabClick(2)}
                        >
                            Personal
                        </button>
                    </div>
                </animated.div>
            </div>
        </>
    )
}

export default Caraousel;