<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::query()->insert(
            [
                ['name' => 'Admin', 'email' => 'admin@demo.com', 'password' => Hash::make('123456')],
                ['name' => 'User', 'email' => 'user@demo.com', 'password' => Hash::make('123456')]
            ]
        );
    }
}
