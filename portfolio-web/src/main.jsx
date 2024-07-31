import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {ChakraProvider} from '@chakra-ui/react'
import './index.css'
import theme from './theme'

import Footer from './Component/Footer/Footer.jsx'
import Header from './Component/Header/Header.jsx'
import Hero from './Component/Hero/Hero.jsx'
import About from './Component/About/About.jsx'
import Habilidades from './Component/Habilidades/Habilidades.jsx'
import Proyectos from './Component/Proyectos/Proyectos.jsx'
import Contacto from './Component/Contacto/Contacto.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <Header/>
    <Hero/>
    <About/>
    <Habilidades/>
    <Proyectos/>
    <Contacto/>
    <Footer/>
    </ChakraProvider>
  </React.StrictMode>,
)
