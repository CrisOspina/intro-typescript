class Speaker {
  hi(name: string){
    console.log(`Hola ${name}`);
  }
}

let speaker: Speaker = new Speaker();

speaker.hi('Cris');

speaker.hi('Hel');