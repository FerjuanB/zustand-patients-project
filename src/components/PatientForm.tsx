import { useForm } from "react-hook-form"
import { ErrorMessage } from "./ErrorMessage"
import type { DraftPatient } from "../types"
import { usePatientStore } from "../store"
import { useEffect } from "react"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
export const PatientForm=() => {
  const {addPatient, activeId, patients, updatePatient}= usePatientStore()
  
  const {register,handleSubmit, setValue, formState:{errors},reset} = useForm<DraftPatient>()
  useEffect(()=>{
    if(activeId){
      const activePatient = patients.filter(patient => patient.id === activeId)[0]
      setValue('name', activePatient.name)
      setValue('caretaker', activePatient.caretaker)
      setValue('date', activePatient.date)
      setValue('email', activePatient.email)
      setValue('symptoms', activePatient.symptoms)
    }
    
  },[activeId])
  
  const registerPatient = (data: DraftPatient) =>{
    if(activeId){
      updatePatient(data)
      toast.info('Actualizado correctamente',{
        autoClose:3000,
        theme: "colored",
      })
      
    }else{
      addPatient(data)
      toast.success('Agregado correctamente',{
        autoClose:3000,
        theme: "colored",
      })
  }
  reset()
}

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

        <p className="text-lg mt-5 text-center mb-10">
            Añade Pacientes y {''}
            <span className="text-indigo-400 font-bold">Administralos</span>
        </p>

        <form 
            className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            noValidate
            onSubmit={handleSubmit(registerPatient)}
        >
              <div className="mb-5">
                  <label htmlFor="name" className="text-sm uppercase font-bold">
                      Paciente 
                  </label>
                  <input  
                      id="name"
                       className="w-full p-3 rounded-lg border border-gray-100"  
                      type="text" 
                      placeholder="Nombre del Paciente" 
                      {...register('name',{
                        required:'El nombre es obligatorio'
                      })}
                  />
                  {
                    errors.name && (

                      <ErrorMessage>

                  {errors.name?.message}
                  </ErrorMessage>)}
              </div>

              <div className="mb-5">
                <label htmlFor="caretaker" className="text-sm uppercase font-bold">
                    Propietario 
                </label>
                <input  
                    id="caretaker"
                     className="w-full p-3  rounded-lg border border-gray-100"  
                    type="text" 
                    placeholder="Nombre del Propietario" 
                    {...register('caretaker',{
                        required:'Agrega el nombre del propietario'
                      })}
                />
                 {
                    errors.caretaker && (

                      <ErrorMessage>

                  {errors.caretaker?.message}
                  </ErrorMessage>)}
              </div>

            <div className="mb-5">
              <label htmlFor="email" className="text-sm uppercase font-bold">
                  Email 
              </label>
              <input  
                  id="email"
                  className="w-full p-3 rounded-lg border border-gray-100"  
                  type="email" 
                  placeholder="Email de Registro" 
                  {...register("email", {
                    required: "El Email es Obligatorio",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Email No Válido'
                    }
                  })}
                  
              />
               {
                    errors.email && (

                      <ErrorMessage>

                  {errors.email?.message}
                  </ErrorMessage>)}
            </div>

            <div className="mb-5">
                <label htmlFor="date" className="text-sm uppercase font-bold">
                    Fecha Alta 
                </label>
                <input  
                    id="date"
                     className="w-full p-3  border border-gray-100 rounded-lg"  
                    type="date"
                    {...register('date',{
                        required:'Selecciona una fecha'
                      })} 
                />
                 {
                    errors.date && (

                      <ErrorMessage>

                  {errors.date?.message}
                  </ErrorMessage>)}
            </div>
            
            <div className="mb-5">
                <label htmlFor="symptoms" className="text-sm uppercase font-bold">
                Síntomas 
                </label>
                <textarea  
                    id="symptoms"
                    className="w-full p-3  border border-gray-100"  
                    placeholder="Síntomas del paciente" 
                    {...register('symptoms',{
                        required:'debes agregar al menos un síntoma'
                      })}
                ></textarea>
                {
                    errors.symptoms && (

                      <ErrorMessage>

                  {errors.symptoms?.message}
                  </ErrorMessage>)}
            </div>

            <input
                type="submit"
                className=" bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors rounded-lg"
                value='Guardar Paciente'
            />
        </form> 
    </div>
  )
}