import {
    Box, 
    Flex, 
    Input, 
    Button
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import {useSWRConfig} from 'swr';
import { auth } from '../lib/mutations';

interface AuthFormProps {
    mode: 'signin' | 'signup';
}
 
const AuthForm: FunctionComponent<AuthFormProps> = ({mode}) => {
    return (  );
}
 
export default AuthForm;
