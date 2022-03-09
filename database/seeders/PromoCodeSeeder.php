<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PromoCodeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {   

        DB::table('promo_codes')->updateOrInsert([
            'name' => '20%OFF',
            'type' => 'percentage',
            'value' => '20',
            'combination' => false,
            'expiration_date' => Carbon::now()->addYear()->format('Y-m-d H:i:s'),
            'created_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);

        DB::table('promo_codes')->updateOrInsert([
            'name' => '5%OFF',
            'type' => 'percentage',
            'value' => '5',
            'expiration_date' => Carbon::now()->addYear()->format('Y-m-d H:i:s'),
            'created_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);

        DB::table('promo_codes')->updateOrInsert([
            'name' => '20EUROFF',
            'type' => 'flat',
            'value' => '20',
            'expiration_date' => Carbon::now()->addYear()->format('Y-m-d H:i:s'),
            'created_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);
    }
}
