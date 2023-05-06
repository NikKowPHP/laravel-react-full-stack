<?php

use App\Http\Controllers\Api\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group(function() {

Route::get('/user', function (Request $request) {
    return $request->user();
});
    //  logout user
    Route::post('/logout', [AuthController::class, 'logout' ]);
});
// signup user
Route::post('/signup', [AuthController::class, 'signup' ]);
Route::get('/signup', [AuthController::class, 'logout' ]);
// login user
Route::post('/login', [AuthController::class, 'login' ]);
Route::get('/login', [AuthController::class, 'login']);
