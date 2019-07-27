- Las clases abstractas no se pueden instanciar.
``` typescript
  abstract class Assert {
    x: number;
    y: number;
    width: number;
    height: number;
    getCoords():string {
      return `${this.x},${this.y}`
    }

    abstract move(speed: number):boolean;
  }

  class Hero extends Asset {
    move(speed:number){
      return true;
    } 
  }
```