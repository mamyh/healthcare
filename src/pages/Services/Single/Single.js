import React from 'react'
import { useParams } from 'react-router'
import useAuth from '../../../hooks/useAuth';

const Single = () => {
    const { services } = useAuth();
    const serviceId = useParams();
    const service = services.find(service => serviceId === service.id);
    const { name, img, desc } = service;
    return (
        <div>
            <h1> your are in {serviceId}  service</h1>
            <div>
                <img src={img} alt="" />
            </div>
            <h1>service name : {name}</h1>
            <p>{desc}</p>

        </div>
    )
}

export default Single;
