import { toast } from "react-toastify"
import { usePatientStore } from "../store"
import { Patient } from "../types"
import { ItemDetail } from "./ItemDetail"
type PatientDetailProps = {
  patient: Patient
}


export const PatientDetail = ({patient} : PatientDetailProps) => {
  const{deletePatient, getPatientById} = usePatientStore()

  const handleClick = () =>{
    deletePatient(patient.id)
    toast.error('Paciente eliminado',{
      autoClose:3000,
      theme: "colored",
    })
  }
  return (
    <div className="mx-5 my-10 px-5 py-5 shadow-md rounded-lg bg-white ">
      <div className=" grid lg:grid-cols-2">
       <ItemDetail label="ID" data={patient.id}/>
       <ItemDetail label="Nombre" data={patient.name}/>
       <ItemDetail label="Propietario" data={patient.caretaker}/>
       <ItemDetail label="Correo" data={patient.email}/>
       <ItemDetail label="Fecha" data={patient.date.toString()}/>
       <ItemDetail label="Sintomas" data={patient.symptoms}/>
      </div>
     <div className="flex flex-col lg:flex-row gap-2 justify-between mt-10">
      <button
      className="py-2 px-10 bg-indigo-400 hover:bg-blue-700 text-white font-bold uppercase rounded-lg"
      onClick={()=>{getPatientById(patient.id)}}
      >
        Editar
      </button>
      <button
      className="py-2 px-10 bg-orange-400 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
      onClick={handleClick}
      >
        Eliminar
      </button>
     </div>
    </div>
  )
}