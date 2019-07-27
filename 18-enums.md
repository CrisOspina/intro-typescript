- El proposito de los enums es tomar un conjunto de valores númericos y asignarle un nombre que nos permita identificarlo de manera mas clara y expresiva.

``` typescript
  enum Tallas {
    Chica = 1,
    Mediana = 2,
    Grande = 3
  }

  enum PaymentState {
    Creado,
    Pagado,
    EnDeudad
  }

  class Pedido {
    talla: number;
  }

  let pedido: Pedido = new Pedido();

  pedido.talla = Tallas.Chica;

  console.log(PaymentState.EnDeudad);
```