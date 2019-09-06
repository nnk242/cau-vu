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

Route::get('demo-web/', function () {
    return view('demo-web.pages.frontend.index');
})->name('demo-web');
Route::get('demo-web/detail', function () {
    return view('demo-web.pages.frontend.detail');
})->name('detail');


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
