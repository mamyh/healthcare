import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const SingleDoctor = () => {
    const { doctors } = useAuth();
    const { doctorId } = useParams();

    const doctor = doctors.find(doctor => doctorId === doctor.id.toString());

    const { name, img, desc, profession } = doctor;
    return (
        <div className="  md:h-screen  md:flex items-center justify-center">
            <div className=" hover:shadow-md md:mt-12 md:w-1/3 bg-yellow-100">

                <div className=" w-full">
                    <img className="w-full" src={img} alt="" />
                </div>
                <div className="p-5 space-y-2">
                    <h1 className="text-2xl ">doctor name : {name}</h1>
                    <p >Profession:{profession}</p>
                    <p>{desc}</p>
                </div>
            </div>

        </div>
    )
}

export default SingleDoctor;