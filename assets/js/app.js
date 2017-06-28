var api = {
  url: 'http://laboratoria.cuadra.co:9339/api/v1/students/'
};

var $alunmasList = $("#lista-alumnas");

var cargarPagina = function () {
  cargarAlumnas();
};

var cargarAlumnas = function () {
  $.getJSON(api.url, function (alumnas) {
    alumnas.forEach(crearAlumna);
  });

}

var crearAlumna = function (alumna) {
  var nombre = alumna.name;
  var pLastName = alumna.pLastName;
  var mLastName = alumna.mLastName;
  var nombreCompleto= nombre + " " + pLastName + " " + mLastName;
  console.log(nombreCompleto);
  //crear li
  var $li =$("<li />");
  var $check=$("<input/>");
      $check.attr("type", "checkbox");
  $li.text(nombreCompleto);
  $li.append($check);
  $alunmasList.append($li);

}




$(document).ready(cargarPagina);
