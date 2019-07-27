- Loas intersaction types nos permite combinar dos tipos de datos en una sola variable

``` typescript
  class User {
    name:string;
  }

  class Admin {
    permissions:number;
    getPermission(){}
  }

  let user:User & Admin; // User&Admin

  user.name = "Thor";

  user.permissions = 1;

  user.getPermission();

  user = new User(); //ERROR porque user = User&Admin

```