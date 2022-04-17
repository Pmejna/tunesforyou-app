import { Box } from "@chakra-ui/layout";
import {Table, Thead, Td, Tr, Tbody, Tfoot, Th} from "@chakra-ui/table";
import { FunctionComponent } from "react";
import {BsFillPlayFill} from "react-icons/bs";
import {AiOutlineClockCircle} from "react-icons/ai";
import { IconButton } from "@chakra-ui/react";
import { formatDate, formatTime } from "../lib/formatters";

interface SongsTableProps {
    songs: any[];
}
 
const SongsTable: FunctionComponent<SongsTableProps> = ({songs}) => {
    return ( 
        <Box padding="1.3rem" bg="transparent">
            <Box padding="0.5rem" marginBottom="20px">
                <IconButton
                    aria-label="play" 
                    icon={
                        <BsFillPlayFill fontSize="1.5rem" />
                    }
                    size="lg"
                    colorScheme="green"
                    isRound
                />
            </Box>
            <Table variant="unstyled">
                <Thead borderBottom="1px solid" borderColor="rgba(255, 255, 255, 0.5)">
                    <Tr>
                        <Th>#</Th>
                        <Th>Title</Th>
                        <Th>Date Added</Th>
                        <Th>
                            <AiOutlineClockCircle/>
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        songs.map((song, index) => (
                            <Tr 
                                key={song.id} 
                                sx={{
                                    transition: "all 0.3s ease-in-out",
                                    "&:hover": {
                                        backgroundColor: "rgba(255, 255, 255, 0.1)"
                                    },
                                    cursor: "pointer"
                            }}>
                                <Td>{index}</Td>
                                <Td>{song.title}</Td>
                                <Td>{formatDate(song.createdAt)}</Td>
                                <Td>{formatTime(song.duration)}</Td>
                            </Tr>
                        ))
                    }
                </Tbody>
            </Table>
        </Box>
     );
}
 
export default SongsTable;