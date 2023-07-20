<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $user = $request->user();
        return $user->todos;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|min:3|max:255',
            'description' => 'required|string|min:3',
        ]);
        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->all()], 422);
        }
        $user = $request->user();
        $todo = $user->todos()->create(['title' => $request->title, 'description' => $request->description]);
        if ($todo) {
            $response = ['todo' => $todo, 'message' => 'Create successfully'];
            return response($response, 201);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $todo = Todo::find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Todo $todo)
    {
        $update = $todo->update(['title' => $request->title, 'description' => $request->description, 'done' => $request->done == 'false' ? false : true]);
        if ($update) {
            $response = ['todo' => $todo, 'message' => 'Update successfully'];
            return response($response, 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Todo $todo)
    {
        //
    }
}
