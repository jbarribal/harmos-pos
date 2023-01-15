<?php

namespace App\Http\Controllers;

use App\Models\TransactionItems;
use Illuminate\Http\Request;

class TransactionItemsController extends Controller
{
    //

    public function store(Request $request) {

            TransactionItems::create($request
                ->all());

    }

}
