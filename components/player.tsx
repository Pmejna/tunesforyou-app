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
import { formatTime } from '../lib/formatters';

interface PlayerProps { 
    songs: any;
    activeSong: any;
}   
 
const Player: FunctionComponent<PlayerProps> = ({songs, activeSong}) => {
    const [playing, setPlaying] = useState(true);
    const [index, setIndex] = useState(
        songs.findIndex((song: any) => song.id === activeSong.id)
    );
    const [seek, setSeek] = useState(0.0);
    const [isSeeking, setIsSeeking] = useState(false);
    const [repeat, setRepeat] = useState(false);
    const [shuffle, setShuffle] = useState(false);
    const [duration, setDuration] = useState(0.0);
    const howlerRef = useRef<ReactHowler>(null);
    const repeatRef = useRef(repeat);
    const setActiveSong = useStoreActions((state: any) => state.changeActiveSong);

    useEffect(() => {
        let timerId;
        if (playing && !isSeeking) {
            const f = () => {
                setSeek(howlerRef.current.seek());
                timerId = requestAnimationFrame(f);
            }
        timerId = requestAnimationFrame(f);
        return () => {
            cancelAnimationFrame(timerId);
            }
        }

        cancelAnimationFrame(timerId); 

    }, [playing, isSeeking]);

    useEffect(() => {
        setActiveSong(songs[index]);
        }, [index, setActiveSong, songs]
    );

    useEffect(() => {
        repeatRef.current = repeat;
    }, [repeat])

    const setPlayState = (value) => {
        setPlaying(value);
    }

    const onShuffle = () => {
        setShuffle(prevState => !prevState);
    }

    const onRepeat = () => {
        setRepeat(prevState => !prevState);
    }

    const prevSong = () => {
        setIndex(
            prevState => {
                return  prevState ? prevState -1 : songs.length - 1;
            }
        );
    }

    
    const nextSong = () => {
        setIndex(
            prevState => {
                if (shuffle) {
                    let next = Math.floor(Math.random() * songs.length);
                    while (next === prevState) {
                        next = Math.floor(Math.random() * songs.length);
                    }
                    return next;
                } else {
                    return prevState === songs.length - 1 ? 0 : prevState + 1;
                }
            }
        )
    }

    const onEnd = () => {
        if (repeatRef.current) {
            setSeek(0.0);
            howlerRef.current.seek(0);    
        } else {
            nextSong();
        }
    }

    const onLoad = () => {
        const songDuration = howlerRef.current.duration();
        setDuration(songDuration);
    }   

    const onSeek = (e) => {
        setSeek(parseFloat(e[0]));
        howlerRef.current.seek(e[0]);
    }
        
    return ( 
        <Box>
            <Box>
                <ReactHowler
                    ref={howlerRef}
                    playing={playing}
                    src={activeSong?.url}
                    onLoad={onLoad}
                    onEnd={onEnd}
                />
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
                        aria-label='previous'
                        fontSize="24px"
                        icon={<MdSkipPrevious/>}
                        onClick={prevSong}
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
                        onClick={nextSong}
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
                        <Text fontSize="sm">{formatTime(seek)}</Text>
                    </Box>
                    <Box width="80%">
                        <RangeSlider 
                            aria-label={['min', 'max']} 
                            step={0.1}
                            min={0}
                            id="player-range"
                            max={duration ? +duration.toFixed(2) : 0}
                            onChange={onSeek}
                            onChangeStart={() => setIsSeeking(true)}
                            onChangeEnd={() => setIsSeeking(false)}
                            value={[seek]}
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
                        <Text fontSize="sm">{formatTime(duration)}</Text>
                    </Box>
                </Flex>
            </Box>
        </Box>
     );
}
 
export default Player;