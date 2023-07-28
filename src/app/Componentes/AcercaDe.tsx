import React from 'react'
import '../assets/css/AcercaDe.css'
import Image from 'next/image'

export const AcercaDe = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                     <div className="about-content">
                        <h2>Acerca de</h2>
                        <p>En Eloquent somos un equipo que se dedican a hacer realidad los eventos de nuestros clientes. Nos encanta lo que hacemos y trabajamos con la máxima dedicación para asegurarnos de que cada evento que organizamos sea un exito y nos encargamos de todo, desde la planificación hasta la ejecución, para que nuestros clientes puedan relajarse y disfrutar de su evento sin preocupaciones. </p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="about-image">
                        <img src="https://scontent.flsc3-1.fna.fbcdn.net/v/t39.30808-6/241781585_912150219654118_937253045698899973_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeH24YNnD3F8Nkgis3hFsRob3u-N7LOBI8ne743ss4EjyZj5nswwTbh5fJd6x6K0esEg8HcYWVkjIbsEKynrg1TR&_nc_ohc=g5NLG2Vy1qcAX9QYEEl&_nc_ht=scontent.flsc3-1.fna&oh=00_AfBngSJy77qZ4G5sZVUqCVavLr7xqIUWLO0OmFMzDHxjKA&oe=64C86385" alt="Acerca de nosotros"/>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}
export default AcercaDe;