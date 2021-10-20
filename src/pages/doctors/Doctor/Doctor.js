import React from 'react'
import { Link } from 'react-router-dom';

const Doctor = ({ doctor }) => {
    const { id, name, img, desc, profession } = doctor;
    return (
        <div className="md:flex space-x-10 mt-8 " >
            <div className="flex-none h-full md:w-1/3 md:relative text-center flex justify-center mb-8 " >
                <img className="md:absolute inset-0 md:w-full md:h-full w-20 h-20 rounded-r-full rounded-l-full md:rounded-l-none md:rounded-r-none " src={img} alt="" />
            </div>
            <div className="flex-auto">
                <h1>{name}</h1>
                <h2>{profession}</h2>
                <p>{desc.slice(0, 100)}</p>
                <Link to={`/doctors/${id}`}>Read more</Link>
            </div>
        </div>
    )
}

export default Doctor;
