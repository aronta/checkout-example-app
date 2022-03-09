<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->updateOrInsert([
            'name' => 'Smart Hub',
            'slug' => 'smart-hub-1',
            'price' => '4999',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);

        DB::table('products')->updateOrInsert([
            'name' => 'Motion Sensor',
            'slug' => 'motion-sensor-1',
            'price' => '2499',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);

        DB::table('products')->updateOrInsert([
            'name' => 'Wireless Camera',
            'slug' => 'wireless-camera-1',
            'price' => '9999',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);

        DB::table('products')->updateOrInsert([
            'name' => 'Smoke Sensor',
            'slug' => 'smoke-sensor-1',
            'price' => '1999',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);

        DB::table('products')->updateOrInsert([
            'name' => 'Water Leak Sensor',
            'slug' => 'water-leak-sensor-1',
            'price' => '1499',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);
    }
}
