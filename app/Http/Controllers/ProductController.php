<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product;

class ProductController extends Controller
{
    //

    public function index()
    {
        return Inertia::render('Inventory/Index', [
            'products' => Product::all()
        ]);
    }


    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:255',
            'code' => 'required',
            'brand' => 'required|max:255',
            'price' => 'required|numeric',
            'quantity' => 'required|numeric'
        ]);

        Product::create($request->all());
    }
}
