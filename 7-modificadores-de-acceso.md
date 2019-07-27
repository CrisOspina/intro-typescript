- Modificadores de acceso:
 Ejemplo 1: public = se puede acceder de todas las formas.
 ``` typescript
  class Video {
   public _title: string;
   constructor(title:string){
    this._title = title;
   }
  }
  let miVideo: Video = new Video("Demo");
 ```

 Ejemplo 2: protected = solo puede acceder la clase y sus subclases.
 ``` typescript
  class Video {
   protected _title: string;
   constructor(title:string){
    this._title = title;
   }
  }

  class Youtube extends Video {
   printTitle(){
    console.log(this._title);
   }
  }

  let miVideo: Video = new Video("demo");
 ```

 Ejemplo 3: private = solo se puede acceder desde la misma clase.
 ``` typescript
  class Video {
   private _title:string;
   constructor(title:string){
    this._title = title;
   }
  }
```