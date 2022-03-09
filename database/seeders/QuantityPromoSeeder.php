<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class QuantityPromoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('quantity_promos')->updateOrInsert([
            'name' => '3 Motion sensors for 65.00 EUR',
            'price' => '6500',
            'quantity' => 3,
            'product_id' => 2,
            'expiration_date' => Carbon::now()->addYear()->format('Y-m-d H:i:s'),
            'created_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);

        DB::table('quantity_promos')->updateOrInsert([
            'name' => '2 Smoke Sensors for 35.00 EUR',
            'price' => '3500',
            'quantity' => 2,
            'product_id' => 4,
            'expiration_date' => Carbon::now()->addYear()->format('Y-m-d H:i:s'),
            'created_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);
    }
}
