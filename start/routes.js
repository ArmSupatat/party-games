'use strict'

const { route } = require('@adonisjs/framework/src/Route/Manager')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
//Route.on('/login').render('login')

Route.get("/login", "AuthController.login");
Route.post("/login", "Authcontroller.loginUser")

Route.get("/register", "AuthController.register")
Route.post("/register", "AuthController.registerUser")

Route.post("/api/register", "AuthController.registerUser")

Route.get("/home", "AuthController.home")
Route.post("/home", "AuthController.inputPost")
//Route.post("/register", "AuthController.registerUser")

Route.get("/post", "AuthController.post")
Route.post("/post", "AuthController.inputPost")

Route.get("/details", "AuthController.details")
Route.post("/details", "AuthController.postDetails")

Route.get("/profile", "AuthController.profile")
Route.post("/profile" , "AuthController.logOut")
// Route.post("/profile", "AuthController.showProfile")

Route.get("/layout2","AuthController.profile")
