<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers:Origin, Content-Type, Accept, Authorization, role , subdomain, X-Requested-With');

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/posts','PostsController@index');
Route::get('/search/{id}','PostsController@show');
Route::post('/createPost','PostsController@store');
Route::post('/createComment','CommentController@store');
Route::get('/find/{id}','PostsController@find');
Route::post('/comment','CommentController@store');
Route::get('/showComments/{id}','CommentController@show');
Route::delete('/deletePost','PostsController@deletePost');
Route::get('/editPost/{id}','PostsController@find');