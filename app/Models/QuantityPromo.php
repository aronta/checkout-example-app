<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class QuantityPromo extends Model
{
    use HasFactory;
    use SoftDeletes;

    public function products(){
        return $this->belongsToMany(Product::class);
    }

    public function product(){
        return $this->belongsTo(Product::class);
    }
}
