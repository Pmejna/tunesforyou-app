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
            <Box>
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
            </Box>
        </Box>
     );
}
 
export default SideBar;