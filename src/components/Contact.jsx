import { useState } from "react";

function Contact() {
    const [submitted, setSubmitted] = useState(false);



    return (
        <section id="contact" className="min-h-screen scroll-mt-[45px] flex flex-col md:flex-row justify-center items-center p-6">
            {/* Contact Info */}
            <div className="md:w-1/2 w-full border-b md:border-b-0 border-[var(--primary-color)] flex flex-col justify-center items-center gap-4 py-6 md:py-0">
                <p className="text-center">
                    Email: <a href="mailto:anushanthofficial@gmail.com" className="text-[var(--primary-color)] hover:underline">anushanthofficial@gmail.com</a>
                </p>
                <p className="text-center">
                    Phone: <span className="text-[var(--primary-color)]">+91 6374788146</span>
                </p>
                <div className="flex gap-4 mt-2">
                    {[
                        { href: '#', icon: 'linkedin' },
                        { href: '#', icon: 'github' },
                        { href: '#', icon: 'x-twitter' },
                        { href: '#', icon: 'instagram' }
                    ].map(({ href, icon }, idx) => (
                        <a key={idx} href={href} className="text-base text-[var(--primary-color)] inline-flex items-center justify-center size-[2.2rem] border-2 border-[var(--primary-color)] rounded-full transition ease-in-out duration-200 hover:text-black hover:bg-[var(--primary-color)] hover:shadow-[0_0_10px_var(--primary-color)] hover:scale-110 hover:-translate-y-1">
                            <i className={`fa-brands fa-${icon}`}></i>
                        </a>
                    ))}
                </div>
            </div>

            {/* Contact Form */}
            <div className="md:w-1/2 w-full border-l-2 border-[var(--primary-color)] flex justify-center items-center p-4">
                <form action="" method="post" 
                onSubmit={(e) => {
                        e.preventDefault();
                        setSubmitted(true);

                        setTimeout(() => {
                            setSubmitted(false);
                          }, 5000);
                        }}
                        className="w-full max-w-md flex flex-col items-center gap-4">
                    {[
                        { id: 'name', type: 'text', label: 'Your Name:' },
                        { id: 'email', type: 'email', label: 'Your Email:' }
                    ].map(({ id, type, label }) => (
                        <div key={id} className="w-full">
                            <label htmlFor={id} className="block mb-1">{label}</label>
                            <input type={type} id={id} className="bg-white w-full h-10 px-3 text-black border-2 border-[var(--primary-color)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]" />
                        </div>
                    ))}
                    <div className="w-full">
                        <label htmlFor="message" className="block mb-1">Your Message:</label>
                        <textarea id="message" className="bg-white w-full h-24 px-3 py-2 text-black border-2 border-[var(--primary-color)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"></textarea>
                    </div>
                    <button type="submit" className="w-1/2 h-10 text-[var(--primary-color)] border-2 border-[var(--primary-color)] rounded-xl hover:text-black hover:bg-[var(--primary-color)] transition ease-in-out duration-200">Send Message</button>
                    {submitted && (
                        <p className="text-red-500">
                            Please Contact via Phone or Email.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default Contact;