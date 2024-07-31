import './Header.css'
import { Box, Text ,Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Link} from '@chakra-ui/react'
import { HamburgerIcon, ChatIcon } from '@chakra-ui/icons';
import { FaChevronRight, FaFolder, FaGraduationCap , FaUser  } from "react-icons/fa";


const breakpoints = {
    base: '20em', // 0px
    sm: '30em', // ~480px. em is a relative unit and is dependant on the font size.
    md: '48em', // ~768px
    lg: '64em', // ~1024px
    xl: '80em', // ~1280px
    '2xl': '96em', // ~1536px
}


function Header() {
    return (
        <Box as='header'>
            <Flex 
                p={{base: '25px', sm:'25px', md: '25px', lg: '25px', xl:'25px', '2xl':'40px'}}
                alignItems="center" 
                justifyContent={{ base: 'space-between', sm:'space-between', md: 'space-evenly', lg: 'space-evenly', xl:'space-evenly'}} 
                borderBottom="1px solid rgb(211, 211, 211)" 
                fontWeight="bold" 
                bg="white">
                <Text 
                pr={{base:'2rem', sm:'2rem', md: '2rem', lg: '15rem', xl:'20rem', '2xl':'1rem' }} 
                fontSize={{base: '15px', sm:'15px', md: '15px', lg: '15px', xl:'15px', '2xl':'20px'}}
                >Juan Manuel Sosa</Text>
                <Box>
                    <Box as='nav' display={{ base: 'none', sm:'none', md: 'block', lg: 'block', xl:'block' }} fontSize={{base: '15px', sm:'15px', md: '15px', lg: '15px', xl:'15px', '2xl':'20px'}}> 
                        <Link href="#inicio" 
                        m="7px" pl="15px" 
                        color="rgb(15 36 52)" 
                        textDecor="underline 2px rgb(65,112,245)"
                        >Inicio</Link>

                        <Link href="#about" m="7px" pl="15px" color="rgb(15 36 52)" textDecoration="none"
                        _hover={{
                            textDecor:"underline 2px rgb(65,112,245)",
                        }}
                        >Sobre mi</Link>

                        <Link href="#habilidades" m="7px" pl="15px" color="rgb(15 36 52)" textDecoration="none"
                        _hover={{
                            textDecor:"underline 2px rgb(65,112,245)",
                        }}
                        >Habilidades</Link>

                        <Link href="#proyectos" m="7px" pl="15px" color="rgb(15 36 52)" textDecoration="none"
                        _hover={{
                            textDecor:"underline 2px rgb(65,112,245)",
                        }}
                        >Proyectos</Link>

                        <Link href="#contacto" m="7px" pl="15px" color="rgb(15 36 52)" textDecoration="none"
                        _hover={{
                            textDecor:"underline 2px rgb(65,112,245)",
                        }}
                        >Contacto</Link>

                    </Box>
                </Box>
                {/* <i class="fa-solid fa-bars icono-navbar icono-navbar"></i> */}
                <Box display={{ base: 'block', sm:'block', md: 'none', lg: 'none', xl:'none' }} color="#0f2434" fontSize="20px">
                    <Menu>
                        <MenuButton 
                            color="black"
                            as={IconButton}
                            aria-label='Options'
                            icon={<HamburgerIcon />}
                            variant='outline'
                        />
                        <MenuList bg="white"> 
                            <Link href="#inicio">
                            <MenuItem icon={<FaChevronRight />} bg="white" 
                            _hover={{
                                textDecoration: "3px underline rgb(65,112,245)",
                            }}>
                            Inicio
                            </MenuItem>
                            </Link>
                            
                            <Link href="#about">
                            <MenuItem icon={<FaUser />} bg="white" 
                                _hover={{
                                textDecoration: "3px underline rgb(65,112,245)",
                            }}>
                            Sobre mi
                            </MenuItem>
                            </Link>
                            
                            <Link href="#habilidades">
                            <MenuItem icon={<FaGraduationCap  />} bg="white" 
                                _hover={{
                                textDecoration: "3px underline rgb(65,112,245)",
                            }}>
                            Habilidades
                            </MenuItem>
                            </Link>
                            
                            <Link href="#proyectos">
                            <MenuItem icon={<FaFolder  />} bg="white" 
                                _hover={{
                                textDecoration: "3px underline rgb(65,112,245)",
                            }}>
                            Proyectos
                            </MenuItem>
                            </Link>
                            
                            <Link href="#contacto">
                            <MenuItem icon={<ChatIcon />} bg="white" 
                                _hover={{
                                textDecoration: "3px underline rgb(65,112,245)",
                            }}>
                            Contacto
                            </MenuItem>
                            </Link>
                    
                        </MenuList>
                    </Menu>
                </Box>
            </Flex>
        </Box>
        
    )
  }
export default Header
