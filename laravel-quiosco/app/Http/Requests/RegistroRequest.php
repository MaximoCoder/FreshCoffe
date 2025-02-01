<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class RegistroRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true; // Actualizar a true o nunca podra entrar
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        // Reglas de validacion
        return [
            //
            'name' => ['required', 'min:3', 'string'],
            'email' => ['required', 'email', 'unique:users,email'],
            'password' => [
                'required',
                'confirmed',
                'min:6',
                Password::min(6)->letters()->symbols()->numbers()
            ],
        ];
    }
    // Mensajes de validacion
    public function messages()
    {
        return [
            'name.required' => 'El nombre es obligatorio',
            'name.min' => 'El nombre debe tener al menos 3 caracteres',
            'email.required' => 'El email es obligatorio',
            'email.email' => 'El email no es valido',
            'email.unique' => 'El email ya esta registrado',
            'password.required' => 'El password es obligatorio',
            'password.confirmed' => 'El password no coincide',
            'password.min' => 'El password debe tener al menos 6 caracteres',
            'password.letters' => 'El password debe contener al menos una letra',
            'password.symbols' => 'El password debe contener al menos un simbolo',
            'password.numbers' => 'El password debe contener al menos un numero',
        ];
    }
}
