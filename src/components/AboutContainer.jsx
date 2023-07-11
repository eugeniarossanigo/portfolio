import ContactLink from './ContactLink';
import Container from './Container';
import { contact as data } from '../data/contact'
import { techs } from '../data/techs'

export default function AboutContainer() {
  const handleMouseOver = (item, e) => {
    const currentTarget = e.currentTarget.children[0]
    if (currentTarget.src) {
      currentTarget.src = item.src
    } else {
      currentTarget.style.color = `#${item.color}`
    }
  }

  const handleMouseOut = (item, e) => {
    const currentTarget = e.currentTarget.children[0]
    if (currentTarget.src) {
      currentTarget.src = item.hover
    } else {
      currentTarget.style.color = '#329d9b'
    }
  }

  return (
    <Container link='about' title='Sobre mí' size='5'>
      <article className='w-[95%] sm:w-[85%] px-10 text-sm'>
        <p>Me desenvuelvo en el ambiente IT desde hace un tiempo y estos últimos años decidí capacitarme en nuevas tecnologías porque me gustan los desafíos. Es mi objetivo seguir creciendo en este rubro para poder desarrollar todo mi potencial, habilidades y aportar mi conocimiento y entusiasmo a nuevos proyectos.</p>
        <nav className='flex justify-start gap-5 pt-5 pb-2'>
          <a className='w-[110px] bg-green hover:bg-[#2A4858] hover:scale-105 text-sm text-white font-bold text-center rounded-md pt-2' href='#'>CV Español</a>
          <a className='w-[110px] bg-[#56C596] hover:bg-[#2A4858] hover:scale-105 text-sm text-white font-bold text-center rounded-md py-2' href='#'>CV Inglés</a>
        </nav>
      </article>
      <article className='w-[95%] sm:w-[85%] px-10 text-sm pb-2'>
        <h3 className='text-base text-green font-extrabold py-2'>Datos de contacto</h3>
        <ul className='flex flex-col gap-2'>
          { data.map((_, index) => <ContactLink key={index} item={_} />) }
        </ul>
      </article>
      <article className='w-[95%] sm:w-[85%] px-10 text-sm'>
        <h3 className='text-base text-green font-extrabold py-2'>Tecnologías</h3>
        <ul className='flex flex-wrap gap-3'>
          { techs.map((_, index) => (
            <li key={index} onMouseOver={e => handleMouseOver(_, e)} onMouseOut={e => handleMouseOut(_, e)} className='hover:scale-105 flex items-center text-xs gap-2 border-strongGray border rounded-md p-[6px]'>
              { _.src ?
                <img src={_.hover} className='w-[1rem] opacity-80' alt="icon" />
                :
                <_.icon className={`w-[1rem] h-[1rem] opacity-80 text-green`} />
              }
              {_.name}
            </li>
          ))
          }
        </ul>
      </article>
    </Container>
  )
}
