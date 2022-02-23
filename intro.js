const db = require('./models')

// CREATE --IMPORT DB --single user query
// db.user.create({
// firstName: 'Weston',
// lastName: 'Bailey',
// age: 34,
// email:'weston.bailey@generalassemb.ly',
// birthday: new Date()
// })
// // it is a promise so -- in paranthese could be anytrhing named
// .then(createdUser => {
//     console.log(createdUser)
// })
// .catch(console.log)

async function userCrud() {
    try {
        // CREATE
        // const createdUser = await db.user.create({
        //     firstName: 'Jason',
        //     lastName: 'Serafica',
        //     age: 26,
        //     email:'jason.serafica@generalassemb.ly',
        //     birthday: new Date()
        //     })

        //     console.log(createdUser.firstName, createdUser.lastName)

        //  fancy find or create sequelzie function --returns instance regardless what it does --when you chec this boolean
        const arrayFromSequelize = await db.user.findOrCreate({
            where: {
                firstName: 'April'
             },
             // defauts-- only used if the created not found after it checks it and creates it
             defaults: {
                 firstName: 'April',
                 lastname: 'Gonzales',
                 age: 26,
                 email: 'april.gonzales@generalassemb.ly',
                 birthday: new Date()
             }   
        })
    
        // console.log(newUser, `this user was created? ${wasCreated}`)
    console.log(arrayFromSequelize)

    
//         //READ -- pass key to where to find it
//         // findall -- gives an array --findone gives the first instance found
//         const foundUser = await db.user.findOne({
//             // both accepts where clause
//             where: {
//                 firstName: 'Jason'
//             }
//         })

//         console.log(foundUser)

//         //UPDATE -- = {first cals to update(new values)} --{second  where clause }
//         const numRows = await db.user.update({
//             age: 35
//         }, {
//             where: {
//                 firstName: 'Weston'
//             }
//         })

//         console.log(numRows)

//         //DESTROY
//         // needs a where clause
//         // returns number of rows delete
//         const numDeletedRows = await db.user.destroy({
//             where: {
//                 firstName: 'Weston'
//             }
//         })

//         console.log(numDeletedRows)
    } catch (error) {
            console.log(error)
    }
}

userCrud()

// array/object destructuring
// takes values frim an array and give them var names
const myNumbers = [0, 1, 2, 10, 50, 999]

const [zero, one, two, ten, taco, banana]  = myNumbers

console.log(zero, taco)

function example() {
    return ['hello', 'banana', 'taco']
}
const [stringOne, stringTwo] = example()
// will return hello and banana --stringone and stringtwo

// READ --simple instance example
// db.user.findAll()
// .then(foundUser => {
// console.log(foundUser)
// })
// you have to declare async function with single way query to get access to the await keyword
async function findAllUsers() {
    // handle errors with try/catch blocks
    try {
// var = await promise --stop when you find it and wait until the promise resolves -- if never resolves waits forever
// await promise
   const foundUser = await db.user.findAll()
   console.log(foundUser)
// TRIES TO RUN THIS CODE -- if there is error it goes tob the catch
} catch (error) {
        console.log(error)
    }
}
// findAllUsers()
// UPDATE
// DESTROY