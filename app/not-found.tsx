'use client';

import React from 'react';
import Lottie from 'lottie-react';
import { Robot404 } from '@/public/assets/json';
import {CustomButton} from "@/components/utils";
import {useRouter} from "next/navigation";

export default function Custom404() {
    const router = useRouter();

    return (
        <div className="min-h-[calc(100vh-3.5rem)] flex flex-col justify-center items-center">
            <Lottie
                onComplete={() => {}}
                animationData={Robot404}
                style={{ height: '50%', width: '50%' }}
                loop={false}
            />
            <CustomButton
                title="Go Back Home"
                buttonType="button"
                handleClick={() => router.push("/")}
                containerStyles="bg-insightful rounded-full hover:bg-inspiration w-50"
            ></CustomButton>
        </div>
    );
}
