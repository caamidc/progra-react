'use client'
import React from 'react';
import '../assets/css/Galeria.css'
import Image from 'next/image'

export const Galeria = () => {
  return (
    <section id="galeria" className="py5">
        <div className="container">
            <h2>Galeria</h2>
		    <div className="row">
			    <div className= "col-md-3 ">
				<a href="#">
					<img src="https://scontent.flsc3-1.fna.fbcdn.net/v/t39.30808-6/322863868_853464089205851_8954566116382487334_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHymFbOOXoEECIAsUG5uhQeU_PcpxYHHaxT89ynFgcdrNhf__5aRIcHJ1_WaB0w0cq4xLkRDY8ocb3AtxE0pz0R&_nc_ohc=Iqr4q4FmTU0AX8dbhaC&_nc_ht=scontent.flsc3-1.fna&oh=00_AfA-I-Rx5dl8iAW02jzm8QNsy9FRwXCvDO-Ca_dBsqcz2Q&oe=64C838E3" alt="imagen 1" className="img-fluid"/>
				</a>
			</div>
			<div className="col-md-3 ">
				<a href="#">
					<img src="https://scontent.flsc3-1.fna.fbcdn.net/v/t39.30808-6/317937960_555986563204772_560382495733835074_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEYc3tWoEbbAaMSnuguxhWcZuaciKvvwH5m5pyIq-_AfoMLujK734J5-w6E1mMvjkfkZpRsHuKNorLXvuQLxB8D&_nc_ohc=vaI3Jb07SCAAX-_FquP&_nc_ht=scontent.flsc3-1.fna&oh=00_AfDjIc6Qs5tZYcqQcGmB9NvXzUctuHjJVkyfVdxjCHqoVQ&oe=64C8F030" alt="imagen 2" className="img-fluid"/>
				</a>
			</div>
			<div className="col-md-3 ">
				<a href="#">
					<img src="https://scontent.flsc3-1.fna.fbcdn.net/v/t39.30808-6/314045090_536304485172980_2807512008174250055_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFCk-R0DnDjAt5s0HbLRqbhG52qbMAlgc4bnapswCWBztSDaz9ahQAntTdnBmiznvHjL1PTvzvLN9Hx1Q_iSB2j&_nc_ohc=Si5rq7sPxxYAX_lEYG3&_nc_ht=scontent.flsc3-1.fna&oh=00_AfBUrZhDrzLy9dB9QuFobAi9Ot6N1bf0wJEyLlXg_m1HWg&oe=64C74544" alt="imagen 3" className="img-fluid"/>
				</a>
			</div>
            <div className="col-md-3 ">
                <a href="#">
                    <img src="https://scontent.flsc3-1.fna.fbcdn.net/v/t39.30808-6/308972745_495024269301002_5711387819119812749_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFPF7kV-GPy3BpzFEk1CUQisuOxCiDP19my47EKIM_X2XqqwEKzFSydjqFbWyAqEmr7tNykiVhl7F6neXv-hSwf&_nc_ohc=lRniBisLmXgAX-1duBr&_nc_ht=scontent.flsc3-1.fna&oh=00_AfBWqYIhLG8xNWdxNDfiacl0Y69qE6ooZNmOApqs064TZg&oe=64C835D4" alt="imagen 4" className="img-fluid"/>
                </a>
		    </div>
            <div className="col-md-3 ">
                <a href="#">
                    <img src="https://scontent.flsc3-1.fna.fbcdn.net/v/t39.30808-6/308920378_493189496151146_4128960688400560521_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeH7NYfs9rla7lBTyG-y-t5tfs1LlYK1QIZ-zUuVgrVAhko8Kvgz6qKztZyPdd9viRTVyiJ_INV1zCJCyRcpK1aO&_nc_ohc=MTYPrpUvq_cAX8p76Oh&_nc_ht=scontent.flsc3-1.fna&oh=00_AfBwtCUK9FBoGGeo8hpvX1NtOHjuMYgD6Sz7ZEBCR1BeiQ&oe=64C78A93" alt="imagen 5" className="img-fluid"/>
                </a>
		    </div>
            <div className="col-md-3 ">
                <a href="#">
                    <img src="https://scontent.flsc3-1.fna.fbcdn.net/v/t39.30808-6/278030437_1046975836171555_1087833851705358645_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeHJ33jR6cNluBHxAXh2cETU0dnHbkKDQWTR2cduQoNBZNvSFBf2areUVsovI-emj3dzpiPo6btHIhZju2uXL626&_nc_ohc=_G2cU9J3EWYAX8aiHt1&_nc_ht=scontent.flsc3-1.fna&oh=00_AfB8IHrHs2_HEQgpHtpblB-U8SAxDXbSWzPt7d9CtEtQNw&oe=64C83BBE" alt="imagen 6" className="img-fluid"/>
                </a>
		    </div>
            <div className="col-md-3">
                <a href="#">
                    <img src="https://scontent.flsc3-1.fna.fbcdn.net/v/t39.30808-6/278103769_1046975842838221_5304167621896159367_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeEjNRuY9en6ti5Dat33JZnsDvPUp7iVxKAO89SnuJXEoGDXpepby5f8-dkk0LcoFBPE9DLRO-8659ilpZgtfF_L&_nc_ohc=aiuMSYxDL2AAX_Kme8T&_nc_ht=scontent.flsc3-1.fna&oh=00_AfCbEwHpiUjPlJOtTxDjZvSFxw_GOMaxDT8o9VwYypsmUA&oe=64C7F770" alt="imagen 7" className="img-fluid"/>
                </a>
		    </div>
            <div className="col-md-3 ">
                <a href="#">
                    <img src="https://scontent.flsc3-1.fna.fbcdn.net/v/t39.30808-6/278199420_1046975839504888_6430938211380617999_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeGlRZ5FU_eDOZJp1WgRwpgpHZXPEsi3rgcdlc8SyLeuBxUTxRAC5SQdP4UTVxBroKNQqp4Xgynn8irH2kYKgKrS&_nc_ohc=qRp8dnMNZ_YAX8WuQOL&_nc_ht=scontent.flsc3-1.fna&oh=00_AfAsMQwjD80mAS1hXR_3PO452U4A5QlFrsj4lF6y3RlbtA&oe=64C85285" alt="imagen 8" className="img-fluid"/>
                </a>
		    </div>
            <div className="col-md-3 ">
                <a href="#">
                    <img src="https://scontent.flsc3-1.fna.fbcdn.net/v/t39.30808-6/314594698_531606172309478_1543005287697345069_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeG2CU98FQ7CnYgLaHBRi94xiubEkXsJRfqK5sSRewlF-vPO_HBX2XKIr2n__5VNu6Ml6_ZIyrTQtg47C-pI8Lr2&_nc_ohc=uA9ziDU1XQ4AX9364WG&_nc_ht=scontent.flsc3-1.fna&oh=00_AfCEvixTKEO10eYWCmw-hZoH4vy1tvX0C_FZG4QqbU3LBQ&oe=64C7BEF8" alt="imagen 9" className="img-fluid"/>
                </a>
		    </div>
            <div className="col-md-3 ">
                <a href="#">
                    <img src="https://scontent.flsc3-1.fna.fbcdn.net/v/t39.30808-6/317351111_555986556538106_2764608482407318788_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHsYFKLTEeq2ACD7kgzyfzzmpDZ_H8wTTqakNn8fzBNOt8jF6yQq6i9qv_Qebe9vrqFctuMtQFrHD-QVahbgMZP&_nc_ohc=NaPUOsnfx68AX-Oxm04&_nc_ht=scontent.flsc3-1.fna&oh=00_AfAxOAkT2x7AhkKMUQuGKEIbV2Xk9jgI3XTk7bJVKe0UPQ&oe=64C83F53" alt="imagen 10" className="img-fluid"/>
                </a>
		    </div>
            <div className="col-md-3 ">
                <a href="#">
                    <img src="https://scontent.flsc3-1.fna.fbcdn.net/v/t39.30808-6/323279411_1872056849836982_6354968522261043321_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeE8UZ-fqEKqnNVy_qx0pykaX3i5mj4b9mZfeLmaPhv2ZvaZoVu-6i6uoLkFuOU-8pcL4wL95pLJ9X7Gmh0H2avL&_nc_ohc=loHVUGqxUbEAX8GQ9He&_nc_ht=scontent.flsc3-1.fna&oh=00_AfDHsE9GgKzMAmkOK5YxHNyRXqrL8HpfWeLgNAQHl-q_Gw&oe=64C8CBF6" alt="imagen 11" className="img-fluid"/>
                </a>
		    </div>
            <div className="col-md-3 ">
                <a href="#">
                    <img src="https://scontent.flsc3-1.fna.fbcdn.net/v/t39.30808-6/319045568_560943926042369_8183974657477045144_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGehWKfuxIN15vX3DdXZq-_u6nCf3NpqnS7qcJ_c2mqdEcl-pIeF1xWw-aV8v7yXBzeYXAb4rarKEkjsgY2qbsR&_nc_ohc=T9pRFqLAh18AX-sdzg6&_nc_ht=scontent.flsc3-1.fna&oh=00_AfAjfwJvnhz3bTvKCNep-iqjGDa9MjJj8Y8r6cyEGbC1mA&oe=64C72A94" alt="imagen 12" className="img-fluid"/>
                </a>
            </div>
        </div>   
        </div>
    </section>
  )
}
export default Galeria;