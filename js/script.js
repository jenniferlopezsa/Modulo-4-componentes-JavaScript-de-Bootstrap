$(function () {
  // Punto 4: tooltips y popovers hay que activarlos con JavaScript
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();

  // Punto 10: velocidad del carousel (3 segundos entre imagenes, pausa al pasar el mouse)
  $('#banner').carousel({
    interval: 3000,
    pause: 'hover'
  });
});
