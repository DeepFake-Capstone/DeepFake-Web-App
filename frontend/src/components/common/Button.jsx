export function Button({label,onClick}){
  return(
      <>
          <button onClick={onClick} type="button" className="px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md mt-8 z-20 m-5">
          {label}
          </button>
      </>
  )
}