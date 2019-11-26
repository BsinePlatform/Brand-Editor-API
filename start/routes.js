'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { 'boas-vindas': 'Teste!' }
})

Route.resource("users", "UserController")
  .apiOnly()
  .middleware('auth')

Route.post('/sessions', 'SessionController.create')

Route.resource('companies', 'CompanyController')
  .apiOnly()
  .middleware('auth')

Route.resource('stores', 'StoreController')
  .apiOnly()
  .middleware('auth')
  
Route.resource('departments', 'DepartmentController')
  .apiOnly()
  .middleware('auth')

Route.resource('style', 'CompaniesCustomizationController')
  .apiOnly()
  .middleware('auth')