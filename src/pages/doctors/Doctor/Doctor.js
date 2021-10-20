import React from 'react'
import { Link } from 'react-router-dom';

const Doctor = ({ doctor }) => {
    const { id, name, img, desc, profession } = doctor;
    return (
        <div className="md:flex space-x-10 mt-8 bg-yellow-100" >
            <div className="flex-none h-full md:w-1/3 md:relative text-center flex justify-center mb-8 " >
                <img className="md:absolute inset-0 md:w-full md:h-full w-20 h-20 rounded-r-full rounded-l-full md:rounded-l-none md:rounded-r-none " src={img} alt="" />
            </div>
            <div className="flex-auto py-8">
                <h1 className="text-2xl text-yellow-300 font-bold pb-8">{name}</h1>
                <h2 className="mb-4 text-sm text-sm text-gray-500">{profession}</h2>
                <p className="text-justify pb-4">{desc.slice(0, 100)}</p>
                <Link className="text-yellow-500 hover:bg-yellow-400 hover:text-white inline-block px-12 py-2  border-2 font-semibold bg-transparend border-current " to={`/doctor/${id}`}>Read more</Link>
            </div>
        </div>
    )
}

export default Doctor;
