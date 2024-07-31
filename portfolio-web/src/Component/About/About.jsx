import './About.css'
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import imgAbout from '../../assets/imgAbout.jpg'

function About() {

    return (
        < >
            <Box as='section' id="about" mt={{base: '20px', sm:'20px', md: '20px', lg: '20px', xl:'50px', '2xl':'50px'}} w="100%" py="10px">
                <Heading fontSize={{base: '27px', sm:'27px', md: '30 px', lg: '30px', xl:'30px', '2xl':'40px'}} color="rgb(65,112,245)" textDecoration="underline rgb(65,112,245)" textAlign="center">Sobre mi</Heading>
                <Flex as='section' 
                flexDir={{base: 'column', sm:'column', md: 'row', lg: 'row', xl:'row', '2xl':'row'}} 
                justifyContent={{base: 'center', sm:'center', md: 'space-evenly', lg: 'space-evenly', xl:'space-evenly', '2xl':'space-evenly'}} 
                pt="40px" 
                pb="80px"
                alignItems="center">
                    <Box pb="10px">
                        <Image src={imgAbout} alt='Imagen sobre mi' width={{base: '200px', sm:'200px', md: '300px', lg: '300px', xl:'300px', '2xl':'400px'}} borderRadius="8px" />
                    </Box>
                    <Flex flexDirection="column" justifyContent="center" width={{base:'85%', sm:'85%', md: '40%', lg: '40%', xl:'40%', '2xl':'40%'}}>
                        <Box as='h3' py="10px"  fontWeight="bold" textAlign={{base:'center', sm:'center', md: 'initial', lg: 'initial', xl:'initial', '2xl':'initial'}} fontSize={{base:'17px', sm:'17px', md: '20px', lg: '20px', xl:'20px', '2xl':'30px'}}
                        >Yo soy Juan Manuel Sosa</Box>
                        <Text textAlign="justify" fontSize={{base: 'sm', sm:'sm', md: 'md', lg: 'md', xl:'lg', '2xl':'lg'}}>Hola, soy Juan Manuel , un estudiante de la Universidad Tecnologica Nacional de Mendoza, Argentina.
                        <br />
                        Soy una persona apasionada por el desarrollo web y con grandes aspiraciones de dedicarme profesionalmente a la programación. Desde que descubrí mi amor por la tecnología y el diseño, he estado enfocado en aprender y mejorar mis habilidades en HTML, CSS y JavaScript, y estoy comprometido a estar al día con las últimas tendencias y tecnologías.
                        <br />
                        A futuro, mi objetivo es convertirme en un desarrollador full-stack, capaz de manejar tanto el front-end como el back-end de aplicaciones web complejas. Me encanta seguir aprendiendo ya que con mis grandes ideas puedo hacer los mejores proyectos.
                        </Text>
                    </Flex>    
                </Flex>
            </Box>    
        </>
    )
}
export default About
