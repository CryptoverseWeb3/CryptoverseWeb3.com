import react, {useEffect, useState} from "react";

// const API_KEY = import.meta.env.GIPHY_API;
const API_KEY = 'HYs2b7LjCBPiwAjwYY0xnxHiOWhJQETP';

const useFetch = ({keyword}) => {
    const [gifUrl, setGifUrl] = useState("");

    const fetchGifs = async () => {
        try {
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword.split(" ").join("")}&limit=1`)

            const {data} = await response.json();
            setGifUrl(data[0]?.images?.downsized_medium?.url)
            setGifUrl('https://media3.giphy.com/media/Hx13ouuEzEff1GbcpJ/giphy.gif?cid=790b76116e9aeb1aa06c0af621e73ac96ef317de52d8fdea&rid=giphy.gif&ct=g')

        } catch (error) {
            setGifUrl('https://media3.giphy.com/media/Hx13ouuEzEff1GbcpJ/giphy.gif?cid=790b76116e9aeb1aa06c0af621e73ac96ef317de52d8fdea&rid=giphy.gif&ct=g');

            // setGifUrl('https://i.pinimg.com/originals/73/d3/a1/73d3a14d212314ab1f7268b71d639c15.gif');
            // setGifUrl('https://media2.giphy.com/media/nIoUgc3KW2BF5rxVj2/giphy.gif?cid=790b7611b75a16b767f18fca0af4f2d1a9f4e43f50fc7987&rid=giphy.gif&ct=g');
            // setGifUrl('https://media3.giphy.com/media/QnU6mOrBbElaIQz4Fe/giphy.gif?cid=790b7611ead856698227aa72d0fa61a1b2963b1393bcc04d&rid=giphy.gif&ct=g');
            // setGifUrl('https://media2.giphy.com/media/MagSgolK3ScWvtHAB4/giphy.gif?cid=790b76113e90cd9aea9108ffab4e245e5c906edcc808513d&rid=giphy.gif&ct=g');
        }
    }

    useEffect(() => {
        if (keyword) fetchGifs();
    }, [keyword])

    return gifUrl;
}
export default useFetch;