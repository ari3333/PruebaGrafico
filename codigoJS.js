var title = jQuery("#title").text();
var valor = jQuery("#valor").text();
var info  = jQuery(".descripcion").text();


function imprimir(x, y, estilos, valor=null){
    var tema = '<text x='+ x +"y="+ y +"style="+ estilos +' text-anchor="middle" class="highcharts-titlex" zIndex="4">'+valor+'</text>';
  return tema;
}

//var pintando = new Pintando(title, valor, info);

$(function() {
  window.chart = new Highcharts.chart('container',{
    chart:{
      type:'line'
    },
    title:{
      text:'Crecimiento del empleo por Áreas - Energía solar'
    },
    xAxis:{
      allowDecimals: false
    },
    yAxis:{
      title:{
        text:'Número de empleados'
      }
    },
    legend:{
      layout:'vertical',
      align: 'right',
      verticalAlign:'middle'
    },
    plotOptions:{
      series:{
        pointStart:2018
      }
    },
    series:[{
      name:'Instalación',
      data:[1000, 2000, 3000, 3500, 5000]
    },{
      name:'Fabricación',
      data:[1880, 2580, 3900, 4500, 4800]
    },{
      name:'Ventas',
      data:[780, 2000, 3100, 3700, 3900]
    }],

  });

});


function pintaChart(chart,x,y,scale,w,h){
  var svg;
  if (w==null && h==null){
    svg = chart.getSVG(),
    svgWidth = +svg.match(
      /^<svg[^>]*width\s*=\s*\"?(\d+)\"?[^>]*>/
      )[1],
    svgHeight = +svg.match(
      /^<svg[^>]*height\s*=\s*\"?(\d+)\"?[^>]*>/
      )[1];
  } else {
    svg = chart.getSVG({
      chart:{
        width:w,
        height:h
      }
    })
  }
  svg = svg.replace(
    '<svg',
    '<g transform="translate('+x+','+y+') scale('+scale+')" '
    );
  svg = svg.replace('</svg>', '</g>');
  return svg;
}


$(document).ready(function() {
  console.log(valor);
});

/*
* Pintando la pagina
*/
Highcharts.getSVG = function(charts) {
  svgPag1 = [];
  //var header = jQuery("#title").text();
  svgPag1.push(printLogo());//logo
  svgPag1.push(printTitulo(title));
  svgPag1.push(printValor(valor));
  for (var i = 0; i < charts.length; i++) {
    svgPag1.push(pintaChart(charts[i],20,400,0.45,1150,null));
  }
  svgPag1.push(printFooter());
  return '<svg id="pdf" height="842" width="595" version="1.1" xmlns="http://www.w3.org/2000/svg">' + svgPag1.join('') + '</svg>';

};

function fechaHoy(yearIn) {

  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  var fecha="";
  if(month < 10){
    fecha=day +"-0" +month+"-"+year;
  }else{
    fecha=day+"-"+month+"-"+year;
  }
  if(yearIn!=null){
    return year;
  } else {
    return fecha;
  }
}

Highcharts.exportCharts = function(charts, options) {

  options = Highcharts.merge(Highcharts.getOptions().exporting, options);

  //var nombreDocument = $('text').attr("tspan").text();
  Highcharts.post(options.url, {
    filename: options.filename || 'Crecimiento',
    type: options.type,
    width: options.width,
    svg: Highcharts.getSVG(charts)
  });
};

function pdf() {
  var chart1 = jQuery('#container').highcharts();
  Highcharts.setOptions({
    exporting: {
      fallbackToExportServer: false
    }
  });
  Highcharts.exportCharts([chart1], {
    type: 'application/pdf'
  });
};
const SVG_NS = "http://www.w3.org/2000/svg";

function printTitulo(){
    var estilos = $(document).addClass('.t');
    //<text x="555" text-anchor="middle" class="highcharts-title" data-z-index="4" style="color:#333333;font-size:18px;fill:#333333;" y="24"><tspan>Crecimiento del empleo por Áreas - Energía solar</tspan></text>
    var svgTxt=imprimir(250, 90, estilos);
    return svgTxt;
  }
  function printValor(valor){
    //var estilo = $('pdf').addClass('.valor');
    //$('p, a').addClass('margen-superior');
    //console.log(estilo);
   //var dato =  imprimir(450, 220, estilo, valor);
   //"<text x='160' y='200' style='font-family:Arial;padding-top:5px;font-style:italic;padding-top:5px;background:#F8F9F9;fill:black;' text-anchor='middle' class='highcharts-titlex'>"+ valor + "</text>";
   //var dato = '<g><text x=250 y=120 viewBox="0 0 250 120" style="font-family:Arial;padding-top:5px;font-style:italic;padding-top:5px;background:#F8F9F9;fill:black;"><tspan x="10" dy="15">'+valor+'</tspan></text></g>';
   //var en = '<svg width="250" height="120" viewBox="0 0 250 120"><text x="10" y="15"><tspan x="50" dy="20">'+valor+'</tspan></text></svg>';
   var e = '<g><text x="80" y="130" style="font-family:Arial;font-size:10px;font-style:italic;padding-top:5px;background:#F8F9F9;fill:black;border:1px;solid #d9d9d9;inline-size: 200px">'+valor+'</text></g>';
   return e;
   //https://www.w3.org/TR/SVG/text.html
 }


function pdf1(){

  var h = document.getElementById('h');
   var doc = new jsPDF();
   doc.fromHTML(h, 15,15);

   doc.save('output.pdf');
}






