<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transactions extends Model
{

    protected $fillable = [
        'customer',
        'total',
        'cashAmount',
        'paymentMethod',
        'change',
        'userId'
    ];
}
