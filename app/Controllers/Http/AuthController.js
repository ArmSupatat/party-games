'use strict'

const Database = use("Database");
let token;
let currentProfile;


class AuthController {
    //async login({view, request, response}) {
    // const users = await Database
    // //.select("*")
    // .from("profiles")
    // .where({ name: "John" })
    // // .wherenot({ age: 20})
    // // .wherebetween('age',[18,32])
    // const name = "Ajarn"
    // const age = 12
    // const friends = ["A","B","C","D"]
    // const address ={
    //     postcode: "50200"
    //     ,country: "Thailand"
    //};

    //     return view.render("login"//, {name,age,friends,address}
    //     )
    // }
    async home({ view }) {
        return view.render("home")
    }

    async login({ view }) {
        return view.render("login")
    }

    async loginUser({ view, request, response }) {
        const { username, password } = request.body
        const userProfiles = await Database.select("username", "password").from("profiles").where({ username:username, password:password }) // []
        // const users = Database.select({username:username}).from("profiles");
        // const passwords = Database.select({password}).from("profiles")
        console.log("users")

        if(userProfiles.length){
            token += 1
            currentProfile = username
            return response.redirect("/profile",{currentProfile})
        } else {
                return response.redirect("/login")
            }
    }

    logOut({request, response}){  
        token = 0
        return response.redirect("/home",)
    }


    register({ view }) {
        return view.render("register")
    }

    async registerUser({ request, response }) {
        const {username,email,password}= request.body
        if (username|email|password==null){
        return response.redirect("/register") 
        } else {
        console.log(email,password)
        await Database.from("profiles").insert({username,email,password})
        //await Database.insert({email,password}).into("profiles")
        //await =yield
        //async=*

        return response.redirect("/login") }
    }

    post ({view}){
        return view.render("post")
    }


    async inputPost({request,response}){
        const {game,details,member}= request.body

        let date = new Date();
        let dd = String(cm_Date.getDate()).padStart(2, '0');
        let mm = String(cm_Date.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = date.getFullYear();
        date= mm + '/' + dd + '/' + yyyy;

        await Database.from("posts").insert({game,details,member,date})

        return response.redirect("/home")
    }

    details({view}){
        return view.render("details")
    }

    testPost(){

    }

    async postDetails({response}){
        const posts = await Database.select("game", "details","member").from("posts")
        return response.redirect("/details",{userProfiles})
    }
    

    profile ({view}){
        return view.render("profile",{currentProfile})
    }


    showProfile ({request,response}){
        return response.redirect("/profile,",{currentProfile})
    }

}


module.exports = AuthController
