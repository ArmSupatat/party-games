'use strict'

const Database = use("Database");
let token;
let currentProfile;
let game;
let details;
let date;
let member;

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


        if(userProfiles.length)
        {
            token = 1
            currentProfile = username
            return response.redirect("/profile",{token,username})
        } else {
            token = 0
            return response.redirect("/login")
        }
    }
    
    profile ({view}) {
        token = 1
        console.log(token)
        return view.render("profile",{currentProfile , token})
    }
    
    logOut({response}){
        token = 0  
        return response.redirect("/home",{token})
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

    postDetails


    async inputPost({request,response}){
        const {game,details,member,timeStamp}= request.body

    //     let now = new Date(),
    //     secondsPast = (now.getTime() - timeStamp) / 1000;
    //     let date;

    //   if (secondsPast < 60) {
    //     date= parseInt(secondsPast) + 's';
    //   }
    //   if (secondsPast < 3600) {
    //     date= parseInt(secondsPast / 60) + 'm';
    //   }
    //   if (secondsPast <= 86400) {
    //     date= parseInt(secondsPast / 3600) + 'h';
    //   }
    //   if (secondsPast > 86400) {
    //     day = timeStamp.getDate();
    //     month = timeStamp.toDateString().match(/ [a-zA-Z]*/)[0].replace(" ", "");
    //     year = timeStamp.getFullYear() == now.getFullYear() ? "" : " " + timeStamp.getFullYear();
    //     date= day + " " + month + year;
    //   }

    //   const currentTimeStamp = new Date().getTime();

      //------------------------------------------------//

        let dateString = new Date();
        let dd = String(dateString.getDate()).padStart(2, '0');
        let mm = String(dateString.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = dateString.getFullYear();
        dateString= mm + '/' + dd + '/' + yyyy;

        //---------------------------------------//

        // var rightNow = new Date();
        // var then = new Date(dateString);

        // if ($.browser.msie) {
        //     // IE can't parse these crazy Ruby dates
        //     then = Date.parse(dateString.replace(/( \+)/, ' UTC$1'));
        // }

        // let diff = rightNow - then;
        // let date;

        // let second = 1000,
        // minute = second * 60,
        // hour = minute * 60,
        // day = hour * 24,
        // week = day * 7;

        // if (isNaN(diff) || diff < 0) {
        //     date = ""; // return blank string if unknown
        // }
        // if (diff < second * 2) {
        //     // within 2 seconds
        //     date = "right now";
        // }
        // if (diff < minute) {
        //     date= Math.floor(diff / second) + " seconds ago";
        // }
        // if (diff < minute * 2) {
        //     date= "about 1 minute ago";
        // }
        // if (diff < hour) {
        //     date= Math.floor(diff / minute) + " minutes ago";
        // }
        // if (diff < hour * 2) {
        //     date ="about 1 hour ago";
        // }
        // if (diff < day) {             
        //     date = Math.floor(diff / hour) + " hours ago";         
        // }           
        // if (diff > day && diff < day * 2) {
        //     date ="yesterday";
        // }
        // if (diff < day * 365) {
        //     date =Math.floor(diff / day) + " days ago";
        // }
        // else {
        //     date= "over a year ago";
        // }

        await Database.from("posts").insert({game,details,member,date:dateString})
        return response.redirect("/home")
    }

    details({view}){
        return view.render("details")
    }

    async postDetails({response}){
        let id = 1;
        const {game,details,date,member} = await Database.select('game','details','date','member').from("posts").where({id})
        // game = data[0].game;
        // details = data[0].details;
        // date = data[0].date;
        // member = data[0].member;

        return response.redirect("/details",{game,details,date,member})
    }

}
    
    // showProfile ({request,response}){
    //     return response.redirect("/profile,",{currentProfile})
    // }
    // let game;
    // let details;
    // let member;

    // console.log(game)
console.log(details)
module.exports = AuthController
