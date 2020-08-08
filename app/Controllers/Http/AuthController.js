'use strict'

const Database = use("Database");

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

    async login({ view }) {
        return view.render("login")
    }

    loginUser({ view, request, response }) {
        const { username, password } = request.body
        const users = [];

        while (users = Database.select({username}).from("profiles")){
            users = username;
        }

        const passwords = Database.select({password}).from("profiles")
        // return view.render("login")
        console.log("users")

        // if(username===null||password===null){
        //     return response.redirect("/login")
        // } else if (username===users){
        //         console.log("Yay")
        //         return view.render("/home")
        //     }
        
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

    async home({ view }) {
        return view.render("home")
    }

    post ({view}){
        return view.render("post")
    }

    async inputPost({request,response}){
        const {game,details,member}= request.body
        await Database.from("posts").insert({game,details,member})

        return response.redirect("/home")
    }
}


module.exports = AuthController
