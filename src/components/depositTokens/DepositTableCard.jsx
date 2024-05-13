import React from 'react'
import { TextInput } from '../UI/Inputs/TextInput'
import DepositTable from './DepositTable'

const DepositTableCard = ({data}) => {
  return (
    <div className='w-full'>
        <h1 className='text-xl font-bold leading-6 pb-3 sm:pb-1'>Deposit</h1>
        <DepositTable tableData={data.tableData}/>
        <p className='text-neutral-400 text-sm font-bold'>Total Deposited: {data.total} </p>

        {/* form to deposit  */}

        <form className='flex flex-col gap-4 mt-6'>
            <div className='flex flex-col sm:flex-row gap-4 sm:gap-8'>
            <TextInput label={'Amount'} name="amount" type={'text'} />
            <TextInput label={'Unlock Date & Time'} name="unlockdandt" type={'datetime-local'} />
            </div>
            <p>Date and times should be specified in your local timezone.</p>
            <button type='submit' disabled={false} className='w-full bg-neutral-200 text-neutral-400 cursor-pointer font-semibold p-2 rounded-md'>Deposit</button>
        </form>
    </div>
  )
}

export default DepositTableCard