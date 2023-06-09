export default function CardContainer({ children }) {
  return (
    <article className='w-[75%] sm:w-[80%] z-10 border border-[#329d9b73] rounded-2xl flex flex-col p-5 gap-2'>
      { children }
    </article>
  )
}
