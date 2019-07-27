- Nos permite agrupar identificadores bajo un mismo nombre.
- identificadores = clases, constantes, interfaces, simbolos, etc.

``` typescript
  namespace CF {
    export class Youtube();
    export const url:string = "https://prueba.com";
  }

  let video:CF.Youtube = new CF.Youtube();
```