import React from 'react'
import DepositTableCard from '../components/depositTokens/DepositTableCard'
import DistributionCard from '../components/depositTokens/DistributionCard'
import { SelectInput } from '../components/UI/Inputs/Select'

const DepositTokens = () => {
    const optionsArray = [
        {
            name:'Select Distribution',
            value:''
        },
        {
            name:'R Games',
            value:'R Games'
        },
        {
            name:'S Games',
            value:'S Games'
        },
        {
            name:'T Games',
            value:'T Games'
        },
        {
            name:'U Games',
            value:'U Games'
        },
        {
            name:'I Games',
            value:'I Games'
        },
    ]

    const cardData={
        title:'R Games',
        distributionId:'64',
        id:'0xcbd9f6d748Dd3d9uiuiub78657ftre5',
        fundraiseAmount:'44443',
        NumTokensWithdrawn:'655097.71428',
        createdBy:'0xcbd9f6d748Dd3d9uiuiub78657ftre5',
        totalContributors:89
    }

    const depositData={
        total:666666,
        tableData:[
            {
                time:'Apr 8,2024 @ 2:15 PM',
                amount:66666,
                depossitId:0,
            },
            {
                time:'Apr 8,2024 @ 2:15 PM',
                amount:66666,
                depossitId:0,
            },
            {
                time:'Apr 8,2024 @ 2:15 PM',
                amount:66666,
                depossitId:0,
            },
            {
                time:'Apr 8,2024 @ 2:15 PM',
                amount:66666,
                depossitId:0,
            },
            {
                time:'Apr 8,2024 @ 2:15 PM',
                amount:66666,
                depossitId:0,
            },
        ]
    }
//I have added dummy data but this data will come from apis. and then we can pass it down as props.
  return (
    <div className='space-y-3'>
        <h1 className='font-bold text-3xl pt-2 sm:pt-0'>Distribute Tokens</h1>
        <div className='pb-3'>
            <SelectInput label={'Select Distribution'} options={optionsArray}/>
        </div>
        <DistributionCard data={cardData}/>
        <DepositTableCard data={depositData}/>
    </div>
  )
}

export default DepositTokens