const releases = document.getElementById("releases")

fetch("content.json")
    .then(response => response.json())
    .then(data => { 
        for (let release in data["releases"]){
            console.log(data["releases"][release])
        }
    }
)