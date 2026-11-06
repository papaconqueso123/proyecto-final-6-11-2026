import { Component } from '@angular/core';
import { Producto } from '../../models/producto';

@Component({
  imports: [],
  selector: 'app-productos',
  styleUrl: './productos.css',
  templateUrl: './productos.html',
})
export class Productos {

  productos: Producto[] = [
 {id: 1,nombre: "conjunto veraniego",detalles: "Vestido de corte en V con pliegues cosidos y encaje. Disponible en talles XS, S, M, L y XL.",precio: 35000, imagen:"https://i.pinimg.com/736x/e5/44/34/e5443419c6656239d76f82aacc714307.jpg"},
  {id: 2, nombre: "vestido de danza",detalles: "Vestido corto con falda amplia, cintura ajustada y tela liviana con movimiento. Ideal para ocasiones especiales. Disponible en talles XS, S, M, L y XL.",precio: 35000,imagen:"https://i.pinimg.com/736x/46/ee/90/46ee90cd5faeabd441002e1fa46795fc.jpg"},
    {id: 3,nombre: "pollera fresh",detalles: "Pollera de estilo casual, con cintura elastizada y diseño moderno. Confeccionada en tela fresca y cómoda. Disponible en talles XS, S, M, L y XL.",precio: 25000, imagen:"https://i.pinimg.com/736x/de/7c/0c/de7c0c981eb8ce5ce44b0e35203195d0.jpg"
    },
    {id: 4,nombre: "vestido azul hielo",detalles: "Vestido elegante en tono azul hielo, con escote delicado y corte entallado. Ideal para eventos y salidas especiales. Disponible en talles XS, S, M, L y XL.",precio: 3000, imagen:"https://i.pinimg.com/1200x/e1/c5/28/e1c528c103065b63c81165f30343b746.jpg"
    },
    {id: 5,nombre: "top primavera",detalles: "Top femenino con tirantes finos, escote delicado y diseño fresco. Perfecto para combinar con jeans, shorts o polleras. Disponible en talles XS, S, M, L y XL.",precio: 20000, imagen:"https://i.pinimg.com/1200x/99/8c/8f/998c8f350c77ee5feb518eaf8117e521.jpg"
    },
    {id: 6,nombre: "blusa romántica",detalles: "Blusa con mangas . Ideal para crear looks casuales. Disponible en talles XS, S, M, L y XL.",precio: 15000, imagen:"https://i.pinimg.com/736x/2a/70/c8/2a70c86210ea13f97a3a0b0078f2bdad.jpg"
    },
    {id: 7, nombre: "pantalón wide leg",detalles: "Pantalón de tiro alto y pierna ancha, con caída fluida y diseño moderno. Cómodo y versátil para cualquier ocasión. Disponible en talles XS, S, M, L y XL.",precio: 39000, imagen:"https://i.pinimg.com/1200x/16/b3/c1/16b3c190d62cf5524e671533c0028a03.jpg"
    },
    {id: 8,nombre: "short denim",detalles: "Short de jean de tiro alto, con bolsillos delanteros y traseros y terminación desflecada. Ideal para looks urbanos y veraniegos. Disponible en talles XS, S, M, L y XL.",precio: 34000, imagen:"https://i.pinimg.com/1200x/90/d8/74/90d8745aca378f3aa008225bc91bd680.jpg"
    },
    {id: 9,nombre: "camisa oversize",detalles: "Camisa de corte amplio con botones frontales, cuello clásico y mangas largas. Una prenda versátil para combinar con distintos estilos. Disponible en talles XS, S, M, L y XL.",precio: 12000, imagen:"https://i.pinimg.com/736x/5e/13/66/5e1366c242de716426b8d44804f9cb58.jpg"
    }
];
}
