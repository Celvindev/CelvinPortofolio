import Navbar from "../../Components/Navbar";

const Homee = () => {
    return (
        <>
            <div className="px-4 md:px-8">
                <div className="w-full bg-[#14151A] h-auto mt-8 pb-20 rounded-3xl">
                    <Navbar />
                    <div className="flex flex-col md:flex-row mt-16 md:mt-24 text-white">
                        <div className="content1 -mt-5 md:pl-10 flex-1 text-center md:text-left">
                            <h5 className="text-[#07C65D]">HI THERE,</h5>
                            <h1 className="text-2xl md:text-4xl mt-3">I Am <span className="text-[#07C65D]">FrontEnd Developer</span></h1>
                            <p className="text-sm mt-4 md:mt-8 text-justify mx-auto md:mx-0 w-full md:w-[500px] px-5 md:px-0 leading-normal">
                                Celvin Alfino Fernandes is a frontend developer and UI/UX
                                designer passionate about creating intuitive and visually
                                appealing user interfaces. He strives to deliver seamless and
                                engaging user experiences, stays updated with industry trends,
                                and continuously improves his skills to bring innovative solutions to projects.
                            </p>
                            <div className="px-5 md:px-0">
                                <button className="py-2 px-5 w-full md:w-[110px] rounded-lg mt-6 md:mt-10 bg-[#07C65D]">More Info</button>
                            </div>
                        </div>
                        <div className="content2 mt-[8rem] md:mt-2 flex justify-end">
                            <div className="rounded-none md:rounded-l-3xl bg-base-100 -mt-24 h-[350px] md:h-[400px] w-full md:w-96 px-0 py-0 md:py-5">
                                <div className="h-[360px] pl-0 md:pl-5 md:h-[360px]">
                                    <img
                                        src="/assets/one.jpg"
                                        alt="profile"
                                        className="rounded-none md:rounded-l-lg h-full object-cover w-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Homee;
