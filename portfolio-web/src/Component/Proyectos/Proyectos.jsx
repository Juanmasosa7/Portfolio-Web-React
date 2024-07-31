import './Proyectos.css'
import { Image, Box, Heading, Flex, Link } from '@chakra-ui/react'

import imgTres from '../../assets/img3.jpg'
import imgCuatro from '../../assets/img4.jpg'
import imgCinco from '../../assets/img5.jpg'
import imgSeis from '../../assets/img6.jpg'
import imgProyReal from '../../assets/proyectoReal.jpg'
import imgSiete from '../../assets/img7.jpg'


function Proyectos() {
    return (
        < >
            <Box as='section' id="proyectos" w="100%" py="40px">
                <Box as='section'>
                    <Heading fontSize={{base: '27px', sm:'27px', md: '30 px', lg: '30px', xl:'30px', '2xl':'40px'}} color="rgb(65,112,245)" textDecoration="underline rgb(65,112,245)" textAlign="center">Proyectos</Heading>
                </Box>
                <Flex as='section' flexWrap="wrap" justifyContent="space-evenly" pt="20px" pr="150px" pb="60px" pl="150px">
                    <Box m="10px" textAlign="center" flexBasis={{base: '80%', sm:'100%', md: '50%', lg: '30%', xl:'30%', '2xl':'30%'}} boxShadow="-2px 1px 16px 0px rgb(209 209 209)" borderRadius="10px" transition="transform 0.7s" 
                        _hover={{
                            cursor:"pointer",
                            transform:"scale(1.05)",
                        }}>
                        <Link href="">
                            <Image src={imgTres} alt='Proyecto 1' width="100%" borderRadius="10px" />
                        </Link>
                    </Box>
                    <Box m="10px" textAlign="center" flexBasis={{base: '70%', sm:'100%', md: '50%', lg: '30%', xl:'30%', '2xl':'30%'}} boxShadow="-2px 1px 16px 0px rgb(209 209 209)" borderRadius="10px" transition="transform 0.7s" 
                        _hover={{
                            cursor:"pointer",
                            transform:"scale(1.05)",
                        }}>
                        <Link href="">
                            <Image src={imgCuatro} alt='Proyecto 2' width="100%" borderRadius="10px" />
                        </Link>
                    </Box>
                    <Box m="10px" textAlign="center" flexBasis={{base: '70%', sm:'100%', md: '50%', lg: '30%', xl:'30%', '2xl':'30%'}} boxShadow="-2px 1px 16px 0px rgb(209 209 209)" borderRadius="10px" transition="transform 0.7s" 
                        _hover={{
                            cursor:"pointer",
                            transform:"scale(1.05)",
                        }}>
                        <Link href="">
                            <Image src={imgCinco} alt='Proyecto 3' width="100%" borderRadius="10px" />
                        </Link>
                    </Box>
                    <Box m="10px" textAlign="center" flexBasis={{base: '70%', sm:'100%', md: '50%', lg: '30%', xl:'30%', '2xl':'30%'}} boxShadow="-2px 1px 16px 0px rgb(209 209 209)" borderRadius="10px" transition="transform 0.7s" 
                        _hover={{
                            cursor:"pointer",
                            transform:"scale(1.05)",
                        }}>
                        <Link href="">
                            <Image src={imgSeis} alt='Proyecto 4' width="100%" borderRadius="10px" />
                        </Link>
                    </Box>
                    <Box m="10px" textAlign="center" flexBasis={{base: '70%', sm:'100%', md: '50%', lg: '30%', xl:'30%', '2xl':'30%'}} boxShadow="-2px 1px 16px 0px rgb(209 209 209)" borderRadius="10px" transition="transform 0.7s" 
                        _hover={{
                            cursor:"pointer",
                            transform:"scale(1.05)",
                        }}>
                        <Link href="https://juanmasosa7.github.io/ProyectoFinal-SosaJuan/" target="_blank">
                            <Image src={imgProyReal} alt='Pagina Web Melaquitas' width="100%" borderRadius="10px" />
                        </Link>
                    </Box>
                    <Box m="10px" textAlign="center" flexBasis={{base: '100%', sm:'100%', md: '50%', lg: '30%', xl:'30%', '2xl':'30%'}} boxShadow="-2px 1px 16px 0px rgb(209 209 209)" borderRadius="10px" transition="transform 0.7s" 
                        _hover={{
                            cursor:"pointer",
                            transform:"scale(1.05)",
                        }}>
                        <Link href="">
                            <Image src={imgSiete} alt='Proyecto 5' width="100%" borderRadius="10px" />
                        </Link>
                    </Box>
                </Flex>
            </Box>
        </>
    )
  }
export default Proyectos