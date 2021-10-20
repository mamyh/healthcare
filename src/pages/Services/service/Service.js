import React from 'react'
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, img, desc } = service;
    return (
        <div className="mx-16 mb-16 hover:shadow-md border border-gray-300 rounded-lg ">
            <div className="">
                <img className=" w-full h-full" src={img} alt="" />
            </div>
            <div className="p-8">
                <h1 className="text-2xl text-yellow-300 font-bold pb-8">{name.slice(0, 10)}</h1>
                <p className="text-justify">{desc.slice(0, 100)}</p>
            </div>
            <div className="text-center mt-4 mb-4 ">
                <Link className="text-yellow-500 hover:bg-yellow-400 hover:text-white inline-block px-12 py-2  border-2 font-semibold bg-transparend border-current " to={`/service/${id}`}> Read More ... </Link>
            </div>
        </div>
    )
}

export default Service
