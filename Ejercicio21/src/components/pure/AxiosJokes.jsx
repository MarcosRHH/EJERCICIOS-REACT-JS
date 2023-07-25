import React, {useState, useEffect} from 'react';
import { getRandomJoke } from '../../services/axiosService';

// Material UI components
import Button from '@mui/material/Button';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const AxiosJokes = () => {

    const [joke, setJoke] = useState(null);

    // Number of Likes 
    const [likes, setLike] = useState(0);
    // Number of Dislikes
    const [dislikes, setDislike] = useState(0);

    const [activeButton, setActiveButton] = useState('ninguno');

    // This useEffect function is executed when the component is mounted into DOM
    useEffect(() => {
        getJoke();   
    }, []);

    const getJoke = () => {

        getRandomJoke()
            .then((response) => {
                if(response.status === 200){
                    setJoke(response.data)
                    setActiveButton('ninguno')
                }
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`);
            })
    }

    const numberLikes = () => {
        if(activeButton === 'ninguno') {
            setLike(likes+1)
            setActiveButton('like')
        }
        if(activeButton === 'like'){
            setLike(likes-1)
            setActiveButton('ninguno')
        }
    }

    const numberDislikes = () => {
        if(activeButton === 'ninguno') {
            setDislike(dislikes+1)
            setActiveButton('dislike')
        }if(activeButton === 'dislike'){
            setDislike(dislikes-1)
            setActiveButton('ninguno')
        }
    }

    return (
        <div style={{padding: '5px'}}>
            <h1>An Axios exercise with the API of Chuck Norris's jokes</h1>

            { joke !== null ? 
                (
                    <div style={{backgroundColor: '#CAA14F', padding: '3px', border: '2px solid black', borderRadius: '10px'}}>
                        <h2>{joke.value}</h2>
                    </div>
                )
            :null }
            <div style={{padding: '5px'}}>
                <Button variant="contained" onClick={getJoke}>
                Random Joke
                </Button>
                <Button
                variant="outlined"
                onClick={numberLikes}
                style={{ color: activeButton === 'like' ? 'blue' : 'black' }}
                >
                <ThumbUpIcon />
                </Button>
                <Button
                variant="outlined"
                onClick={numberDislikes}
                style={{ color: activeButton === 'dislike' ? 'red' : 'black' }}
                >
                <ThumbDownIcon />
                </Button>
            </div>
            <div>
                <p>{dislikes} Jokes that you haven't liked</p>
                <p>{likes} Jokes that you have liked</p>
            </div>
        </div>
    );
}

export default AxiosJokes;
