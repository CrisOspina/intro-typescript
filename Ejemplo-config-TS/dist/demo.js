var Speaker = (function () {
    function Speaker() {
    }
    Speaker.prototype.hi = function (name) {
        console.log("Hola " + name);
    };
    return Speaker;
}());
var speaker = new Speaker();
speaker.hi('Cris');
speaker.hi('Hel');
