import React from 'react'

const Agregar = ({ title, modalName, icon={} }) => {
    return (
        <div>
            <label htmlFor={modalName} className="btn btn-outline btn-info">{icon} {title}</label>
        </div>
    )
}

export default Agregar
