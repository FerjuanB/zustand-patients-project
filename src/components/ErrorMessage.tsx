export const ErrorMessage = ({children}: {children:React.ReactNode}) => {
  return (
    <p
    className=" text-center text-sm  bg-red-400 text-slate-50 font-bold p-1 mt-1 uppercase w-full rounded-md"
    >{children}</p>
  )
}