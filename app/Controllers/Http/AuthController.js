'use strict'

// const DB = use('Database');

class AuthController {
    async login({ view, reqest, response}) {
        // const users = await DB.from('proflies').where({ name: 'john'})
        // const user = await DB.select('*')
        //     .from('user')
        //     .where({ name: "John"})
        //     .whereNot({ age: 20})
        //     .whereBetween('age', [18, 32]);

        // const name = 'Supatat';
        // const age = '20';
        // const supatat = ['a', 'b', 'c', 'd'];
        // const address = {
        //     postcode: '10140',
        //     country: 'Thailand'
        // };
// , { name, age, supatat, address}
        return view.render('login')
    };

    loginUser({ view, reqest, response }) {
        const { username, password } = reqest.body
        

        return response.redirect('/login')
    }

    register({view}){
        return view.render('register')
    }

    // login-register({ view, reqest, response}) {
    //     return view.render('login-register')
    // }


}

module.exports = AuthController
