<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Http\Controllers\Controller;
use App\Http\Requests\SignupRequest;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function signup(SignupRequest $signupRequest)
    {
        $data = $signupRequest->validated();
       $user =  User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);
        $token = $user->createToken('main')->plainTextToken;

        return response(compact('user', 'token'));

    }
    public function login(LoginRequest $loginRequest)
    {
        $credentials = $loginRequest->validated();
        if(!Auth::attempt($credentials)) {
            return response([
                'message' => 'Provided email address or password is incorrect'
            ], 402);
        }
        $user = Auth::user();
       $token =  $user->createToken('main')->plainTextToken;
       return response(compact('user', 'token'));
    }
    public function logout(Request $request)
    {
        // $user = $request->user();
        // $user->currentAccessToken()->delete();
        // return response('', 204);

    }
}
