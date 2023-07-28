import React from 'react'
import '../assets/css/Servicios.css'
import Image from 'next/image'
export const Servicios = () => {
  return (
    <div className="container">
        <h2>Servicios</h2>
        <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <img src="https://scontent.flsc3-1.fna.fbcdn.net/v/t39.30808-6/278134620_1046975829504889_8204443409093051507_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeF5Dp5hqasdyADSmMvxfCFlYogkdisSlEZiiCR2KxKURuFAr3ICadCf4VjPG3hu2emYvXRSJ28jgOxNwe0_nlRn&_nc_ohc=tBHm6mOYNR4AX_atfph&_nc_ht=scontent.flsc3-1.fna&oh=00_AfC63SG00J7pyvRoqh8K3gljbmROtOx-EUe69IgasTwdIg&oe=64C7CA8A" alt="Servicio 1"/>
                    <div className="card-body">
                        <h5 className="card-title">Cumpleaños</h5>
                        <p className="card-text">Celebra tu cumpleaños de forma única y llena de diversión con nuestro servicio de cumpleaños. Nos enfocamos en personalizar la ecperiencia para cada persona para que se sientan especiales en su día y tambien ofrecemos una amplia variedad de dinamicas diseñadas para todas las edades y gustos, ¡Desde los más pequeños hasta los más grandes!.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <img src="https://scontent.flsc3-1.fna.fbcdn.net/v/t39.30808-6/308941538_493188126151283_2876183940671109743_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGcP6cP1WePOBZpfl5Th8F9Id6Xdu_WKKsh3pd279YoqyOILQKmbkuaNGF_L-JdawSsszB1SHMQHR6QnUNOYc8H&_nc_ohc=jbl-mSFeTI4AX8405BU&_nc_ht=scontent.flsc3-1.fna&oh=00_AfCvrN1F9Tf5EyI7CsuVq4whfAGtYJAimK6Me7wa-KR47A&oe=64C88521" alt="Servicio 2"/>
                    <div className="card-body">
                        <h5 className="card-title">Bodas</h5>
                        <p className="card-text">En el día más importante de tu vida, mereces una celebracion de bodas unica y memorable, con nuestro servicio de bodas nos enfocamos en crear una experiencia personal y emocionante para cada pareja,como tambien ofrecemos una amplia variedad de dinámicas y actividades emocionantes para mantener a tus invitados entretenidos y disfrutando de la celebración, además nos aseguramos que tu dia sea perfecto.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <img src="https://scontent.flsc3-1.fna.fbcdn.net/v/t39.30808-6/324248034_902850494068876_2545861617684551577_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEuAWuZKrY3TgC2mRslw2CBRRraoovSlqhFGtqii9KWqLKeF_4OYAj0KytMt1mRW3YQKugK4aCo5lH4XLoyhGzc&_nc_ohc=ywlCYNq1kTkAX__PBlW&_nc_ht=scontent.flsc3-1.fna&oh=00_AfD6JXHKtNM80AJKih3xilDzUqdWJSYFHVMM2bE5NyoLUg&oe=64C7EB86" alt="Servicio 3"/>
                    <div className="card-body">
                        <h5 className="card-title">Eventos de verano</h5>
                        <p className="card-text">¡Celebra el verano con tu equipo y/o empresa de una manera inolvidable! Ultimamente ofrecemos servicios de eventos de verano personalizados para empresas en piscinas con una amplia variedad de opciones para crear un ambiente divertido, familiar y alegre. Nos orgullece anunciar que ultimamente hemos trabajado en el Parque Allillay, donde hemos llevado a cabo una serie de eventos exitosos en unas preciosas piscinas rodeadas de naturaleza. </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Servicios;