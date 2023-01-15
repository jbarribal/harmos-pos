<?php

namespace App\Http\Controllers;

use App\Models\TransactionItems;
use App\Models\Transactions;
use Illuminate\Http\Request;

class TransactionsController extends Controller
{
    //

    public function store(Request $request) {


        $transaction = Transactions::create([
            'customer' => $request->customer,
            'total' => $request->total,
            'cashAmount' => $request->cashAmount,
            'paymentMethod' => $request->paymentMethod,
            'change' => $request->change,
            'userId' => $request->userId
        ]);

        $transactionId = $transaction->id;

        //create a collection of the items purchased
        $itemsRequest = collect($request->items)
            //maps the collection to an item
            ->map(function ($item) use ($transactionId) {
                return new Request([
                    'transactionId' => $transactionId,
                    'productId' => $item['id'],
                    'quantity' => $item['quantity'],
                    'productName'=> $item['name'],
                    'price' => $item['price'],
                    'total' => round($item['price'] * $item['quantity'], 2)
                ]);
            })//functions on what to do with the item
            ->each(function ($item) {
                //create transaction items
                $transactionItemsController = new TransactionItemsController();
                $transactionItemsController->store($item);


                //updates the units of the product that has been purchased
                $productController = new ProductController();
                $currentUnits = $productController->show($item['productId'])->original['units'];
                $updatedUnits = new Request([
                    'units' => $currentUnits - $item['quantity']
                ]);
                $productController->update($updatedUnits, $item['productId']);

            });


        return response()->json($itemsRequest);
    }
}
