import { Link } from "react-router-dom";
import bannerAnimation from "../../../../public/banner.json"
import Lottie from "lottie-react";

const Banner = () => {

    return (
        <div className="bg-lime-300">
            <div className="flex items-center justify-center flex-col-reverse lg:flex-row gap-5 max-w-6xl mx-auto ">
                <div className="flex-1 space-y-3 p-4" data-aos="fade-right" data-aos-duration="5000">
                    <h1 className="text-3xl lg:text-5xl font-bold">Effortless Task Management at Your Fingertips</h1>
                    <p>TaskMaster is your ultimate task management companion, designed to empower you in achieving your goals efficiently and effortlessly. Whether you&apos;re a busy professional, a student, or simply someone juggling multiple responsibilities, TaskMaste is here to streamline your tasks and boost your productivity.</p>
                    <Link to="/dashboard">
                        <button className="btn mt-5">Let&apos;t Explore</button>
                    </Link>
                </div>
                <div className="flex-1" data-aos="fade-left" data-aos-duration="5000">
                    <Lottie
                        animationData={bannerAnimation}
                        loop={true}
                        width={300}
                        height={350}
                    />

                </div>
            </div>
        </div>
    );
};

export default Banner;