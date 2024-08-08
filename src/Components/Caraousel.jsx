import { motion } from "framer-motion";
import { useSpring, animated } from '@react-spring/web';
import { useState, useEffect } from 'react';

const tabContents = [
    [
        "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
        "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
        "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
        "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
        "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
        "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp",
        "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
    ],
    // Add content for Tab 2 and Tab 3 as needed
    [
        "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp", // Replace with actual images for Tab 2
        "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" // Replace with actual images for Tab 2
    ],
    [
        "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp", // Replace with actual images for Tab 3
        "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" // Replace with actual images for Tab 3
    ]
];

const Caraousel = () => {
    const [scrollY, setScrollY] = useState(0);
    const [activeTab, setActiveTab] = useState(0);

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

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <>
            <div className="flex flex-col gap-0 md:gap-3 md:flex-row">
                <animated.div
                    style={parallaxEffect}
                    className="w-full md:w-[200px] bg-[#14151A] h-auto mt-8 p-5 rounded-3xl block md:hidden "
                >
                </animated.div>

                <animated.div
                    style={parallaxEffect}
                    className="w-full bg-[#14151A] h-auto mt-3 md:mt-8 p-5 rounded-3xl flex-1"
                >
                    <div className="carousel carousel-center rounded-box w-full space-x-4 p-0">
                        {tabContents[activeTab].map((src, index) => (
                            <div key={index} className="carousel-item w-full md:w-10/12 h-[200px] md:h-[600px]">
                                <img
                                    src={src}
                                    className="rounded-box h-full object-cover w-full" />
                            </div>
                        ))}
                    </div>
                </animated.div>

                <animated.div
                    style={parallaxEffect}
                    className="w-full md:w-[200px] bg-[#14151A] h-auto mt-8 p-5 rounded-3xl hidden md:block "
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-2xl md:text-2xl text-white text-center px-5 md:px-0  font-poppins font-semibold"
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
