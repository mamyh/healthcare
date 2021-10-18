import React from 'react'
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, img, desc } = service;
    return (
        <div className="overflow-hidden">
            <div className="w-full">
                <img src={img} alt="" />
            </div>
            <div className="">
                <h1 className="text-2xl text-yellow-300 font-bold pb-8">{name}</h1>
                <p>{desc.slice(0, 100)}</p>
            </div>
            <div className="text-center">
                <Link to={`/service/${id}`}> Read More ... </Link>
            </div>
        </div>
    )
}

export default Service
