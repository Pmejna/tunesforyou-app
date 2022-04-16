import {
    Box, 
    Flex, 
    Input, 
    Button,
    Text
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import NextImage from 'next/image';
import { FunctionComponent, useState } from 'react';
import {useSWRConfig} from 'swr';
import { auth } from '../lib/mutations';
import logo from '../public/images/logo.svg';

interface AuthFormProps {
    mode: 'signin' | 'signup';
}
 
const AuthForm: FunctionComponent<AuthFormProps> = ({mode}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        let password_confirm = mode === 'signup' ? passwordConfirm : null;
        await auth(mode, {email, password, password_confirm});
        // setIsLoading(false);
        router.push('/')
    }

    return (
        <Box sx={{
            height: "100vh",
            width: "100vw",
            bg: "black",
            color: "white"
        }}>
            <Flex justify="center" align="center" height="180px">
                <NextImage src={logo} height="40"/>
            </Flex>
            <Flex justify="center" align="center" height="calc(100vh - 100px)">
                <Box sx={{
                    padding: "50px",
                    backgroundColor: "gray.900",
                    borderRadius: "6px"
                }}>
                    <form onSubmit={handleSubmit}>
                        <Input placeholder='email' type='email' onChange={(e) => setEmail(e.target.value)}/>
                        <Input placeholder='password' type='password' onChange={(e) => setPassword(e.target.value)}/>
                        {
                            mode === 'signup' && (
                            <Input placeholder='password confirmation' type='password' onChange={(e) => setPasswordConfirm(e.target.value)}/>
                            )
                        }
                        <Button 
                            type="submit" 
                            bg="green.600" 
                            isLoading={isLoading}
                            loadingText="loading..."
                            sx={{
                                "&:hover": {
                                    bg: "green.400"
                                }
                            }}
                        >
                            <Text>{mode}</Text>
                        </Button>
                        <Box>
                            {
                                mode === 'signup' && (
                                    <Flex align='center' direction='column'>
                                        <Text>
                                            Already have an account?
                                        </Text>
                                        <Text color='blue.400' sx={{
                                            "&:hover": {
                                                color: "blue.200"
                                            }
                                        }}>
                                            <Link href="/signin">Sign In</Link>
                                        </Text>
                                    </Flex>
                                )
                            }
                        </Box>
                    </form>
                </Box>
            </Flex>
        </Box>
      );
}
 
export default AuthForm;
