import { Box, Flex, Text } from "@chakra-ui/layout";
import { FunctionComponent } from "react";
import Player from "./player";

interface PlayerBarProps {
    
}
 
const PlayerBar: FunctionComponent<PlayerBarProps> = () => {
    return ( 
        <Flex
            sx={{
                height: '100%',
                width: '100%',
                alignItems: 'center',
                color: '#fff',
                padding: '1.3rem',
            }}
        >
            <Box width="30%">
                <Text fontSize="regular" fontWeight="bold">Song Name</Text>
                <Text fontSize="small">Artist Name</Text>
            </Box>
            <Box width="40%">
                <Player/>
            </Box>
            <Box width="30%">
                <Text align="end">
                    volume
                </Text>
            </Box>
            <Box></Box>
            <Box></Box>
        </Flex>
     );
}
 
export default PlayerBar;