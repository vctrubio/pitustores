import './css/App.css'
import { NavBar, TopNavBar } from './NavBars'
import { BannerPhoto, BannerDesc } from './Banners'
import { Calculator } from './Calculator'
import { ContactForm } from './ContactForm'
import { Footer } from './Footer'

const Divider = () => {
  return (
    <div style={{height: '40vh', width: '100%', backgroundColor: '#666666'}}>
    </div>
  )
}


function App() {

  return (
    <div style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <TopNavBar />
      <NavBar />
      <BannerPhoto />
      <BannerDesc />
      <Calculator />
      <Divider />
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default App
