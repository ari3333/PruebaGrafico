(function($){

var title ="", valor="", cuadro="";
var contador=1;
$( document ).ready(function() {

	$("#page-title").append("<a id='link-pdf' href='#'>Descargar en formato PDF</a>");
	title = $("#page-title h1").text();
	valor = $("div.views-row .views-row-1 .views-row-odd .views-row-first .views-row-last").text();
	//console.log($("div.views-row .views-row-1 .views-row-odd .views-row-first .views-row-last").text());
	//console.log($("div.views-field .views-field-body").text());

	//console.log($("div.views-row .views-row-1 .views-row-add .views-row-first .views-row-last").text());
	//console.log($("div.views-field .views-field-field-inds-libre-valor1"));

	printValor();
});

$(document).on("click", "#link-pdf", function () {
	pdf();
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



Highcharts.getSVG = function(charts) {
  svgPag1 = [];

  svgPag1.push(printLogo());
  svgPag1.push(printTitulo(title));

  var cuadro="", textDatos="";
  var text = $("div.views-row .views-row-1 .views-row-odd .views-row-first .views-row-last").text();
	svgPag1.push(printValor());
    svgPag1.push(pintaChart(charts[0],20,400,0.45,1150,null));

  svgPag1.push(printFooter());
  return '<svg height="842" width="595" version="1.1" xmlns="http://www.w3.org/2000/svg">' + svgPag1.join('') + '</svg>';

};

//if ("div.views.field .views-field-field-inds-libre-valor1") {}
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

function resize(height,width,newWidth){
  var proportion = newWidth/width;
  var newHeight = height * proportion;
    return [newWidth,newHeight];
}

function wordWrap(text,boundary,y,x) {
    return "<tspan dy='"+y+"' x='"+x+"'>"+text.split("\n").map(function(line) {
        var pos = 0;
        return line.split(/\b/).map(function(word) {
            pos += word.length;
            if(pos > boundary) {
                pos = 0;
                return "</tspan><tspan dy='"+y+"' x='"+x+"'>" + word.trimLeft()  ;
            }
            return word ;
        }).join("")+"</tspan>";
    }).join("<tspan dy='"+y+"' x='"+x+"'>");
}

if(typeof String.prototype.trimLeft !== 'function') {
    String.prototype.trimLeft = function() {
        return this.replace(/^\s+/,"");
    }
}

Highcharts.exportCharts = function(charts, options) {

  options = Highcharts.merge(Highcharts.getOptions().exporting, options);

  Highcharts.post(options.url, {
    filename: options.filename || 'Silac_cuadro_mando',
    type: options.type,
    width: options.width,
    svg: Highcharts.getSVG(charts)
  });
};

function pdf() {

 var chart1 = $('div.charts-highchart.chart.charts-highchart-processed').highcharts();


  Highcharts.setOptions({
    exporting: {
      fallbackToExportServer: false
    }
  });
  Highcharts.exportCharts([chart1], {
    type: 'application/pdf'
  });

};

jQuery( document ).ajaxComplete(function( event, xhr, settings ) {
	var test = settings.url;
	if( test.indexOf('/indicadores_sectoriales_ajax/67') >= 0){

	}
	if( test.indexOf('/indicadores_sectoriales_ajax/97') >= 0){
	 printLeyendas97();
	}
});




function printLogo() {
  var enlace="<text x='55' y='50' style='font-family:Arial;font-size:30;font-weight:bold;font-style:normal;fill:#0066cc;' text-anchor='middle' class='highcharts-titlex' zIndex='4'>SI</text>";
  enlace+="<text x='93' y='50' style='font-family:Arial;font-size:30;font-weight:bold;font-style:normal;fill:#288DC8;' text-anchor='middle' class='highcharts-titlex' zIndex='4'>Lac</text>";
  return enlace;
}

function printFooter(){
  var pie = "<text x='50' y='810' style='color:#000;font-family:Arial;font-size:6;font-weight:normal;font-style:normal;fill:#0F3E66;'>Copyright Â© "+fechaHoy('year')+", Silac</text>";
  pie+= "<text x='480' y='810' style='color:#000;font-family:Arial;font-size:6;font-weight:normal;font-style:normal;fill:#0F3E66;'>PÃ¡gina 1 - "+fechaHoy(null)+"</text>";
  return pie;
}


function printTitulo(titulo){

	 var svgTxt ="<rect x='40' y='60'  width='500' height='15' style='fill:#0b4174;stroke-width:0;stroke:rgb(0,0,0)'/>";
	 svgTxt+="<text x='42' y='70' style='color:#0066cc;font-family:Verdana;font-size:7;font-style:normal;fill:#FDFEFE;' text-anchor='start' class='highcharts-titlex' zIndex='4'>"+titulo+"</text>";

	return svgTxt;
}

function printValor(){

	$("#bloque-datos div.view-indicador-sectorial-libre div.views-field ").each(function(){

		//console.log($('div.views-field-field-inds-libre-valor').text());//#bloque-datos div.views-field.views-field-field-inds-decimal-valor1

			cuadro="<g id='g1' transform='translate(40,90) scale(1)'><rect  width='235' height='170' style='fill:#f4f4f4;stroke-width:0;stroke:rgb(0,0,0)' />";

			cuadro+="<text x='10' y='12' style='color:#000;font-family:Verdana;font-size:8;font-style:normal;fill:#566573 ;'>"+$('div.views-field-field-inds-libre-fecha').text()+"</text>";

			$("div.views-field-field-inds-libre-valor"+contador).each(function() {

					var element = $(this);
					console.log(element.text());

					cuadro+="<g transform='translate(40,80)'><text x='10' y='12' style='text-transform:lowercase;color:#000;font-family:Verdana;font-size:6;font-weight:normal;font-style:normal;fill:#566573;' text-anchor='middle' class='highcharts-titlex' zIndex='4'>"+element.text()+"<tspan x='10' y='45' style='fill:#00ff00;stroke:none;stroke-width:0.19382933px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' d='m 39.161541,150.26995 h 14.41705 c -0.45995,-0.71968 -6.12155,-8.6306 -7.31222,-10.27835 z'>"+element.text()+"</tspan></text></g>";

					contador++;

			});

			cuadro+="</g>";


	});
	return cuadro;
}

})(jQuery);









