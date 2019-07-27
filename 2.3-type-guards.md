- El proposito de los guardianes de tipo es aprovechar los tipos de unión sin perder la certeza que nos da en tipado estático.

``` typescript

  function isNumber(obj: number | string) : obj is number{
    return typeof obj === 'number';
  }

  function isString(obj: number | string) : obj is string{
    return typeof obj === 'string';
  }

  function printAge(age:number | string) {
    if(isNumber(age)){
      //Estamos seguros de que el objeto es un número.
    } else {
      //Estamos seguros de que el objeto es una cadena.
    }
  }
```