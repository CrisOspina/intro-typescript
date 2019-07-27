``` typescript
 class Video {
  title:string;
  constructor(title:string){
   this.title = title;
  }

  printTitle() { 
    console.log(this.title); 
  }

  changeTitle(title:string){ 
    this.title = title;  
  }

  getTitle():string { 
    return this.title; 
  }
 }

  let miVideo:Video = new Video("ejemplo clases y objetos en ts");

  miVideo.printTitle();

  miVideo.changeTitle("demo");
  
  console.log(miVideo.getTitle());
```