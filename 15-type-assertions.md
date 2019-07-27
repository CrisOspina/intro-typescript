- Inferir el tipo de datos que tratas de asignar.
- No cambian el objeto, solo cambian el tipo que el compilador habia dado.

``` typescript
  interface AJAXSettings {
    url:string;
  }

  let options = {} as AJAXSettings;
  options.url = "http://prueba.com";
```
