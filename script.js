

// Añade el efecto de tachado y cambio de color al elemento de la lista
$("ul").on("click", "li", function(){
    $(this).toggleClass("completado")
  });
// Borra la lista al clickear en BORRAR desvaneciendola primero
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
      $(this).remove();
    });
    event.stopPropagation();
  });

//filtrar para que sólo se active cuando se clickea #target
$("#target").click(function(){
  // se agrega el nuevo input
      $("ul").append("<li><span><i class='fas fa-trash-alt' aria-hidden='true'></i></span> "+ $("#input").val() + "</li>");
      // se borra el contenido del input
      $("#input").val("");
      event.stopPropagation();
  });
  

  // Agregar el contenido del input a la lista
$("input[type='text']").keypress(function(event){
    //filtrar para que sólo se active cuando aprietan Enter
    if(event.key == "Enter") {
      $("ul").append("<li><span><i class='fas fa-trash-alt' aria-hidden='true'></i></span> "+ $(this).val() + "</li>");
      // se borra el contenido del input
      $(this).val("");
      event.stopPropagation();
    }
  });

  
// dropdown del input para agregar cosas a la lista
$("#arrows").click(function(){
    $("ul").slideToggle();
    $(this).toggleClass("fa-stream fa-arrow-down");
   })