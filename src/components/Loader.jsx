import React from 'react'
import RingLoader from "react-spinners/RingLoader";

const Loader = ({ size = 50 }) => {
    return (
        <div className='mt-2 flex justify-center items-center'>
            <RingLoader
                size={size}
                color={'#777'}
                loading={true}
            />
        </div>
    )
}

export default Loader