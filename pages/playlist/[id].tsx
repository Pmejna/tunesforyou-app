import { Box } from "@chakra-ui/layout";
import { FunctionComponent } from "react";
import GradientLayout from "../../components/gradientLayout";
import { validateToken } from "../../lib/auth";
import prisma from "../../lib/prisma";
import {chakraColor} from "../../ts/types";

const getRandomColor = (id) => {
    const colors: chakraColor[] = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "teal",
        "purple",
        "pink",
        "blackAlpha",
        "gray"
    ];
    const randomColor = colors[id -1] || colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
}

interface PlaylistProps {
    playlist: any;
}
 
const Playlist: FunctionComponent<PlaylistProps> = ({playlist}) => {
    const color = getRandomColor(playlist.id);
    return ( 
        <GradientLayout 
            color={color} 
            roundImage={false} 
            title={playlist.name}
            subtitle="playlist"
            description={`${playlist.songs.length} songs`}
            image={`https://picsum.photos/200/300?random=${playlist.id}`}
        >

        </GradientLayout>
     );
}
 
export const getServerSideProps = async ({query, req}) => {
    const {id} = validateToken(req.cookies.jwt_token_access);
    const [playlist] = await prisma.playlist.findMany({
        where: {
            id: +query.id,
            userId: id
        },
        include: {
            songs: {
                include: {
                    artist: {
                        select: {
                            name: true,
                            id: true
                        }
                    }
                }
            }
        }
    })
    return {
        props: {
            playlist
        }
    }
}
export default Playlist;