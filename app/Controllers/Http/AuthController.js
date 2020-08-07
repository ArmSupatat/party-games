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

    loginUser({ request, response }) {
        const { username, password } = request.body
        
        // return view.render("login")
        return response.redirect("/login")
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
}


module.exports = AuthController
