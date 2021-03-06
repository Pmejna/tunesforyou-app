import { FunctionComponent } from "react";
import {Box} from '@chakra-ui/layout';
import SideBar from "./sidebar";
import PlayerBar from "./playerBar";

interface PlayerLayoutProps {
    
}
 
const PlayerLayout: FunctionComponent<PlayerLayoutProps> = ({children}) => {
    return ( 
        <Box sx={{width:"100vw", height:"100vh"}}>
            <Box sx={{
                    position: "absolute", 
                    top: 0, 
                    width: "250px", 
                }}
            >
               <SideBar/>
            </Box>
            <Box sx={{
                    margin: "0 0 100px 250px", 
                    width: "calc(100vw - 250px)", 
                    height: "calc(100vh - 100px)", 
                    overflowY: "auto"
                }}
            >
                {children}
            </Box>
            <Box sx={{
                    position: "absolute", 
                    left: 0, 
                    bottom: 0, 
                    width: "100vw", 
                    height: "100px", 
                    backgroundColor: "gray.900"
                }}
            >
                <PlayerBar/>
            </Box>
        </Box>
     );
}
 
export default PlayerLayout;