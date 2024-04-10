import React,{useEffect} from 'react'
import {
  Box,
  Heading,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
} from '@chakra-ui/react'
import { UnlockIcon } from '@chakra-ui/icons'
import Login from './Login'
import Signup from './Signup'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate=useNavigate();
    useEffect(()=>{
        const userInfo=JSON.parse(localStorage.getItem("userinfo"))

        if(userInfo){
            navigate("/chats")
        }
    },[navigate])
  return (
   <>
    <Box  w='40%' p={4}  m='0 auto' textAlign='center' backgroundColor='white' borderRadius="8px">
        <Heading mb='1rem' d='flex' justifyContent='center'alignItems='center' gap='1rem'>Flutio <UnlockIcon/> </Heading>
         <Tabs>
           <TabList gap='4' display='flex' justifyContent='space-between'>
           <Tab  w='45%' >Sign Up</Tab>
           <Tab  w='45%' >Login</Tab>
       </TabList>
         <TabPanels>
           <TabPanel>
            <Signup/>
           </TabPanel>
           <TabPanel>
           <Login/>
           </TabPanel>
       </TabPanels>
         </Tabs>
    </Box>
   </>
  )
}

export default HomePage
