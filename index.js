// Add your code here



//function that takes two strings as arguments - one representing a user's name, and the other representing a user's email
function submitData(name, email) {
    const configurationObject = {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        },
        body: JSON.stringify({
            "name": name,
            "email": email
        })
    }
    return fetch ("http://localhost:3000/users", configurationObject)
    .then((resp) => resp.json())
    .then((json) => addData(json.id))
    .catch(function (error){
        alert('Unauthorized Access')
        document.getElementsByTagName("body").innerHTML 
        document.body.append(error)
    })
}

function addData(newUser) {
    document.getElementsByTagName("body")[0].innerHTML = newUser
    document.body.append(message)
}

submitData("Name", "name@name.com")


