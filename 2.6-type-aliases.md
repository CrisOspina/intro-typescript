- Un apodo o un alias para un tipo existente;

``` typescript
  type numero = number;

  let edad: numero;

  edad = 22;
```  

``` typescript
  type NumberOString = number | string;

  let age: NumberOString;

  class User {
    name:string;
  }

  class Admin {
    permissions:number;
  }

  type UserAdmin = User & Admin;

  let user: UserAdmin;
```  

``` typescript
  type FuncString = (title:string) => string;

  function executer(f: FuncString){  }

  executer(() => "hello");
```


