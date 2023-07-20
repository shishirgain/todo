<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Profile;

class ProfileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Profile::query()->insert(
            [
                ['first_name' => 'Asaduzzaman', 'last_name' => 'Shishir', 'user_id' => 1, 'address' => 'Shariatpur', 'number' => '01717605715', 'color' => '#ff00f0']
            ]
        );
    }
}
