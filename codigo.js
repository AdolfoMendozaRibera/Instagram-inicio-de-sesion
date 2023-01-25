let cont=0;

function Cambiar_imagen()
{
    cont = cont % 2;
    if (cont==1)
    {
        document.getElementById("imagen_cambiar".src="D:\Antiguo\Desktop\Lenguajes de programacion\Paginas web\Instagram v1\imagenes\Celular.png");
    }
    else
    {
        document.getElementById("imagen_cambiar".src="D:\Antiguo\Desktop\Lenguajes de programacion\Paginas web\Instagram v1\imagenes\microsoft.png");
    }
    cont++;
    console.log(cont);
}

function inicio()
{
    setInterval(Cambiar_imagen,3000);
}

window.onload=inicio();