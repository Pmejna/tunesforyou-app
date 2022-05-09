import { FunctionComponent, useEffect, useRef, useState} from 'react';
import {
    ButtonGroup,
    Box,
    IconButton,
    RangeSlider,
    RangeSliderFilledTrack,
    RangeSliderTrack,
    RangeSliderThumb,
    Center,
    Flex,
    Text
} from '@chakra-ui/react';
import ReactHowler from 'react-howler';

import {
    MdShuffle,
    MdSkipPrevious,
    MdSkipNext,
    MdOutlinePlayCircleFilled,
    MdOutlinePauseCircleFilled,
    MdOutlineRepeat
} from 'react-icons/md';
import {useStoreActions} from 'easy-peasy';

interface PlayerProps { 
    songs: any;
    activeSong: any;
}   
 
const Player: FunctionComponent<PlayerProps> = ({songs, activeSong}) => {
    const [playing, setPlaying] = useState(true);
    const [index, setIndex] = useState(0);
    const [seek, setSeek] = useState(0.0);
    const [repeat, setRepeat] = useState(false);
    const [shuffle, setShuffle] = useState(false);
    const [duration, setDuration] = useState(0.0);

    const setPlayState = (value) => {
        setPlaying(value);
    }

    const onShuffle = () => {
        setShuffle(prevState => !prevState);
    }

    const onRepeat = () => {
        setRepeat(prevState => !prevState);
    }

    return ( 
        <Box>
            <Box>
                {/* <ReactHowler 
                    playing={playing}
                    src={activeSong?.url}
                /> */}
            </Box>
            <Center>
                <ButtonGroup sx={{color: "gray.600"}}>
                    <IconButton 
                        outline="none" 
                        variant="link" 
                        aria-label='shuffle'
                        fontSize="24px"
                        color={shuffle ? "#FFF" : "gray.600"}
                        icon={<MdShuffle/>}
                        onClick={onShuffle}
                    />
                    <IconButton 
                        outline="none" 
                        variant="link" 
                        aria-label='skip'
                        fontSize="24px"
                        icon={<MdSkipPrevious/>}
                    />
                    {
                        playing ? (
                            <IconButton 
                                outline="none" 
                                variant="link" 
                                aria-label='pause'
                                fontSize="40px"
                                color={'#fff'}
                                icon={<MdOutlinePauseCircleFilled/>}
                                onClick={() => setPlayState(false)}
                            />
                            ) 
                            : (
                                <IconButton 
                                    outline="none" 
                                    variant="link" 
                                    aria-label='play'
                                    fontSize="40px"
                                    color={'#fff'}
                                    icon={<MdOutlinePlayCircleFilled/>}
                                    onClick={() => setPlayState(true)}
                                />
                            )
                    }
                    <IconButton 
                        outline="none" 
                        variant="link" 
                        aria-label='next'
                        fontSize="24px"
                        icon={<MdSkipNext/>}
                    />
                    <IconButton 
                        outline="none" 
                        variant="link" 
                        aria-label='repeat'
                        fontSize="24px"
                        color={repeat ? "#FFF" : "gray.600"}
                        icon={<MdOutlineRepeat/>}
                        onClick={onRepeat}
                    />
                </ButtonGroup>
            </Center>
            <Box color="gray.600">
                <Flex justify="center" align="center">
                    <Box width="10%" textAlign="left">
                        <Text fontSize="sm">1:21</Text>
                    </Box>
                    <Box width="80%">
                        <RangeSlider 
                            aria-label={['min', 'max']} 
                            step={0.1}
                            min={0}
                            max={321}
                            id="player-range"
                        >
                            <RangeSliderTrack bg="gray.800">
                                <RangeSliderFilledTrack bg="gray.600"/>
                            </RangeSliderTrack>
                            <RangeSliderThumb 
                                index={0}
                            />
                        </RangeSlider>
                    </Box>
                    <Box width="10%" textAlign="right">
                        <Text fontSize="sm">3:21</Text>
                    </Box>
                </Flex>
            </Box>
        </Box>
     );
}
 
export default Player;