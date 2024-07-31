import './Hero.css'
import {Image,Button, Box, Flex, Link } from '@chakra-ui/react'
import { FaBehance, FaGithub , FaLinkedinIn  } from 'react-icons/fa';
import imgHero from '../../assets/imgHero.jpg'


const breakpoints = {
    base: '0em', // 0px
    sm: '30em', // ~480px. em is a relative unit and is dependant on the font size.
    md: '48em', // ~768px
    lg: '62em', // ~992px
    xl: '80em', // ~1280px
    '2xl': '96em', // ~1536px
}

function Hero() {
    return (
        < >
            <Box id="inicio" h="70vh" pb="70px" >
                <Flex as='section' pt="50px" flexDir="row" justifyContent="space-evenly">
                        <Flex as='section' flexDir="column">
                            <Box>
                                <Box as='h1' fontSize={{base: '35px', sm:'40px', md: '40px', lg: '45px', xl:'50px', '2xl':'60px'}} fontWeight="bold" pt="10px" pb="10px">Hola,</Box>
                                <Box as='h1' fontSize={{base: '35px', sm:'40px', md: '40px', lg: '45px', xl:'50px', '2xl':'60px'}} fontWeight="bold" pt="10px" pb="10px">Soy <Box as='span' color="rgb(65,112,245)">Juan Manuel Sosa</Box></Box>
                                <Box as='h1' fontSize={{base: '35px', sm:'40px', md: '40px', lg: '45px', xl:'50px', '2xl':'60px'}} fontWeight="bold" pt="10px" pb="10px">Programador web</Box>
                            </Box>
                            <Box>
                                <Link href="#contacto" pt="40px">
                                    <Button color="white" bg="rgb(65,112,245)" fontSize={{base: '11px', sm:'11px', md: '11px', lg: '15px', xl:'15px', '2xl':'20px'}} pt="10px" pb="10px" pr="32px" pl="32px" border="none" borderRadius="10px" boxShadow='0px 0px 10px rgba(0, 0, 0, 0.1)' transition="1s"
                                        _hover={{
                                            cursor:"pointer",
                                            boxShadow: '0px 0px 17px rgba(0, 0, 0, 0.5)',
                                        }}
                                    >Contacto</Button>
                                </Link>
                            </Box>
                            <Box as='section'>
                                <Flex flexWrap="wrap" textAlign="center" my="40px">
                                    <Link href="https://www.linkedin.com/in/juan-manuel-sosa-4a2767309/" target="_blank" pr="30px"  >
                                    <Button leftIcon={<FaLinkedinIn  />} colorScheme="" variant="solid" fontSize="20px" transition='color 1s' color="#0f2434"
                                        _hover={{color:"rgb(65,112,245)",}}></Button>
                                    </Link>
                                    <Link href="https://www.behance.net/juanmanuelsosa2" target="_blank" pr="30px" transition="color 1s" >
                                    <Button leftIcon={<FaBehance />} colorScheme="" variant="solid" fontSize="20px" transition='color 1s' color="#0f2434"
                                        _hover={{color:"rgb(65,112,245)",}}></Button>
                                    </Link>

                                    <Link href="https://github.com/Juanmasosa7" target="_blank" pr="30px" transition="color 1s" >
                                    <Button leftIcon={<FaGithub  />} colorScheme="" variant="solid" fontSize="20px" transition='color 1s' color="#0f2434"
                                        _hover={{color:"rgb(65,112,245)",}}></Button>
                                    </Link>
                                </Flex>    
                            </Box>
                        </Flex>
                    <Image src={imgHero} alt='Foto portada mia' 
                    w={{base: '280px', sm:'280px', md: '330px', lg: '430px', xl:'430px', '2xl':'530px'}} 
                    h={{base: '250px', sm:'250px', md: '300px', lg: '400px', xl:'400px', '2xl':'500px'}} 
                    pr="35px"
                    display={{base: 'none', sm:'none', md: 'block', lg: 'block', xl:'block', '2xl':'block'}}/>
                </Flex>
            </Box>
        </>
    )
}
export default Hero

