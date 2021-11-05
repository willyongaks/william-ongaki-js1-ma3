//Convert the function below to an arrow function:

//function getReminder(a,b) {
  //  return a % b ;
//}


//answer 1:

const  getReminder = (a,b) => (a % b);

 console.log(getReminder(8, 9));





 //question 2

//Make a call to the Rawg API.

//Go to https://rawg.io/apidocs and get an API key which you’ll use as part of the endpoint 
//you’re making an API call to. You can use https://noroff.no for the URL and Noroff Assignment 
//for the description.

//You'll be given an API Key you can add as a "key" parameter in your fetch request.

//Make a call to the following API endpoint replacing INSERTAPIKEYHERE with the key given to you from the Rawg API.
    //https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=INSERTAPIKEYHERE

//Loop through the results and display the following properties in HTML, but only for the first eight results:
  //  name
//rating
//number of tags(not the tag details, just the amount of tags)
//The styling for this assignment is not important but loading indicator should be displayed while the API call is in progress.

//Be sure to handle any potential errors in the code.



//answer 2:


const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=533658c21ecc4fd2bc448f76fdee995a"
const loading = document.querySelector(".loading")
const htmlResults = document.querySelector(".result")

async function rawgApi(){
    try {
        loading.innerHTML= '<p>Loading</p>'

    const response = await fetch(url);
    const results = await response.json();
    console.log(results);

    for( let i = 0; i < 8; i++){
        console.log(results.results[i].name);
        console.log(results.results[i].rating);
        console.log(results.results[i].tags.length);
        htmlResults.innerHTML += '<p>name: ' + results.results[i].name + '</p>'
        htmlResults.innerHTML += '<p>RATING: ' + results.results[i].rating + '</p>'
        htmlResults.innerHTML += '<p>TAGSLENGTH: ' + results.results[i].tags.length + '</p>'
        htmlResults.innerHTML += '<hr></hr>'
        }

    loading.innerHTML = "";
    }
    catch(error) {
        loading.innerHTML = "error"
        console.log("error occured")
    }
    


}
rawgApi()