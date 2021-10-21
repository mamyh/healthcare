import React from 'react'
import useAuth from '../../hooks/useAuth'
import Doctor from './Doctor/Doctor';

const Doctors = () => {
    const { allDoctors } = useAuth();
    const { doctors, isLoading } = allDoctors;

    if (isLoading) {
        return (
            <button type="button" className="bg-rose-600 ..." disabled>
                <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">

                </svg>

            </button>
        )
    }


    return (
        <div className="md:grid grid-cols-2 gap-10 pt-32 md:mx-20 mf:p-8">
            {doctors.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)}
        </div>
    )
}

export default Doctors
