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

Route.on('/').render('home')

Route.get('/login-register', 'AuthController.login-register');

Route.get('/login', 'AuthController.login');
Route.post('/login', 'AuthController.loginUser')
// Route.on('/login').render('login')

Route.get('/register', 'AuthController.register');

Route.get('/api/register', 'AuthController.register');

