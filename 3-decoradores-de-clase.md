- Funciones que se mandan a llamar con ciertos argumentos especificos

``` typescript
  function Decorador(cls: function) {
    console.log("soy un decorador en ejecución");
    cls.protopype.className = cls.name;
  }

  @Decorador
  class Speaker {

  }

  let speaker: Speaker = new Speaker();

  console.log((speaker as any).className);
```