'use client';

import React, { useEffect } from 'react';
import Lottie from 'lottie-react';
import { Robot404 } from '@/public/assets/json';
import { CustomButton } from '@/components/utils';
import { useRouter } from 'next/navigation';

export default function Custom404() {
    const router = useRouter();

    useEffect(() => {
        // Redirect to home page
        router.push('/');
    }, []);

    return (
        <div className="min-h-[calc(100vh-3.5rem)] flex flex-col justify-center items-center">
            <Lottie
                className="min-h-[calc(90vh-3.5rem)] flex flex-col justify-center items-center"
                onComplete={() => {}}
                animationData={Robot404}
                style={{ height: '40%', width: '40%' }}
                loop={false}
            />

            <CustomButton
                title="Go Back Home"
                buttonType="button"
                handleClick={() => router.push('/')}
                containerStyles="min-h-[calc(10vh-3.5rem)] bg-insightful rounded-full hover:bg-inspiration xs:w-35 lg:w-50"
            ></CustomButton>
        </div>
    );
}
