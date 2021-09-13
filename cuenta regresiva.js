function cuentaRegresiva(segundos) 
{
    for (i = 300; i > segundos; i--)
    {
        console.log(i);
    }    

}
let segundos = 0;
console.log(cuentaRegresiva(segundos));

function mayorEdad(edad)
{
    if (edad > 18)
    {
        console.log("Eres mayor, puedes entrar");
    }
    else
    {
        console.log("Regresa en unos años");
    }
}

let edad = 5;
console.log(mayorEdad(edad));

function encenderVela(estadoVela)
{
    if(!estadoVela)
    {
        console.log("encenderemos esta vela");
        console.log("Ya metiro");
        estadoVela = true;
        console.log("Encendida");
    }
    else
    {
        console.log("la vela esta encendida");
    }
}

let estadoVela = false;
console.log(encenderVela(estadoVela));

function entrarTienda(estadoPuerta)
{
    if(!estadoPuerta)
    {
        console.log("Abriremos la puerta");
        console.log("Abriendo...");
        console.log("entramos :)");
    }
    else
    {
        console.log("Esta abierta, pasale");
    }
}

let estadoPuerta = false;
console.log(entrarTienda(estadoPuerta));


function comprarZapatos(estadoTalla)
{
    if(!estadoTalla)
    {
        console.log("tendremos que buscar otros zapatos");

    }
    else
    {
        console.log("Realizando compra....");
        console.log("compra exitosa");
    }
}
let estadoTalla = true;
console.log(comprarZapatos(estadoTalla));