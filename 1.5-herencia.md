
``` typescript
  class Video {
   title: string;
   constructor(title:string){
    this.title = title;
   }

   play() { console.log("Playing"); }

   stop() { console.log("Stopped"); }

  }

  class YoutubeVideo extends Video {
   play() {
    super.play(); //llama el método play de la clase padre
    console.log("sobreescribiendo el método padre");
    } 
  }

  let miVideo:YoutubeVideo = new YoutubeVideo("ejemplos");
  miVideo.play();
```