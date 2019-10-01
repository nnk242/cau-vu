<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('demo-web', function () {
    return view('demo-web.pages.frontend.index');
})->name('demo-web');

Route::get('demo-web/detail', function () {
    return view('demo-web.pages.frontend.detail');
})->name('detail');

Route::get('{name_unicode}/danh-muc', 'Frontend\HomeController@category')->name('danh-muc');

Route::get('/', 'Frontend\HomeController@index');

Route::group(['prefix' => 'admin'], function () {
    Auth::routes();
    Route::resource('category', 'CategoryController');
    Route::resource('product', 'ProductController');
});

Route::get('/home', 'HomeController@index')->name('home');
