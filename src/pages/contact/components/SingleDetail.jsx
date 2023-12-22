import React, { useState } from 'react'
import { LuCopy } from "react-icons/lu";
import { TiTick } from "react-icons/ti";
import './SingleDetail.css'

const SingleDetail = ({ detail, logo }) => {
    const [copyState, setCopyState] = useState(true)

    const copyToClipboard = () => {
        setCopyState(false);
        navigator.clipboard.writeText(detail)
        setTimeout(() => {
            setCopyState(true)
        }, 1000);
    }

    return (
        <div className='single_detail'>
            {logo}
            {detail}
            <span onClick={copyToClipboard}>
                {
                    copyState
                        ?
                        <LuCopy className='active:animate-spin' />
                        :
                        <TiTick className='text-green-400 text-2xl' />
                }
            </span>
        </div>
    )
}
export default SingleDetail
