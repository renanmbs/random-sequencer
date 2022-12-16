//Variables
let form = document.getElementById("form"); //Form submit button
let clean = document.getElementById("clean"); //Submit button
let names_split; //Array to hold names
let shuffled_array; //Array to hold shuffled names

//Prevent refreshing the page to show values
form.onsubmit = function(e) {

    //Don't refresh the page
    e.preventDefault();

    document.getElementById("result").style.display = "block"; //Show result area

    shuffled_array = shuffle(names_split); //Shuffle the names

    print_result(shuffled_array); //Print the results

};

//Function to shuffle the names
function shuffle(array){

    let currentIndex = array.length, randomIndex;
  
    //While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      //Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      //And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}
  

//Function to get the people's names
function get_names(){

    let names = document.getElementById("names").value; //Get names from form

    names_split = names.split(","); //Split into arrays based on comma separation

}


//Function to print the results
function print_result(shuffled_array){

    //Get ordered list from HTML
    let ol = document.getElementById("result_ol");

    //Iterate through the results of the shuffled array
    shuffled_array.forEach(function(name){

    //Create li
    let li = document.createElement('li');

    //Append name to li
    li.appendChild(document.createTextNode(name));

    //Append li to ol
    ol.appendChild(li);

  });

}

//Function to clean the results
function new_one(){

    //Get ordered list from HTML
    let ol = document.getElementById("result_ol");

    //Remove result display
    document.getElementById("result").style.display = "none";

    //Clean area
    ol.innerHTML = "";
       
}

//Add event listener on submission
form.addEventListener("click",get_names); //Call get name function on form submission
clean.addEventListener("click",new_one);
