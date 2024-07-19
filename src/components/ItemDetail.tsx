type ItemDetailProps = {
    label: string
    data: string
}

export const ItemDetail = ({label, data}:ItemDetailProps) => {
  return (
    <p className="font-bold mb-2 text-gray-700 uppercase text-sm" > {label}:{' '}
    <span className=" font-normal text-sm normal-case">{data}</span>
  </p>
  )
}