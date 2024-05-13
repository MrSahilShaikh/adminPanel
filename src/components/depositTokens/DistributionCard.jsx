import React from 'react'

const DistributionCard = ({ data }) => {
    return (
        <div className='w-full h-full min--60 bg-white rounded my-4 py-8 px-6 space-y-6'>
            <div className='w-fit mx-auto flex flex-col items-center'>
                <h1 className='text-xl font-bold leading-6'>{data.title}</h1>
                <p className='text-sm sm:text-base'>Distribution id: {data.distributionId}</p>
                <p className='text-primary text-sm sm:text-base'>{data.id}</p>
            </div>

            <div>
                <p className='text-sm sm:text-base'>Fundraise amount: ${data.fundraiseAmount}</p>
                <p className='text-sm sm:text-base'>Num tokens withdrawn: {data.NumTokensWithdrawn}</p>
                <p className='text-sm sm:text-base'>Created by: {data.createdBy}</p>
                <p className='text-primary text-sm font-semibold'>Show all {data.totalContributors} contributors</p>
            </div>
        </div>
    )
}

export default DistributionCard