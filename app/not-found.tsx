'use client';

import React from 'react';
import Lottie from 'lottie-react';
import { Error404 } from '@/public/assets/json';

export default function Custom404() {
    return (
        <div className="min-h-[calc(100vh-3.5rem)] flex flex-col justify-center items-center">
            <h1 className={'text-6xl'}>Page Not Found</h1>
            {/*<Lottie*/}
            {/*    onComplete={() => {}}*/}
            {/*    animationData={Error404}*/}
            {/*    style={{ height: '65%', width: '65%' }}*/}
            {/*/>*/}
        </div>
    );
}
