import { FunctionComponent } from "react";
import NextImage from 'next/image';
import { 
    Box,
    List,
    ListItem,
    Divider,
    Center,
    ListIcon,
    LinkBox,
    LinkOverlay
 } from "@chakra-ui/layout";

 import NextLink from 'next/link';

 import {
    MdHome,
    MdSearch,
    MdLibraryMusic,
    MdPlaylistAdd,
    MdFavorite
 } from "react-icons/md";

 const navMenuDummyData = [
     {
         name: 'Home',
         icon: MdHome,
         route: '/'
     },
     {
         name: 'Search',
         icon: MdSearch,
         route: '/search'
     },
     {
         name: 'Your Library',
         icon: MdLibraryMusic,
         route: '/library'
     },
     {
         name: 'Home',
         icon: MdHome,
         route: '/'
     },
]

const playlistMenuDummyData = [
     {
         name: 'Create Playlist',
         icon: MdPlaylistAdd,
         route: '/'
     },
     {
         name: 'Favourites',
         icon: MdFavorite,
         route: '/favourites'
     },
]

const playlistDummyData = new Array(30).fill(1).map((_, index) => `playlist ${index + 1}`);

interface SideBarProps {
    
}
 
const SideBar: FunctionComponent<SideBarProps> = () => {
    return ( 
        <Box sx={{
            width: "100%",
            height: "calc(100vh - 100px)",
            bg: "black",
            paddingX: "5px",
            color: "gray.200"
        }}>
            <Box  height="100%">
                <Box sx={{
                    width: "130px",
                    marginBottom: "1.6rem",
                    paddingX: "1.1rem",
                    paddingTop: "1.6rem",
                }}>
                    <NextImage 
                        src="/images/logo.svg" 
                        alt="logo" 
                        height={60}
                        width={180}
                    />
                </Box>
                <Box marginBottom="1.6rem">
                    <List spacing={2}>
                        {
                            navMenuDummyData.map(menuItem => (
                                <ListItem paddingX={"1.1rem"} fontSize="1rem" key={menuItem.name}>
                                    <LinkBox>
                                        <NextLink href={menuItem.route} passHref> 
                                            <LinkOverlay>
                                                <ListIcon as={menuItem.icon} color="white" marginRight="1.2rem"/>
                                                {menuItem.name}
                                            </LinkOverlay>
                                        </NextLink>
                                    </LinkBox>
                                </ListItem>
                            ))
                        }
                    </List>
                </Box>
                <Box marginBottom="1.6rem">
                    <List spacing={2}>
                        {
                            playlistMenuDummyData.map(menuItem => (
                                <ListItem paddingX={"1.1rem"} fontSize="1rem" key={menuItem.name}>
                                    <LinkBox>
                                        <NextLink href={menuItem.route} passHref>
                                            <LinkOverlay>
                                                <ListIcon as={menuItem.icon} color="white" marginRight="1.2rem"/>
                                                {menuItem.name}
                                            </LinkOverlay>
                                        </NextLink>
                                    </LinkBox>
                                </ListItem>
                            ))
                        }
                    </List>
                </Box>
                <Divider marginLeft="1.1rem" width="calc(100% - 2.2rem)" borderColor="gray.700" marginBottom="1.6rem"/>
                <Box 
                    height="64%" 
                    overflowY="auto"
                    paddingY="1.1rem"
                >
                    <List spacing={2}>
                        {
                            playlistDummyData.map((playlist) => (
                                <ListItem paddingX={"1.1rem"} fontSize="1rem" key={playlist}>
                                    <LinkBox>
                                        <NextLink href="/playlist" passHref>
                                            <LinkOverlay>
                                                {playlist}
                                            </LinkOverlay>
                                        </NextLink>
                                    </LinkBox>
                                </ListItem>
                            ))
                        }
                    </List>
                </Box>
            </Box>
        </Box>
     );
}
 
export default SideBar;