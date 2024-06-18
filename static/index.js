// create a function to update the date and time
function updateDateTime() {
    // create a new `Date` object
    const now = new Date();

    // get the current date and time as a string
    const currentDateTime = now.toLocaleTimeString('en-US', { timeZone: 'America/New_York' });

    // update the `textContent` property of the `span` element with the `id` of `datetime`
    document.querySelector('#datetime').textContent = currentDateTime;
  }
updateDateTime()
  // call the `updateDateTime` function every second
setInterval(updateDateTime, 1000);

var address = document.getElementById("address")
function changeAddress (){
    var addy = document.getElementById("addy")
    if (addy.innerHTML == "1300 E MAIN ST. STE #105<br>ALHAMBRA, CA 91801"){
        addy.innerHTML = "329 S DIAMOND BAR BLVD<br>DIAMONDBAR, CA 91765"
        document.querySelector(".contact-number").innerHTML = "(909) 860-2704"
    }
    else {
        addy.innerHTML = "1300 E MAIN ST. STE #105<br>ALHAMBRA, CA 91801"
        document.querySelector(".contact-number").innerHTML = "(626)293-7018"
    }
}

function dropDownMenu(){
  var links = document.querySelector("#link-container")
  if (links.style.height == "0px" || (links.style.height).length == 0){
    links.style.height = "135px"
    links.style.border = "1px solid black"
    links.style.borderRadius = "5px"
    links.style.padding = "20px"
  }
  else {
    links.style.height = "0px"
    links.style.border = "none"
    links.style.padding = "0px"
  }
}