<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TransactionItems extends Model
{
    protected $fillable = [
        'transactionId',
        'productId',
        'productName',
        'quantity',
        'price',
        'total'
    ];
}
