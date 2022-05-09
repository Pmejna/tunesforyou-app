import { Box, Flex, Text } from "@chakra-ui/layout";
import { FunctionComponent } from "react";
import {useStoreState} from "easy-peasy";
import Player from "./player";

interface PlayerBarProps {
    
}
 
const PlayerBar: FunctionComponent<PlayerBarProps> = () => {
    const songs = useStoreState((state: any) => state.activeSongs)
    const activeSong = useStoreState((state: any) => state.activeSong)
    console.log(activeSong, songs)

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
            {
                activeSong ? (
                    <Box width="30%">
                        <Text fontSize="regular" fontWeight="bold">{activeSong?.title}</Text>
                        <Text fontSize="small">{activeSong?.artist.name}</Text>
                    </Box>
                ) : null
            }
            <Box width="40%">
                {
                    activeSong ? (
                        <Player songs={songs} activeSong={activeSong} />
                    ) : null
                }
            </Box>
            <Box width="30%">
                {
                    activeSong ? (
                        <Text align="end">
                            volume
                        </Text>
                    ) : null
                }
            </Box>
            <Box></Box>
            <Box></Box>
        </Flex>
     );
}
 
export default PlayerBar;