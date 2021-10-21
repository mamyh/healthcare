import React from 'react'
import useAuth from '../../hooks/useAuth';
import Service from './service/Service';

const Services = () => {
    const { allServices } = useAuth();
    const { services, isLoading } = allServices;
    console.log(services, isLoading);
    if (isLoading) {
        return (
            <button type="button" className="bg-rose-600" disabled>
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">

                </svg>

            </button>
        )
    }
    console.log(services, isLoading);
    return (
        <div className="text-center">
            <h1 className="text-2xl  inline-block md:text-center font-bold text-yellow-300 border-current border-b-2">Our services</h1>
            <div className="md:grid grid-cols-3  block -mt-36 md:mt-8 ">
                {services.map((service) => <Service key={service.id} service={service}></Service>)}
            </div>
        </div>
    )
}

export default Services;
