import React from 'react'
import useAuth from '../../hooks/useAuth'
import Doctor from './Doctor/Doctor';

const Doctors = () => {
    const { doctors } = useAuth();

    console.log(doctors)

    return (
        <div className="md:grid grid-cols-2 gap-10 pt-32">
            {doctors.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)}
        </div>
    )
}

export default Doctors
