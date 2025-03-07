<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Pedido extends Model
{
    use HasFactory;

    // Relaciones
    public function user(){
        return $this->belongsTo(User::class);
    }
    // Relacion muchos a muchos
    public function productos(){
        return $this->belongsToMany(Producto::class, 'pedido_productos')->withPivot('cantidad');
    }
}
