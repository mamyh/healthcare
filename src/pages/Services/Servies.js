import React, { useEffect, useState } from 'react'
import Service from './service/Service';

const Servies = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./service.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className="md:grid grid-cols-3  block -mt-36 md:-mt-8 ">
            {services.map((service) => <Service key={service.id} service={service}></Service>)}
        </div>
    )
}

export default Servies
