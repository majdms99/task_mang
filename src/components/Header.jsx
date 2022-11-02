import React from 'react'
import Iamge from '../Images/bg-desktop-dark.jpg'
import IamgeLight from '../Images/bg-desktop-light.jpg'
import Sun from '../Images/icon-sun.svg'
import Moon from '../Images/icon-moon.svg'
const Header = ({ dark, setDark }) => {
    return (
        <div className=' ' style={{ backgroundImage: `url(${dark ? Iamge : IamgeLight})` }}>
            <div className='container w-[90%] md:w-1/2 mx-auto   h-[250px]'>
                <div className='pt-12 flex justify-between'>
                    <p className='font-josefin text-white text-3xl'>Hello </p>
                    <button onClick={() => setDark(!dark)}>
                        {
                            dark ?
                                <img src={Moon} alt="" />
                                :
                                <img src={Sun} alt="" />
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header