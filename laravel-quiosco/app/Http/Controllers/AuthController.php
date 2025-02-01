<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\RegistroRequest;

class AuthController extends Controller
{
    
    // Funcion para registrar
    public function register(RegistroRequest $request) {
        // Validar el request 
        $data = $request->validated(); // Valida con las reglas de el request

        // Crear el usuario
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password'])
        ]);

        // Devolver la respuesta
        return [
            'token' => $user->createToken('auth_token')->plainTextToken,
            'user' => $user
        ];
    }
    // Funcion para iniciar session
    public function login(LoginRequest $request) {
        // Validar el request 
        $data = $request->validated();
        // Revisar el password
        if(!auth()->attempt($data)) {
            return response(['error' => 'El email o password es incorrecto'], 422);
        }
        // Autenticar el usuario

        $user = Auth::user();

        // Devolver la respuesta
        return [
            'token' => $user->createToken('auth_token')->plainTextToken,
            'user' => $user
        ];
    }
    // Funcion para cerraar session
    public function logout(Request $request) {
        $user = $request->user();
        // Borrar el token
        $user->currentAccessToken()->delete();

        // Devolver la respuesta
        return [
            'user' => null
        ];
    }

}
