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

Route.resource('categories', 'CategoryController').validator(new Map([
  [['categories.store'], ['StoreCategory']],
  [['categories.update'], ['UpdateCategory']]
]))
  .apiOnly()
  .middleware('auth')

Route.resource('subcategories', 'SubCategoryController').validator(new Map([
  [['subcategories.store'], ['StoreSubCategory']],
  [['subcategories.update'], ['UpdateSubCategory']]
]))
  .apiOnly()
  .middleware('auth')

Route.resource('prices', 'PriceController').validator(new Map([
    [['prices.store'], ['StorePrice']],
    [['prices.update'], ['UpdatePrice']]
  ]))
    .apiOnly()
    .middleware('auth')
  
Route.resource('departments', 'DepartmentController')
  .apiOnly()
  .middleware('auth')

Route.resource('style', 'CompaniesCustomizationController')
  .apiOnly()
  .middleware('auth')


  Route.resource('products', 'ProductController').validator(new Map([
    [['product.store'], ['StoreProduct']],
    [['product.update'], ['UpdateProduct']]
  ]))
    .apiOnly()
    .middleware('auth')

// Rotas de teste de upload de imagem do produto, apagar depois.
Route.post('products/:id/images', 'ImageController.store')
  .middleware('auth')