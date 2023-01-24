import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Template = ({ title, description, link, img }) => {
    return (
        <div className="bg-primary text-white p-4 rounded-lg shadow-lg ">
            <h3 className="text-lg font-bold mb-4 ">{title}</h3>
            <div className='grid grid-rows-2 gap-6 2xl:grid-cols-2 grid-rows-none'>
                <div className='order-2 2xl:order-1'>
                    <div className="flex flex-col gap-10 justify-between">

                        <p>
                            {description}
                        </p>

                        <Link href={link} target="_blank">
                            <div className="bg-white text-primary w-fit p-2 text-sm rounded-md">
                                Zum Template
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='w-full order-1 2xl:order-2'><img src={img} className='rounded-lg w-full' /></div>
            </div>
        </div>
    )
}

export default Template