import { Box, Text} from "@chakra-ui/layout";
import {Image} from '@chakra-ui/react';
import { FunctionComponent } from "react";

interface CardComponentProps {
    name?: string;
    image?: string;
}
 
const CardComponent: FunctionComponent<CardComponentProps> = ({name, image}) => {
    return ( 
        <Box sx={{
            p: "0.8rem", 
            borderRadius: "0.6rem",
            boxShadow: "lg",
            bg: "gray.800",
        }}>
            <Box sx={{
                width: "160px", 
                height: "160px", 
                marginBottom: "1rem",
                borderRadius: "100%",
                overflow: "hidden",
                objectFit: "cover",
                }}
                boxShadow="xl"
            >
                <Image  height="auto" width="100%" src="https://source.unsplash.com/random?face" />
            </Box>
            <Text>{name}</Text>
        </Box> 
    );
}
 
export default CardComponent;