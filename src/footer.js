
import React from "react";
import { FacebookIcon, TwitterIcon, aedinIcon } from "lucide-react";


function Footer() {
    const socialas = [
        {
            icon: <FacebookIcon fill="#000" />,
            a: "#",
        },
        {
            icon: <aedinIcon fill="#000" />,
            a: "#",
        },

        {
            icon: <TwitterIcon fill="#000" />,
            a: "#",
        },
    ];

    const company = [
        {
            name: "About",
        },
        {
            name: "Terms of Use",
        },
        {
            name: "Privacy Policy",
        },
        {
            name: "How it Works",
        },
        {
            name: "Contact Us",
        },
    ];

    const support = [
        {
            name: "Support Career",
        },
        {
            name: "24th Service",
        },
        {
            name: "Quick chat",
        },
    ];

    const contact = [
        {
            name: "WhatsApp",
        },
        {
            name: "Support 24th",
        },
    ];

    return (
        <main className="gap-12 w-full mx-auto bg-secondary-color flex justify-between   ">
            <section className="w-[1280px]       py-16">
                <div className="md:grid  grid-cols-1  md:grid-cols-3 xl:grid-cols-5 lg:grid-cols-5        justify-between  ">

                    <div className="col-span-3 mb-8  md:col-span-2">
                        <a href={'/'} >
                            <img src='https://hackathon-sigma-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.962f4500.png&w=256&q=75' alt="logo" width={150} height={0} />
                        </a>

                        <p className="md:w-80  mt-3">Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>

                        <div className="flex gap-4 mt-4 ">
                            {socialas.map((item, index) => (
                                <a
                                    target="_blank"
                                    key={index}
                                    href={item.a}
                                    className="p-3 bg-gray-300 hover:scale-105 hover:text-black transition-all rounded-lg flex justify-center items-center text-slate-900"
                                >
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text_gradient text-xl font-bold">
                            Company
                        </h2>
                        <div className="mt-4">
                            {company.map((item, index) => (
                                <a href={'#'} key={index}>
                                    <p className="text-black truncate mt-1">
                                        {item.name}
                                    </p>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text_gradient text-xl font-bold">
                            Support
                        </h2>
                        <div className="mt-4">
                            {support.map((item, index) => (
                                <a
                                    href={`#`}
                                    className="text-black  mt-1"
                                    key={index}
                                >
                                    <p>{item.name}</p>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text_gradient text-xl font-bold">
                            Contact
                        </h2>
                        <div className="mt-4">
                            {contact.map((item, index) => (
                                <a
                                    href={`#`}
                                    className="text-black  mt-1"
                                    key={index}
                                >
                                    <p>{item.name}</p>
                                </a>
                            ))}

                        </div>
                    </div>


                </div>
            </section>
        </main>
    );
}

export default Footer;
