import './Contacto.css'
import { Box, Button, Input , FormControl , Heading, Link} from '@chakra-ui/react'

function Contacto() {
    return (
        <>
            <Box maxW="md" mx="auto" p={6} borderWidth={1} borderRadius="lg" id="contacto" w="100%" py="40px">
                <Heading color="rgb(65,112,245)" textDecoration="underline rgb(65,112,245)" textAlign="center" pb="40px">Contacto</Heading>
                <form action="">
                    <FormControl id="name" isRequired mb={4}>
                        <Input
                            type="text"
                            placeholder="Nombre"
                            _placeholder={{color:"black"}}
                            maxLength="30"
                            minLength="5"
                            required
                            p="7px"
                            pr="40px"
                            pb="7px"
                            pl="40px"
                            m="7px"
                            border="1px solid"
                            borderColor="gray"
                            borderRadius="7px"
                            bg="white"
                            _hover={{
                                border:"1px solid"

                            }}
                        />
                    </FormControl>

                    <FormControl id="email" isRequired mb={4}>
                        <Input
                            type="email"
                            placeholder="Email"
                            _placeholder={{color:"black"}}
                            pt="7px"
                            pr="40px"
                            pb="7px"
                            pl="40px"
                            m="7px"
                            border="1px solid"
                            borderColor="gray"
                            borderRadius="7px"
                            bg="white"
                            _hover={{
                                border:"1px solid"
                            }}
                        />
                    </FormControl>

                    <FormControl id="text" isRequired mb={4}>
                        <Input
                            maxLength="60"
                            minLength="5"
                            required
                            pt="60px"
                            pr="40px"
                            pb="80px"
                            pl="40px"
                            m="7px"
                            border="1px solid"
                            borderColor="gray"
                            borderRadius="7px"
                            textAlign="justify"
                            size="lg"
                            bg="white"
                            _hover={{
                                border:"1px solid",
                                outline:"none",
                            }}
                        />
                    </FormControl>
                    
                        <Button 
                        mt="10px" 
                        ml="18.5rem" 
                        color="white" 
                        bg="rgb(65,112,245)" 
                        fontSize="15px" 
                        pt="10px" 
                        pb="10px" 
                        pr="32px" 
                        pl="32px" 
                        border="none" 
                        borderRadius="10px" 
                        boxShadow='0px 0px 10px rgba(0, 0, 0, 0.1)' transition="1s"
                            _hover={{
                                cursor:"pointer",
                                boxShadow: '0px 0px 17px rgba(0, 0, 0, 0.5)',
                            }}
                        >
                        Enviar
                        </Button>
                    
                    
                </form>
            </Box>
        </>
    )
  }
export default Contacto