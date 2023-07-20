<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    //login
    public function me(Request $request)
    {
        $user = $request->user()->load('profile');
        return response($user, 200);
    }
}
