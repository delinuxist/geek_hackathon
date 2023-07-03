'use client'
import React, {ReactNode, useEffect, useState} from 'react';
import Image from 'next/image';
import {motion} from 'framer-motion';
import {bounceIn} from '@/core/utils/motion';
import Link from "next/link";
import Modal from '../../components/layout/Modal'
import Partnership from "@/app/service/partnerships";
import ProjectManagement from "@/app/service/project-management";
import Development from "@/app/service/development";
import SoftwareConsultancy from "@/app/service/software-consultancy";
import Lottie from 'lottie-web';
import animationData from './serv.json';

export default function Service() {
    const [showModal, setShowModal] = useState(false)
    const [modalContent, setModalContent] = useState<ReactNode | null>(null);

    const openModal = (content: string) => {
        if (content === "partnership") {
            setModalContent(() => <Partnership/>);
        } else if (content === "projectManagement") {
            setModalContent(() => <ProjectManagement/>);
        } else if (content === "development") {
            setModalContent(() => <Development/>);
        } else if (content === "softwareConsultancy") {
            setModalContent(() => <SoftwareConsultancy/>);
        }
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setModalContent(null);
    };

    useEffect(() => {
        const animationContainer = document.getElementById('animation-container');
        if (animationContainer) {
            Lottie.loadAnimation({
                container: animationContainer,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: animationData
            });
        }
    }, []);

    return (
        <section className="bg-white h-full">
            <div className="p-12 text-4xl font-bold bg-cover bg-black text-center">
                <div className="py-5 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <div>
                        <h2 className="font-neuebit px-5 text-7xl font-bold text-start text-white" style={{ lineHeight: "0.7" }}>
                            All the <span className='text-disruption'>Services</span> <br/> you need
                        </h2>
                        <p className="xl:text-2xl text-start text-sm font-light text-white px-5">
                            <br/>
                            From strategic consulting to cutting-edge technology solutions, we have you covered. Whether
                            you need assistance with software development, IT infrastructure, project management,
                            digital marketing, or any other aspect of your business, we have the capabilities to provide
                            it. With our diverse expertise and commitment to excellence, we strive to be a one-stop
                            destination for all your business requirements.
                        </p>

                        {/*    Button Over Here    */}
                    </div>
                    <div className="p-2">
                        <div id="animation-container">
                        {/*    <Image src='/assets/img/img.png'*/}
                        {/*           width={1000}*/}
                        {/*           height={1000}*/}
                        {/*           alt='your image'/>*/}
                        </div>
                    </div>
                </div>
            </div>

            <section className="container mx-auto py-8">
                <div className="mb-4 text-center">
                    <h1 className='font-neuebit text-shadow text-pixel-black font-bold text-5xl'>OUR SERVICES</h1>
                </div>

                <div className="p-6 serv-sec mb-2 bg-transparent">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                        <div>
                            <motion.div initial="hidden" whileInView="show" variants={bounceIn(0, 1.2)}>
                                <Image src="/assets/img/service-header.jpg" width={500} height={500} alt="Your Image"/>
                            </motion.div>
                        </div>
                        <div>
                            <h3 className="font-neuebit text-pixel-black text-5xl font-bold">Partnerships</h3>
                            <br/>
                            <p className="text-pixel-black">
                                In today&apos;s fast-paced and interconnected business landscape, successful companies
                                understand the power of collaboration and strategic partnerships. At Turntabl, we have
                                reimagined the concept of partnership and developed a unique approach known as
                                <strong> &ldquo;Partnership as a Service.&rdquo;</strong>
                                <br/>
                                Our Partnership as a Service offering goes beyond the
                                traditional vendor-client relationship, aiming to foster mutually beneficial and
                                long-lasting collaborations that drive innovation, growth, and shared success.

                                Partner with Turntabl today and design low-cost, high-quality technology ethically and
                                sustainably.
                            </p>
                            <br/>
                            <Link href="">
                                <p className="learn-more-link text-xl font-extrabold font-mondwest p-2 text-pixel-black"
                                   onClick={() => openModal("partnership")}>
                                    Learn More <span className="arrow">&#8594;</span>
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
                <hr className="border-gray-300 my-4 w-full"/>

                <div className="p-6 serv-sec mb-2 bg-transparent">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                        <div>
                            <h3 className="font-neuebit text-pixel-black text-5xl font-bold">Project Management</h3>
                            <br/>
                            <p className="text-pixel-black">
                                In today&apos;s dynamic business environment, effective project management plays a
                                pivotal
                                role in driving organizational success. At Turntabl, we understand the
                                complexities and challenges associated with managing projects.
                                <br/>
                                We cooperate with you throughout the project life-cycle in small, committed teams. From
                                inception and definition to delivery, production and maintenance - our style is clean
                                lines, efficient code, empowered users.
                                With our expertise, proven methodologies, and dedicated professionals, we empower
                                businesses to streamline their projects, achieve objectives, and exceed
                                stakeholders&apos;
                                expectations.
                            </p>
                            <br/>
                            <Link href="">
                                <p className="learn-more-link text-xl font-extrabold font-mondwest text-pixel-black"
                                   onClick={() => openModal("projectManagement")}>
                                    Learn More <span className="arrow">&#8594;</span>
                                </p>
                            </Link>
                        </div>
                        <div>
                            <motion.div initial="hidden" whileInView="show" variants={bounceIn(0, 1.2)}>
                                <Image src="/assets/img/header-approach.jpg" width={500} height={500} alt="Your Image"/>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <hr className="border-gray-300 my-4 w-full"/>

                <div className="p-6 serv-sec mb-2 bg-transparent">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                        <div>
                            <motion.div initial="hidden" whileInView="show" variants={bounceIn(0, 1.2)}>
                                <Image src="/assets/img/BOwusuNyantekyi_turntabl_pre-edits_20220602_022_V2.jpg"
                                       width={500} height={500} alt="Your Image"/>
                            </motion.div>
                        </div>
                        <div>
                            <h3 className="font-neuebit text-pixel-black text-5xl font-bold">Development</h3>
                            <br/>
                            <p className="text-pixel-black">
                                At Turntabl, we specialize in delivering cutting-edge software solutions
                                tailored to meet the unique needs and challenges of modern businesses. With our deep
                                expertise, agile methodologies, and customer-centric approach, we empower organizations
                                to harness the power of technology and drive innovation through our comprehensive
                                Software Development services.<br/>
                                We understand that every business has distinct requirements and goals. That&apos;s why
                                our Software Development services are highly customizable to ensure a perfect fit for
                                your organization.
                                Our personnel are adaptable and resourceful. We chew through JIRAs just as easily as we
                                develop your UX or next generation micro-service layer.
                            </p>
                            <br/>
                            <Link href="">
                                <p className="learn-more-link text-xl font-extrabold font-mondwest text-pixel-black"
                                   onClick={() => openModal("development")}>
                                    Learn More <span className="arrow">&#8594;</span>
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
                <hr className="border-gray-300 my-4 w-full"/>

                <div className="p-5 serv-sec mb-2 bg-transparent">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                        <div>
                            <h3 className="font-neuebit text-pixel-black text-5xl font-bold">Software Consultancy</h3>
                            <br/>
                            <p className="text-pixel-black">
                                At Turntabl, we understand that businesses face unique challenges and require
                                tailored solutions to thrive in today&apos;s dynamic digital landscape. That&apos;s why
                                we offer comprehensive Software Consultancy services designed to empower organizations
                                and drive their success.
                                <br/>
                                We take a client-centric approach, carefully listening to your needs, challenges, and
                                goals. By gaining a thorough understanding of your business, we can provide strategic
                                guidance and industry-leading customized solutions that align with your objectives.
                            </p>
                            <br/>
                            <Link href="">
                                <p className="learn-more-link text-xl font-extrabold font-mondwest text-pixel-black"
                                   onClick={() => openModal("softwareConsultancy")}>
                                    Learn More <span className="arrow">&#8594;</span>
                                </p>
                            </Link>
                        </div>
                        <div>
                            <motion.div initial="hidden" whileInView="show" variants={bounceIn(0, 1.2)}>
                                <Image src="/assets/img/IMG_9005.jpg" width={500} height={500} alt="Your Image"/>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
            <Modal isVisible={showModal}
                   onClose={closeModal}
                   content={modalContent}/>
        </section>
    );
}
