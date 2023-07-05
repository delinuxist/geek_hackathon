'use client';

import React, { ReactNode, useState } from 'react';
import Modal from '../../components/layout/Modal';
import Hero from "@/components/pages/services/Hero";
import ServicesSection from "@/components/pages/services/ServicesSection";
import Partnership from "@/components/pages/services/partnerships";
import ProjectManagement from "@/components/pages/services/project-management";
import Development from "@/components/pages/services/development";
import SoftwareConsultancy from "@/components/pages/services/software-consultancy";

export default function Service() {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState<ReactNode | null>(null);

    const openModal = (content: string) => {
        if (content === "partnership") {
            setModalContent(() => <Partnership />);
        } else if (content === "projectManagement") {
            setModalContent(() => <ProjectManagement />);
        } else if (content === "development") {
            setModalContent(() => <Development />);
        } else if (content === "softwareConsultancy") {
            setModalContent(() => <SoftwareConsultancy />);
        }
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setModalContent(null);
    };

    return (
        <section className="h-full bg-white">
            <Hero />

            <ServicesSection
                openModal={openModal}
                closeModal={closeModal}
            />

            <Modal
                isVisible={showModal}
                onClose={closeModal}
                content={modalContent}
            />
        </section>
    );
}
