import { usePatientStore } from "../store"
import { PatientDetail } from "./PatientDetail"

export const PatientsList = () => {
  const {patients} =usePatientStore()
  console.log(patients)
  
  return (
    <div className=" md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
    {
      patients.length ? (
        <>
        <h2 className="font-black uppercase text-3xl text-center">
                          listado de pacientes    
                    </h2>
                    <p className="text-xl mt-5 mb-10 text-center"> Administra tus {''} 
                      <span className="text-indigo-400 font-bold"> Pacientes y citas</span>
                    </p>
        {patients.map(patient => (
          <PatientDetail
          key={patient.id}
          patient={patient}
          />
        ))}
        </>
      ):(
        <>
        <h2 className="font-black uppercase text-3xl text-center">
          sin pacientes 
        </h2>
        <p className="text-xl mt-5 mb-10 text-center">
          Comienza agregando Pacientes {''}
          <span className="text-indigo-400 font-bold text-center">que aparecerán en este lugar</span>
        </p>
        </>
      )
    }
    </div>
  )
}