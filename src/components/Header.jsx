import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <header>
        <img src="/images/logo2.png" alt="Logo" className='logo' />
        <Link className='nav' to ="/">Inicio</Link>
        <Link className='nav' to ="/salas">Salas</Link>
        <Link className='nav' to ="/nosostros">Nosotros</Link>
        <Link className='nav' to ="/login">Iniciar sesión</Link>
        <Link className='nav' to ="/registro">Reserva</Link>
      
    </header>
  )
}

export default Header