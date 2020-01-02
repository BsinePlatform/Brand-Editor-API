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

Route.resource('users', 'UserController').validator(new Map([
  [['users.store'], ['StoreUser']],
  [['users.update'], ['UpdateUser']]
])).apiOnly().middleware('auth')

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

Route.resource('personalizations', 'PersonalizationController').validator(new Map([
  [['personalizations.store'], ['StorePersonalization']],
  [['personalizations.update'], ['UpdatePersonalization']]
])).apiOnly().middleware('auth')

Route.resource('product-permission', 'ProductPermissionController').validator(new Map([
  [['product-permission.store'], ['StoreProductPermission']],
  [['product-permission.update'], ['UpdateProductPermission']]
])).apiOnly().middleware('auth')

Route.resource('permission', 'PermissionController').validator(new Map([
  [['permission.store'], ['StorePermission']],
  [['permission.update'], ['UpdatePermission']]
])).apiOnly().middleware('auth')

Route.resource('user-permission', 'UserPermissionController').validator(new Map([
  [['user-permission.store'], ['StoreUserPermission']],
  [['user-permission.update'], ['UpdateUserPermission']]
])).apiOnly().middleware('auth')

Route.resource('campaign', 'CampaignController').validator(new Map([
  [['campaign.store'], ['StoreCampaign']],
  [['campaign.update'], ['UpdateCampaign']]
])).apiOnly().middleware('auth')

Route.resource('campaign-image', 'CampaignImageController')
  .apiOnly()
  .middleware('auth')

Route.resource('campaign-product', 'ProductCampaignController')
  .apiOnly()
  .middleware('auth')

Route.resource('gallery', 'GalleryController').validator(new Map([
  [['gallery.store'], ['StoreGallery']],
  [['gallery.update'], ['UpdateGallery']]
])).apiOnly().middleware('auth')

Route.resource('file-gallery', 'FileGalleryController').validator(new Map([
  [['file-gallery.store'], ['StoreFileGallery']],
  [['file-gallery.update'], ['UpdateFileGallery']]
])).apiOnly().middleware('auth')

Route.resource('payment-form', 'PaymentFormController').validator(new Map([
  [['payment-form.store'], ['StorePaymentForm']],
  [['payment-form.update'], ['UpdatePaymentForm']]
])).apiOnly().middleware('auth')