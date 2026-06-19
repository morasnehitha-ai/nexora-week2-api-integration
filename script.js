function getUser(){

    fetch("https://randomuser.me/api/")

    .then(response => response.json())

    .then(data => {

        const user = data.results[0];

        document.getElementById("user-image").src =
        user.picture.large;

        document.getElementById("user-name").innerHTML =
        user.name.first + " " + user.name.last;

        document.getElementById("user-email").innerHTML =
        "Email: " + user.email;

        document.getElementById("user-country").innerHTML =
        "Country: " + user.location.country;

    })

    .catch(error => {

        console.log("Error:", error);

    });

}

getUser();

console.log("Random User API Loaded Successfully");