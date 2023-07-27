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
                            <Image src="https://z-p3-scontent.flsc2-1.fna.fbcdn.net/v/t39.30808-6/241781585_912150219654118_937253045698899973_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeH24YNnD3F8Nkgis3hFsRob3u-N7LOBI8ne743ss4EjyZj5nswwTbh5fJd6x6K0esEg8HcYWVkjIbsEKynrg1TR&_nc_ohc=AGmALpUSTmoAX_nUwnG&_nc_zt=23&_nc_ht=z-p3-scontent.flsc2-1.fna&oh=00_AfCsJFPkLmRa3y5Ak7IOx8u2fySBPZm7eBsX8Eo6_bsKmg&oe=64C46F05" alt="Acerca de nosotros"/>
                        </div>
                    </div>
                </div>
            </div>
        
    </div>
  )
}
export default AcercaDe;