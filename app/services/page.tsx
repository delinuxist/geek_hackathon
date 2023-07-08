'use client';

import React from 'react';
import Hero from "@/components/pages/services/Hero";
import ServicesSection from "@/components/pages/services/ServicesSection";
import AnimatePresenceWrapper from '@/components/utils/AnimatePresenceWrapper';

export default function Service() {
    return (
        <AnimatePresenceWrapper>
            <section className="h-full bg-white">
                <Hero />
                <ServicesSection />
            </section>
        </AnimatePresenceWrapper>
    );
}
