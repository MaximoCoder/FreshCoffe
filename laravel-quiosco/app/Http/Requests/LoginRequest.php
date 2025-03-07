<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            // Reglas de validacion
            'email' => ['required', 'email', 'exists:users,email'],
            'password' => ['required'],
        ];
    }
    // Mensajes de validacion
    public function messages()
    {
        return [
            'email.required' => 'El email es obligatorio',
            'email.email' => 'El email no es valido',
            'email.exists' => 'El email no esta registrado',
            'password.required' => 'El password es obligatorio',
        ];
    }
}
