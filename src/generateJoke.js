import axios from 'axios';


function generateJoke() {
     const config = {
         headers: { Accept: 'application/json' },
     };

     axios.get("https://icanhazdadjoke.com/", config)
         .then(response => {
            document.getElementById("joke").innerHTML = response.data.joke;
             console.log(response.data.joke);
         })
         .catch(error => {
             console.error("Error fetching joke:", error);
         });
}   

export default generateJoke;