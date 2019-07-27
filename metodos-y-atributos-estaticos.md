``` typescript
 class Request {
  static url: string = "http://prueba.com";

  static getCourses(){
   console.log(`${Request.url}/cursos`);
  }
  
  static getArticles(){
   console.log(`${Request.url}/articles`);
  }
 }

 Request.getArticles();
```