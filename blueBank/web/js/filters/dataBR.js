angular.module("transferencia").filter('dataBR', function(){
  return function(data){
    var dataHora = data.split(" ");
    dataFormatada = (dataHora[0]).split("-");
    return dataFormatada[2] + "/" + dataFormatada[1] + "/" + dataFormatada[0] + " " + dataHora[1];
  }
});