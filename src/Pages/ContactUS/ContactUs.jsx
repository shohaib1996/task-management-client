
import toast from "react-hot-toast";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import Lottie from "lottie-react";
import contact_us from "../../../public/contact_us.json"
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar/Navbar";


const ContactUs = () => {

    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_nbmux6f', 'template_t3455i9', form.current, 'N7sCXhxC1NSQ36mKf')
            .then((result) => {
                console.log(result.text);
                if (result.text) {
                    toast.success("Your Message Has been sent", { duration: 5000 })
                    form.current.reset()
                }
            }, (error) => {
                console.log(error.text);
            });

    };
    return (
        <div>
            <Navbar></Navbar>
            <section className="" id="contact">

                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                    <div className="mb-4">
                        <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                            <p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
                                Contact
                            </p>
                            <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
                                Get In Touch
                            </h2>
                            <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
                                Please input any query about us !!!
                            </p>
                        </div>
                    </div>
                    <div className="flex items-stretch justify-center">
                        <div className="grid md:grid-cols-2">

                            <Lottie
                                animationData={contact_us}
                                loop={true}
                                width={300}
                                height={350}
                            />

                            <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                                <h2 className="mb-4 text-2xl font-bold">Ready to Get Started?</h2>
                                <form id="contactForm" ref={form} onSubmit={sendEmail}>
                                    <div className="mb-6">
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <div className="mx-0 mb-1 sm:mb-4">
                                                <label
                                                    htmlFor="name"
                                                    className="pb-1 text-xs uppercase tracking-wider"
                                                />
                                                <input
                                                    type="text"
                                                    id="name"
                                                    autoComplete="given-name"
                                                    placeholder="Your name"
                                                    className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                                                    name="user_name"
                                                />
                                            </div>
                                            <div className="mx-0 mb-1 sm:mb-4">
                                                <label
                                                    htmlFor="email"
                                                    className="pb-1 text-xs uppercase tracking-wider"
                                                />
                                                <input
                                                    type="email"
                                                    id="email"
                                                    autoComplete="email"
                                                    placeholder="Your email address"
                                                    className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                                                    name="user_email"
                                                />
                                            </div>
                                        </div>
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <label
                                                htmlFor="textarea"
                                                className="pb-1 text-xs uppercase tracking-wider"
                                            />
                                            <textarea
                                                id="textarea"
                                                name="message"
                                                cols={30}
                                                rows={5}
                                                placeholder="Write your message..."
                                                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                                                defaultValue={""}
                                            />
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <input
                                            value="Send Message"
                                            type="submit"
                                            className="w-full bg-[#aacc00] text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                                        />


                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>

    );
};

export default ContactUs;