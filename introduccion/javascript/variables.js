// Ya no se debería utilizar var
//El problema es que crea la variable en un ámbito global
//usar const en lo posible
var name = "wolverine";

if ( true ){
    name = "Magneto"

}

console.log(name);