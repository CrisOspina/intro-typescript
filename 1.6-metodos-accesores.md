- Métodos accesores: (accediendo a atributos private)
 - Getters: Nos permiten leer el valor de un atributo. get.
 - Setters: Nos permiten modificar el valor de un atributo. set.

``` typescript
 class Video {
  private _title: string;
  constructor(title: string){
   this._title = title;
  }

  get title(): string { return this._title; }

  set title(title:string) { this._title = title; }
 }

 let miVideo:Video = new Video("Demo");

 miVideo._title = "Nuevo demo";

 console.log(miVideo.title);
```

``` typescript
 class User {
  private -name: string;
  private -lastName: string;

  get fullName():string {
   return `${this.-name} ${this.lasName}`;
  }

  set fullName(fullName:string){
   let words = fullName.split(" ");
   this.-name = words[0];
   this.-lastName = words[1];
  }
 }
 
 let user: User = new User();
 user.fullName = "Cristian Ospina";
 console.log(user.fullName);
```