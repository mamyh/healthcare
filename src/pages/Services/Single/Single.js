import React from 'react'
import { useParams } from 'react-router'
import useAuth from '../../../hooks/useAuth';

const Single = () => {
    const { allServices } = useAuth();
    const { serviceId } = useParams();
    const { services, isLoading } = allServices;

    if (isLoading) {
        return (
            <button type="button" className="bg-rose-600 ..." disabled>
                <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">

                </svg>

            </button>
        )
    }

    const service = services.find(service => serviceId === service.id.toString());

    const { name, img, desc } = service;
    return (
        <div className="  md:h-screen  md:flex items-center justify-center">
            <div className=" hover:shadow-md md:mt-12 md:w-1/3 bg-yellow-100">

                <div className=" w-full">
                    <img className="w-full" src={img} alt="" />
                </div>
                <div className="p-5 space-y-2">
                    <h1 className="text-2xl ">doctor name : {name}</h1>

                    <p>{desc}</p>
                </div>
            </div>

        </div>
    )
}

export default Single;
