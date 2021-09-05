<?php

namespace Database\Seeders;

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
        DB::table('products')->insert([
            [
            'name'=>'Nike Airforce 1',
            'catagory'=>'Shoes',
            'price'=>'5000',
            'description'=>'Street wear icon while retaining roots',
            'image'=>'https://images.unsplash.com/photo-1603808033587-935942847de4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80'
            ],
            [
                'name'=>'Nike Air Max 1',
                'catagory'=>'Shoes',
                'price'=>'6000',
                'description'=>'Featured on the midsole revealing visible air',
                'image'=>'https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
                ],
                [
                    'name'=>'Nike Air Max 90',
                    'catagory'=>'Shoes',
                    'price'=>'4000',
                    'description'=>'For cushoning and padded collar for all-round support',
                    'image'=>'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80'
                    ],
        ]);
    }
}
