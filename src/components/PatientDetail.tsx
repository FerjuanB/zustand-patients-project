import { Patient } from "../types"
import { ItemDetail } from "./ItemDetail"

type PatientDetailProps = {
    patient: Patient
}


export const PatientDetail = ({patient} : PatientDetailProps) => {
  return (
    <div className="mx-5 my-10 px-5 py-10 shadow-md md:h-screen rounded-lg bg-white ">
     <ItemDetail label={"ID"}
     data={patient.id}/>
      <p className="font-bold mb-3 text-gray-700 uppercase text-sm" > Nombre:{' '}
        <span className=" font-normal text-sm normal-case">{patient.name}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase text-sm" > Nombre:{' '}
        <span className=" font-normal text-sm normal-case">{patient.name}</span>
      </p>
    </div>
  )
}