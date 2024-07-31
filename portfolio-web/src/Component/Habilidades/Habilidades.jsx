import './Habilidades.css'
import {Image,Stack,Progress, Box, Text, Heading, Flex, Grid, IconButton} from '@chakra-ui/react'
import { FaCss3Alt , FaPython , FaHtml5 , FaJs } from 'react-icons/fa';

import imgDos from '../../assets/img2.jpg'

function Habilidades() {
    return (
        <>
            <Box id="habilidades" w="100%" py="40px" > 
                <Heading 
                fontSize={{base: '27px', sm:'27px', md: '30 px', lg: '30px', xl:'30px', '2xl':'40px'}} 
                color="rgb(65,112,245)" 
                textDecoration="underline rgb(65,112,245)" 
                textAlign="center" >
                    Habilidades
                </Heading>

                <Flex as='section' 
                flexDirection={{base:'column',sm:'column', md:'column', lg:'row',xl:'row','2xl':'row'}} 
                justifyContent="center" 
                alignItems="center" 
                py="50px" 
                pl="0" 
                pr="0">
                    <Flex as='section' 
                    flexDirection="column" 
                    w={{base: '90%', sm:'90%', md: '90%', lg: '40%', xl:'40%', '2xl':'40%'}} 
                    pr={{base: '0', sm:'0', md: '0', lg: '40px', xl:'40px', '2xl':'40px'}} 
                    textAlign={{base: 'center', sm:'center', md: 'center', lg: 'initial', xl:'initial', '2xl':'initial'}}>
                        <Box as='h3' 
                        fontWeight="bold" 
                        mb="15px" 
                        textAlign={{base: 'center', sm:'center', md: 'center', lg: 'initial', xl:'initial', '2xl':'initial'}} 
                        fontSize={{base:'17px', sm:'17px', md: '20px', lg: '20px', xl:'20px', '2xl':'30px'}}>
                            Habilidades Profesionales
                        </Box>
                        <Text 
                        mb="30px" 
                        textAlign={{base: 'center', sm:'center', md: 'center', lg: 'initial', xl:'initial', '2xl':'initial'}} 
                        fontSize={{base: 'sm', sm:'sm', md: 'md', lg: 'md', xl:'lg', '2xl':'lg'}}>
                            Como estudiante apasionado por el desarrollo web, he adquirido una sólida base en varias tecnologías clave. Mis habilidades incluyen:
                        </Text>
                        <Grid w="100%" gridColumnGap="50px" gridRowGap="25px">
                            <Box boxShadow="0px 0px 16px 0px rgb(209 209 209)">
                                <Flex justifyContent="space-between" pr="15px" pl="15px" alignItems="center"> 
                                    <Flex> 
                                        <IconButton leftIcon={< FaHtml5/>}  colorScheme="" variant="solid" color="rgb(65,112,245)" fontSize="25px"></IconButton>
                                        <Text 
                                        fontWeight="bold" 
                                        textAlign="center"
                                        alignSelf="center"
                                        alignItems="center" 
                                        fontSize={{base: 'sm', sm:'sm', md: 'md', lg: 'md', xl:'lg', '2xl':'lg'}}>
                                            HTML5
                                        </Text>
                                    </Flex>
                                    <Text 
                                    fontWeight="bold" 
                                    textAlign="center"
                                    alignSelf="center"
                                    alignItems="center" 
                                    fontSize={{base: 'sm', sm:'sm', md: 'md', lg: 'md', xl:'lg', '2xl':'lg'}}>
                                        85%
                                    </Text>
                                </Flex>
                                <Stack spacing={5} width="100%" height="5px" mt="5px">
                                    <Progress color="rgb(65,112,245)" size='sm' value={85} />
                                </Stack>
                            </Box>
                            <Box boxShadow="0px 0px 16px 0px rgb(209 209 209)">
                                <Flex justifyContent="space-between" pr="15px" pl="15px">
                                    <Flex>
                                        <IconButton leftIcon={<FaCss3Alt />} colorScheme="" variant="solid" color="rgb(65,112,245)" fontSize="25px"></IconButton>
                                        <Text 
                                        fontWeight="bold" 
                                        textAlign="center"
                                        alignSelf="center"
                                        alignItems="center" 
                                        fontSize={{base: 'sm', sm:'sm', md: 'md', lg: 'md', xl:'lg', '2xl':'lg'}}>
                                            CSS3
                                        </Text>
                                    </Flex>
                                    <Text 
                                    fontWeight="bold"  
                                    textAlign="center"
                                    alignSelf="center" 
                                    alignItems="center" 
                                    fontSize={{base: 'sm', sm:'sm', md: 'md', lg: 'md', xl:'lg', '2xl':'lg'}}>
                                        75%
                                    </Text>
                                </Flex>
                                <Stack spacing={5} width="100%" height="5px" mt="5px">
                                    <Progress color="rgb(65,112,245)" size='sm' value={75} />
                                </Stack>
                            </Box>
                            <Box boxShadow="0px 0px 16px 0px rgb(209 209 209)">
                                <Flex justifyContent="space-between" pr="15px" pl="15px">
                                    <Flex>
                                        <IconButton leftIcon={< FaJs />}  colorScheme="" variant="solid" color="rgb(65,112,245)" fontSize="25px"></IconButton>
                                        <Text 
                                        fontWeight="bold"
                                        textAlign="center"
                                        alignSelf="center" 
                                        alignItems="center" 
                                        fontSize={{base: 'sm', sm:'sm', md: 'md', lg: 'md', xl:'lg', '2xl':'lg'}}>
                                            JAVASCRIPT
                                        </Text>
                                    </Flex>
                                    <Text 
                                    fontWeight="bold" 
                                    textAlign="center"
                                    alignSelf="center" 
                                    alignItems="center" 
                                    fontSize={{base: 'sm', sm:'sm', md: 'md', lg: 'md', xl:'lg', '2xl':'lg'}}>
                                        50%
                                    </Text>
                                </Flex>
                                <Stack spacing={5} width="100%" height="5px" mt="5px">
                                    <Progress color="rgb(65,112,245)" size='sm' value={50} />
                                </Stack>
                            </Box>
                            <Box boxShadow="0px 0px 16px 0px rgb(209 209 209)">
                                <Flex justifyContent="space-between" pr="15px" pl="15px">
                                    <Flex>
                                        <IconButton leftIcon={<FaPython />}  colorScheme="" variant="solid" color="rgb(65,112,245)" fontSize="25px"></IconButton>
                                        <Text 
                                        fontWeight="bold" 
                                        textAlign="center"
                                        alignSelf="center" 
                                        alignItems="center" 
                                        fontSize={{base: 'sm', sm:'sm', md: 'md', lg: 'md', xl:'lg', '2xl':'lg'}}>
                                            PYTHON
                                        </Text>
                                    </Flex>
                                    <Text 
                                    fontWeight="bold" 
                                    textAlign="center"
                                    alignSelf="center" 
                                    alignItems="center" 
                                    fontSize={{base: 'sm', sm:'sm', md: 'md', lg: 'md', xl:'lg', '2xl':'lg'}}>
                                        80%
                                    </Text>
                                </Flex>
                                <Stack spacing={5} width="100%" height="5px" mt="5px">
                                    <Progress color="rgb(65,112,245)" size='sm' value={80} />
                                </Stack>
                            </Box>
                        </Grid>
                    </Flex>
                    <Box as='section'>
                        <Image src={imgDos} alt='una computadora' 
                        width={{base: '0', sm:'0', md: '0', lg: '450px', xl:'475px', '2xl':'500px'}} 
                        borderRadius="7px" 
                        pr="50px" 
                        pl="10px" 
                        display={{base: 'none', sm:'none', md: 'none', lg: 'block', xl:'block', '2xl':'block'}}/>
                    </Box>  
                </Flex>
            </Box>
        </>
    )
}
export default Habilidades
