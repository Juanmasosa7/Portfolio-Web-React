import './Footer.css'
import {  Button, Flex, Heading, Icon, Link, Text } from '@chakra-ui/react'
import { FaFacebookF , FaWhatsapp , FaInstagram , FaCss3Alt } from 'react-icons/fa';

function Footer() {
    return(
        <Flex as='footer' bg="rgb(15 36 52)" h="40vh" flexDirection="column" alignItems="center" justifyContent="center">
            <Heading fontSize={{base: '27px', sm:'27px', md: '30 px', lg: '30px', xl:'30px', '2xl':'40px'}} color="white" my="20px" textAlign="center" w="100%" bg="rgb(15 36 52)" >Juan Manuel Sosa</Heading>
            <Flex as='section' flexWrap="wrap" textAlign="center" justifyContent="center" bg="rgb(15 36 52)">
                <Link href="https://www.facebook.com/juanma.sosa.790/" target="_blank" py="25px" pl="15px" pr="15px" bg="rgb(15 36 52)">
                    <Button leftIcon={<FaFacebookF />} colorScheme="" variant="solid" color="white" fontSize="20px"></Button>
                </Link>
                <Link href="https://www.instagram.com/juanma.sosac/" target="_blank" py="25px" pl="15px" pr="15px" bg="rgb(15 36 52)"> 
                    <Button leftIcon={<FaInstagram />} colorScheme="" variant="solid" color="white" fontSize="20px"></Button>
                </Link>
                <Link href="" py="25px" pl="15px" pr="15px" bg="rgb(15 36 52)">
                    <Button leftIcon={<FaWhatsapp />} colorScheme="" variant="solid" color="white" fontSize="20px"></Button>
                </Link> 
            </Flex>
            <Text textAlign="center" color="rgb(161, 161, 161)" my="15px" bg="rgb(15 36 52)">&copy; 2024 todos los derechos de autor reservados</Text>
        </Flex>
    )
}

export default Footer
