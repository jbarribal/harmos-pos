<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product;
use Illuminate\Support\Facades\Redirect;

class ProductController extends Controller
{
    //

    public function index()
    {
        return Inertia::render('Inventory/Index', [
            'products' => Product::all()
        ]);
    }

    public function show($id){


        return response()->json(Product::find($id));
    }

    public function destroy($id)
    {

        Product::find($id)
            ->delete();
//        return Redirect::route('inventory.index');

    }


    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:255',
            'category' => 'required',
            'price' => 'required|numeric',
            'units' => 'required|numeric'
        ]);

        Product::create($request->all());
        //return redirect()->action([ProductController::class, 'index']);
//        return redirect()->route('inventory.index');
    }

    public function update(Request $request, $id)
    {
//        $request->validate([
//            'name' => 'required|max:255',
//            'category' => 'required',
//            'price' => 'required|numeric',
//            'units' => 'required|numeric'
//        ]);

        Product::find($id)
            ->update($request->all());
//        return redirect()->route('inventory.index');
//        return Redirect::route('inventory.index');

        return response()->json($request->all());
    }
}
