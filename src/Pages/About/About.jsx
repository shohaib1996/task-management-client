import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar/Navbar";


const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <section id="about" className="py-12 ">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 animate-pulse">Why Choose TaskMaster?</h2>
                        <div className="flex flex-col md:flex-row justify-center items-center">
                            <div className="md:w-1/2">
                                <img className="w-full h-auto transform transition duration-500 hover:scale-105" src="https://i.ibb.co/phF7Y7T/task-manager-removebg-preview.png" alt="TaskMaster" />
                            </div>
                            <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6">
                                <p className="text-lg text-gray-700">
                                    TaskMaster is not just another task management system; it&apos;s a revolution in how you organize and handle your daily tasks. With our unique drag-and-drop feature, managing tasks has never been easier or more intuitive. Effortlessly prioritize, rearrange, and track your tasks with a simple gesture.
                                </p>
                                <p className="text-lg text-gray-700 mt-4">
                                    Our system is designed to enhance productivity and streamline your workflow. Whether you&apos;re a team leader or a solo entrepreneur, TaskMaster adapts to your unique needs, offering unparalleled flexibility and efficiency. Say goodbye to the clunky interfaces and rigid structures of traditional task management tools. Welcome to a world where simplicity and power go hand in hand.
                                </p>
                                <p className="text-lg text-gray-700 mt-4">
                                    Join the ranks of satisfied users who have transformed their workday with TaskMaster. Experience the future of task management today!
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;