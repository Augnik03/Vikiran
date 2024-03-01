import React from 'react'

export default function LandingPage() {
    return (
        <>
            <div className='flex flex-row justify-center space-x-10'>
                <div className=''>
                    <h1 className='text-blue-600 text-6xl'>Radx</h1>
                    <h1
                        className='flex justify-end border-solid border-2 border-white text-white rounded-full pl-2 pr-2 py-1'>
                        Powered by Ai
                    </h1>
                    <h1 className=''>
                        Diagnosing Tomorrow,  Today:
                        <span  className='flex flex-wrap'>Unleashing the Power of Neural</span>
                        <span> Networks</span>
                    </h1>
                </div>
                <div className=''>
                    <h1 className='text-red-600 text-6xl'>Radx</h1>
                </div>
            </div>
        </>
    )
}
