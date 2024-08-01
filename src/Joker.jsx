
import { useState , useEffect} from "react";



export default function Joker(){
    let[joke,setJoke] = useState({});
const getNewJoke= async()=>{
  const URL = "https://official-joke-api.appspot.com/random_joke";
   
    let response = await fetch(URL);
    let jsonResponse = await response.json();
    console.log(jsonResponse);
   setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline})
 
    }
    

    useEffect(() => {async function getFirstJoke(){
       const URL = "https://official-joke-api.appspot.com/random_joke";
       let response = await fetch(URL);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
       setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline})
    }
    getFirstJoke();
    },[]);
   


return(
    <div>
    <h1>Joker!</h1>
    <h2>{joke.setup}</h2>
    <h2>{joke.punchline}</h2>
    <button onClick = {getNewJoke}>New Joke</button>
    </div>
)


}