
let userList = []

function addUser (profile) {
    userList.push(profile)
}
function personInfo (name,apellido,email,contrasena) {
    return vista = {
    firstName: name,
    lastName: apellido,
    emailAddress: email,
    password: contrasena
    }
}

addUser(personInfo(`Andres`,`Melara`,`faketaxi@thehub.com`,`rileyreid`))
addUser(personInfo(`diego`,`santamaria`, `dargen@fake.com`,`password`))
addUser(personInfo(`Alejandro`,`Melara`,`face@account.com`,`melara1234`))
addUser(personInfo(`Diego`,`Martinez`,`teamskeet@thehub.com`,`ineedhelp`))
console.log(userList)

function retrieveUser(userSearch){
    for (let i = 0; i < userList.length; i++){
        if ( userList[i].firstName === userSearch) {
            console.log(userSearch);
        }
    }
}




retrieveUser(`Diego`)
retrieveUser(`Alejandro`)
retrieveUser(`Andres`)

retrieveUser(`Jose`)




