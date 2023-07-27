import { Evento } from "../Interfaces";
import { collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore"; 
import { db } from "./Conexion";

export const registrarEvento = async(e:Evento)=>{
    const docRef = await addDoc(collection(db, "eventos"),e);
}

export const obtenerEventos = async ()=>{
    var listado:Evento[] = [];
    const querySnapshot = await getDocs(collection(db,"eventos"));
    querySnapshot.forEach((doc)=>{
        //doc.data() in never underfined for query doc snapshot
        var e:Evento = {
            idEvento:doc.id,
            nombre:doc.data().nombre,
            apellido:doc.data().apellido,
            email: doc.data().email, 
            telefono: doc.data().telefono, 
            tipoEvento: doc.data().tipoEvento, 
            fechaEvento: doc.data().fechaEvento, 
            metodoContacto: doc.data().metodoContacto, 
            detalles: doc.data().detalles, 
        };
        listado.push(e)
        console.log(doc.id,"=>",doc.data());
    });
    return listado;
}

export const obtenerEvento = async(idEvento:string)=>{
    const docRef = doc(db,"eventos",idEvento);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()){
        var e:Evento = {
            nombre:docSnap.data().nombre,
            apellido:docSnap.data().apellido,
            email: docSnap.data().email, 
            telefono: docSnap.data().telefono, 
            tipoEvento: docSnap.data().tipoEvento, 
            fechaEvento: docSnap.data().fechaEvento, 
            metodoContacto: docSnap.data().metodoContacto, 
            detalles: docSnap.data().detalles, 
            idEvento:docSnap.id
        }
        return e
    }else{
        console.log("No such document")
        return undefined
    }
}
export const actualizarEvento = async(idEvento:string,e:Evento)=>{
    const docRef = doc(db,"eventos",idEvento);
    await updateDoc(docRef,{...e});
}

export const eliminarEvento = async(idEvento:string)=>{
    await deleteDoc(doc(db,"eventos",idEvento));
}