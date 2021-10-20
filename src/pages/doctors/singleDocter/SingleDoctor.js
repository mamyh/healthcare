import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const SingleDoctor = () => {
    const { doctors } = useAuth();
    const { doctorId } = useParams();

    const doctor = doctors.find(doctor => doctorId === doctor.id.toString());

    const { name, img, desc, profession } = doctor;
    return (
        <div>

            <div>
                <img src={img} alt="" />
            </div>
            <h1>doctor name : {name}</h1>
            <p>Profession:{profession}</p>
            <p>{desc}</p>

        </div>
    )
}

export default SingleDoctor;