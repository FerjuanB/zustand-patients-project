import { Patient } from "../types"
import { ItemDetail } from "./ItemDetail"

type PatientDetailProps = {
    patient: Patient
}


export const PatientDetail = ({patient} : PatientDetailProps) => {
  return (
    <div className="mx-5 my-10 px-5 py-10 shadow-md md:h-screen rounded-lg bg-white ">
     <ItemDetail label="ID" data={patient.id}/>
     <ItemDetail label="Nombre" data={patient.name}/>
     <ItemDetail label="Propietario" data={patient.caretaker}/>
     <ItemDetail label="Correo" data={patient.email}/>
     <ItemDetail label="Fecha" data={patient.date.toString()}/>
     <ItemDetail label="Sintomas" data={patient.symptoms}/>
     
    </div>
  )
}