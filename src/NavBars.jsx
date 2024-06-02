import './css/NavBar.css'
import './css/TopNavBar.css'

export const TopNavBar = () => {
  return (
    <div className='top-nav-bar'>
      <div>
        bateria regargable
      </div>
      <div>
        libre de emision
      </div>
      <div>
        envios gratis
      </div>
    </div>
  )
}

export const NavBar = () => {
    return (
      <div className='nav-bar'>
  
        <flex className='navbar-menu'>
          <div>Acerca</div>
          <div>Calculador</div>
          <div>Producto</div>
          <div>Contacto</div>
        </flex>
        <flex className='navbar-lang'>
          <div className="bordered">ES</div>
          <div>EN</div>
        </flex>
      </div>
    )
  }