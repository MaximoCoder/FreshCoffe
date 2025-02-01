<?php

namespace App\Http\Controllers;

use App\Models\Pedido;
use App\Models\PedidoProducto;
use Carbon\Carbon;
use Illuminate\Http\Request;

class PedidoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Almacenar pedido
        $pedido = new Pedido;
        $pedido->user_id = $request->user()->id;
        $pedido->total = $request->total;
        $pedido->save();

        // Obtener el id del pedido
        $id = $pedido->id;
        // Obtener los productos del pedido
        $productos = $request->productos;
        // Formatear un arreglo
        $pedido_producto = [];

        foreach($productos as $producto){
            $pedido_producto[] = [
                'pedido_id' => $id,
                'producto_id' => $producto['id'],
                'cantidad' => $producto['cantidad'],
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ];
        }
        // Almacenar los productos en el pedido
        PedidoProducto::insert($pedido_producto);
        // Devolver la respuesta
        return [
            'message' => 'Pedido realizado',
        ];
    }

    /**
     * Display the specified resource.
     */
    public function show(Pedido $pedido)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Pedido $pedido)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pedido $pedido)
    {
        //
    }
}
