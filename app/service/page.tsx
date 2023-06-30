'use client'
import React from 'react';
import Image from 'next/image';
import {motion} from 'framer-motion';
import {bounceIn, rotate} from '@/core/utils/motion';
import {useInView} from "react-intersection-observer";

export default function Service() {

    const [ref, inView] = useInView();

    return (
        <section className="bg-white h-full">
            <div className="p-12 text-4xl font-bold bg-cover bg-inspiration bg-opacity-50 text-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <div>
                        <h2 className="px-12 py-5 text-4xl font-medium text-start">
                            All the Services <br/> you need
                        </h2>
                        <p className="text-start text-xs font-light px-12">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div className="p-2">
                        <Image src="/assets/img/img.png" width={500} height={500} alt="Your Image"/>
                    </div>
                </div>
            </div>

            <section className="container mx-auto py-8">
                <div className="mb-4 text-center">
                    <h1 className='text-shadow text-pixel-black font-medium text-4xl'>OUR SERVICES</h1>
                </div>

                <div className="p-12 serv-sec mb-2 bg-transparent">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                        <div>
                            <motion.div initial="hidden" whileInView="show" variants={bounceIn(0, 1.2)}>
                                <Image src="/assets/img/service-header.jpg" width={500} height={500} alt="Your Image"/>
                            </motion.div>
                        </div>
                        <div>
                            <h3 className="text-pixel-black text-2xl font-bold">Partnerships</h3>
                            <p className="text-pixel-black">
                                Partner with Turntabl today and design low-cost, high-quality technology ethically and
                                sustainably.
                            </p>
                        </div>
                    </div>
                </div>
                <hr className="border-gray-300 my-4 w-full"/>

                <div className="p-12 serv-sec mb-2 bg-transparent">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                        <div>
                            <h3 className="text-pixel-black text-2xl font-bold">Project Management</h3>
                            <p className="text-pixel-black">
                                We cooperate with you throughout the project life-cycle in small, committed teams. From
                                inception and definition to delivery, production and maintenance - our style is clean
                                lines, efficient code, empowered users.
                            </p>
                        </div>
                        <div>
                            <motion.div initial="hidden" whileInView="show" variants={bounceIn(0, 1.2)}>
                                <Image src="/assets/img/header-approach.jpg" width={500} height={500} alt="Your Image"/>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <hr className="border-gray-300 my-4 w-full"/>

                <div className="p-12 serv-sec mb-2 bg-transparent">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                        <div>
                            <motion.div initial="hidden" whileInView="show" variants={bounceIn(0, 1.2)}>
                                <Image src="/assets/img/BOwusuNyantekyi_turntabl_pre-edits_20220602_022_V2.jpg"
                                       width={500} height={500} alt="Your Image"/>
                            </motion.div>
                        </div>
                        <div>
                            <h3 className="text-pixel-black text-2xl font-bold">Development</h3>
                            <p className="text-pixel-black">
                                We can assist you in growing your group. Our personnel are adaptable and resourceful. We
                                chew through JIRAs just as easily as we develop your UX or next generation micro-service
                                layer.
                            </p>
                        </div>
                    </div>
                </div>
                <hr className="border-gray-300 my-4 w-full"/>

                <div className="p-12 serv-sec mb-2 bg-transparent">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                        <div>
                            <h3 className="text-pixel-black text-2xl font-bold">Software Consultancy</h3>
                            <p className="text-pixel-black">
                                We listen to your issues first. After that, you get industry-leading services from a
                                professional solutions team.
                            </p>
                        </div>
                        <div>
                            <motion.div initial="hidden" whileInView="show" variants={bounceIn(0, 1.2)}>
                                <Image src="/assets/img/IMG_9383.jpg" width={500} height={500} alt="Your Image"/>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}
