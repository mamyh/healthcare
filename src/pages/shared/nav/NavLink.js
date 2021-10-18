
import React from 'react'
import { Link } from 'react-router-dom'

const NavLink = ({ myClass = null }) => {
    let myModifiedClass = myClass ? myClass : "hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium";
    return (
        <div>
            <Link
                to="/"
                className={myModifiedClass}
            >
                Home
            </Link>

            <Link
                to="/about"
                className={myModifiedClass}
            >
                About
            </Link>

            <Link
                to="/doctors"
                className={myModifiedClass}
            >
                Our Doctors
            </Link>

            <Link
                to="/departments"
                className={myModifiedClass}
            >
                Our Departments
            </Link>

            <Link
                to="/contact"
                className={myModifiedClass}
            >
                Contact
            </Link>
        </div>
    )
}

export default NavLink
