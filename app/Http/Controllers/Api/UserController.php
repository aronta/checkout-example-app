<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
    public function purchase(Request $request) {

        $validator = Validator::make($request->all(), [
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email',
            'address' => 'required',
            'city' => 'required',
            'amount' => 'integer'
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $validated = $validator->validated();

        $user = User::firstOrCreate(
            [
                'email' => $request->input('email')
            ],
            [
                'password' => Hash::make(Str::random(13)),
                'name' => $request->input('first_name') . ' ' . $request->input('last_name'),
                'address' => $request->input('address') . ',' . $request->input('city'),
                #'credit_card_number' => str_replace(' ', '', $request->input('cardNumber')),
                #'credit_card_expiry_date' => str_replace(' ', '', $request->input('cardExpiry')),
                #'credit_card_csv' => $request->input('cardCvc'),
            ]
        );

        $order = $user->orders()
            ->create([
                'total' => $request->input('amount'),
            ]);
        
        foreach (json_decode($request->input('cart'), true) as $item) {
            $order->products()
                ->attach($item['id'], ['quantity' => $item['quantity']]);
        }
        
        foreach (json_decode($request->input('promos'), true) as $item) {
            $order->promoCodes()
                ->attach($item['id']);
        }

        $order->load('products.quantityPromos:quantity,price,product_id');
        $order->load('promoCodes');

        return $order;

    }
}
