'use strict'

const Database = use("Database");
const temp;
const currentProfile;


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
        const userProfiles = await Database.select("username", "password").from("profiles").where({ username, password }) // []
        // const users = Database.select({username:username}).from("profiles");
        // const passwords = Database.select({password}).from("profiles")
        console.log("users")

        if(userProfiles.length){
            temp = 1
            currentProfile = username
            return response.redirect("/home")
        } else {
                return response.redirect("/login")
            }
    }

    logOut({request, response}){
        temp = 0
        return response.redirect("/home")
    }


    register({ view }) {
        return view.render("register")
    }

    async registerUser({ request, response }) {
        const {username,email,password}= request.body
        console.log(email,password)
        await Database.from("profiles").insert({username,email,password})
        //await Database.insert({email,password}).into("profiles")
        //await =yield
        //async=*

        return response.redirect("/login") 
    }

    

    post ({view}){
        return view.render("post")
    }

    async inputPost({request,response}){
        const {game,details,member}= request.body
        await Database.from("posts").insert({game,details,member})

        return response.redirect("/home")
    }

    details({view}){
        return view.render("details")
    }

}


module.exports = AuthController
