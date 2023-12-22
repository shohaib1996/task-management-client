import Lottie from "lottie-react";
import use from "../../../../public/use.json"

const WhoUseThis = () => {
    return (
        <div className="flex justify-center gap-5 mb-20 mt-12 flex-col lg:flex-row max-w-6xl mx-auto">
            <div className="flex-1" data-aos="fade-right" data-aos-duration="5000">
                <Lottie
                    animationData={use}
                    loop={true}
                    width={300}
                    height={350}
                />

            </div>
            <div className="flex-[2]" data-aos="fade-left" data-aos-duration="5000">
                <h1 className="text-center text-3xl font-bold mb-5">Who Use This !!</h1>
                <ul className="list-disc">
                    <li className="font-bold">Students: <span className="font-normal italic">Students use this for their study schedule, track assignments, and manage time effectively.</span></li>
                    <li className="font-bold">Teacher: <span className="font-normal italic">Plan their lessons, track student progress, and manage classroom tasks.</span></li>
                    <li className="font-bold">Blogger: <span className="font-normal italic">Plan their content, track post schedules, and manage your blogging activities.</span></li>
                </ul>
                <h1 className="text-center text-3xl font-bold mt-5 mb-5">Potential for this App !!</h1>
                <ul className="list-disc">
                    <li className="font-bold"> Bankers: <span className="font-normal italic">Securely manage financial data, track compliance, and analyze real-time financial trends.</span></li>
                    <li className="font-bold"> Developer: <span className="font-normal italic">Oversee projects, manage meetings and agendas, track performance metrics, and enhance team collaboration.</span></li>
                    <li className="font-bold"> Corporate Professionals: <span className="font-normal italic">Manage code versions, track bugs, implement Agile methodologies, and integrate with CI/CD tools.</span></li>
                </ul>

            </div>
        </div>
    );
};

export default WhoUseThis;