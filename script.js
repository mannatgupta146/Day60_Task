// # Day 60 — Exercises

// ---

// ## Exercise 1 — Very Easy (Warming up)

// **Task (Hindi):** Ek function banao `afterDelay`

// **Requirements:**
// - Ye function do cheezein lega:
//   1. `time` (milliseconds)
//   2. `callback` function
// - Given `time` ke baad `callback` call kare
// - Callback ke andar `"Callback executed"` print hona chahiye

function afterDelay(time,cb){
    setTimeout(() => {
        cb()
    }, time);
}

afterDelay(1000, function(){
    console.log("callback executed")
})

// **Use case:**
// > “2 second baad ek kaam karna hai”

afterDelay(2000, function(){
    console.log("2 second baad ek kaam karna hai")
})

// **Goal:**
// - Samajhna ki callback delay ke baad kaise execute hota hai
// - Ye `setTimeout` + callback connection hai

// ---

// ## Exercise 2 — Intermediate (Data flow)

// **Task (Hindi):** Ek function banao `getUser`

// **Requirements:**
// - `getUser` `username` lega
// - 1 second ke baad `callback` ko ek object de:
//   - `id`
//   - `username`

function getUser(username, cb1){
    setTimeout(() => {
        cb1({username, age: 22, userId: 15281})
    }, 1000);
}

// **Then:**
// - Callback ke andar ek aur function call karo `getUserPosts`

// **`getUserPosts` requirements:**
// - `userId` lega
// - 1 second ke baad `callback` ko `posts` ka array de

function getUserPosts(userId, cb2){
    console.log("getting user posts...")
    setTimeout(() => {
        cb2(["post1", "post2", "post3"])
    }, 1000);
}

// **Final output:**
// - User ka `username` print ho
// - Fir uske `posts` print ho

getUser("Mannat", function(data){
    getUserPosts(data.userId, function(posts){
        console.log(data.username, data, posts)
    })
})

// **Goal:**
// - Samajhna ki ek async ka result next async ko kaise milta hai
// - Callback chaining practice

// // ---

// ## Exercise 3 — Intermediate (Callback dependency — thoda painful)

// **Task (Hindi):** Teen functions banao:

// 1. `loginUser`
//    - 1 second baad callback ko `user` object de
// 2. `fetchPermissions`
//    - `userId` lega
//    - 1 second baad callback ko `permissions` array de
// 3. `loadDashboard`
//    - `permissions` lega
//    - 1 second baad callback ko `"Dashboard loaded"` bole

function loginUser(user, cb1){
    setTimeout(() => {
        cb1({user, userId: 1, userAge: 21})
    }, 1000);
}

function fetchPermissions(userId, cb2){
    setTimeout(() => {
        cb2(["read", "write", "update", "delete"])
    }, 1000);
}

function loadDashboard(permissions, cb3){
    setTimeout(() => {
        cb3()
    }, 1000);
}

// **Flow:**
// - Pehle `loginUser`
// - Uske andar `fetchPermissions`
// - Uske andar `loadDashboard`
// - Final output console mein print ho

loginUser("mannat", function(data){
    fetchPermissions(data.userId, function(permissions){
        loadDashboard(permissions, function(){
            console.log(`${data.user} dashboard loaded`)
            console.log(permissions);
        })
    })
})

// **Goal:**
// - Callback nesting ko feel karna
// - Yehi structure baad mein callback hell banta hai

// ---

// ### Notes
// - Practice in plain JavaScript using `setTimeout` and callbacks to understand the flow before converting to Promises/async–await.