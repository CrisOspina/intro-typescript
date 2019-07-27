``` typescript
  interface Asset {
    x, y, with, height: number;
    getCoords(): string;
  }

  class Hero implement Asset {
    x: number;
    y: number;
    width: number;
    height: number;
    
    getCoords():string {
      return ""; 
    }
  }

  class Bullet implements Asset {
    x: number;
    y: number;
    width: number;
    height: number;

    getCoords():string {
      return ""; 
    }
  }

  class Enemy implements Asset {
    x: number;
    y: number;
    width: number;
    height: number;

    getCoords():string {
      return ""; 
    }
  }

  class Collision {
    static check(obj:Asset, obj2: Asset){
      //validar que exista forma de comparar los elementos
      //compare object with object2
    }
  }
```