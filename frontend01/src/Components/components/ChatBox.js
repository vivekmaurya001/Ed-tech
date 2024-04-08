import { Box,Flex,Button,Text,
useMediaQuery,
 Stack} from '@chakra-ui/react'
import { ArrowLeftIcon } from '@chakra-ui/icons'
import React from 'react'
import { ChatState } from "../../Context/ChatProvider";
import UpdateGroupModal from './UpdateGroupModal'
import MessageContainer from './MessageContainer'
import SelctedUserModal from './SelctedUserModal'

const ChatBox = ({ fetchAgain, setFetchAgain ,switchTab,setSwitchTab}) => {
  const {user,selectedChat} = ChatState()
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)');

  const getsender=(Userarray)=>{
    if(user.user._id===Userarray[0]._id){ 
    return Userarray[1]}
   else return  Userarray[0];
  }
    const tabChange=()=>{
     setSwitchTab(!switchTab)
  }
  return (
   <>
   {selectedChat?<Box bg='white'  w={isLargerThan900?'68%':switchTab?'100%':'0%'} borderRadius='10px' p='0.8rem' display={isLargerThan900?'block':switchTab?"block":'none'}>
      <Flex justifyContent='space-between'>
        {isLargerThan900?null:<Button onClick={tabChange}> <ArrowLeftIcon/></Button>}
      <Text fontSize='3xl'>{selectedChat.isGroupChat?selectedChat.chatName:getsender(selectedChat.users).name}</Text>
      {selectedChat.isGroupChat?<UpdateGroupModal fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}/>:<SelctedUserModal/>} 
      </Flex>
      <Stack w='100%' h='92%' borderRadius='1rem' bgColor='#d8d6d6' p='1rem'>
            <MessageContainer  fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}/>
      </Stack>
    </Box>:<Box bg='white'  h='100%' w={isLargerThan900?'68%':switchTab?'100%':'0%'} borderRadius='10px' p='0.8rem' display={isLargerThan900?'flex':switchTab?"flex":'none'}  alignItems='center'  justifyContent='center'>
    <Text fontSize='4xl'>Select a chat to start chatting</Text></Box>}
   </>
  )
}

export default ChatBox
