<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'nombres' => 'required',
            'apellidos' => 'required',
            'email' => 'required|email',
            'clave' => 'required',
            'nickname' => 'required',
            'sexo' => 'required',
            'nacimiento' => 'required'
        ];

        $messages = [
            'nombres.required' => 'input :attribute es requerido.',
            'apellidos.required' => 'input :attribute es requerido.',
            'email.required' => 'input :attribute es requerido.',
            'email.email' => 'input :attribute debe ser un email.',
            'clave.required' => 'input :attribute es requerido.',
            'nickname.required' => 'input :attribute es requerido.',
            'sexo.required' => 'input :attribute es requerido.',
            'nacimiento.required' => 'input :attribute es requerido.'
        ];

    }
}
