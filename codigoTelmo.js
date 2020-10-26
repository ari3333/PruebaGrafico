jQuery( document ).ready(function() {

	jQuery(".contenedor-general-inside").prepend("<div id='contenedor-produccion'></div>");
	jQuery("<div class='titu-produccion'>"+printTitulo("PRODUCCIÃ“N")+"</div>").prependTo(jQuery("#contenedor-produccion"));
	jQuery(".produccion-nacional").appendTo(jQuery("#contenedor-produccion"));
	jQuery(".produccion-internacional").appendTo(jQuery("#contenedor-produccion"));
	jQuery("<div class='titu-nacional'>"+printTitulo("Nacional")+"</div>").prependTo(jQuery(".produccion-nacional"));
	jQuery("<div class='titu-internacional'>"+printTitulo("Internacional")+"</div>").prependTo(jQuery(".produccion-internacional"));
	
	
	jQuery(".contenedor-general-inside").append("<div id='contenedor-industria'></div>");
	jQuery("<div class='titu-industria-uno'>"+printTitulo("INDUSTRIA")+"</div>").prependTo(jQuery("#contenedor-industria"));
	jQuery(".industria-comercio-industria").appendTo(jQuery("#contenedor-industria"));
	jQuery("<div class='titu-industria'>"+printTitulo("Industria")+"</div>").prependTo(jQuery(".industria-comercio-industria"));
	
	jQuery(".contenedor-general-inside").append("<div id='contenedor-comercio-exterior'></div>");
	jQuery("<div class='titu-comercio-exterior'>"+printTitulo("COMERCIO EXTERIOR")+"</div>").prependTo(jQuery("#contenedor-comercio-exterior"));
	jQuery(".comercio-exterior").appendTo(jQuery("#contenedor-comercio-exterior"));

	printLeyendas97();


	jQuery(".contenedor-general #contenedor-comercio-exterior").append("<a class='export-xls' style='float:left;margin:2em 5vw;'  onclick='pdf()'  href='#'>Descargar en formato PDF</a>");
	jQuery("#page-title h1").append("<a onclick='pdf()'  href='#'>Descargar en formato PDF</a>");
		
});


	var imagen1="";
	var imagen2="";

	getBase64Image('https://proyecto2.smartopendata.net/sites/default/files/cuadro-mando/img1.png',img1);
	getBase64Image('https://proyecto2.smartopendata.net/sites/default/files/cuadro-mando/img2.png',img2);
	
	function img1(blob){
		imagen1=blob;
	}
	function img2(blob){
		imagen2=blob;
	}


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

Highcharts.getSVG = function(charts) {

			var svgPag1 = [],
			svgPag2 = [],
			svgPag3 = [];


			var title="<text x='55' y='50' style='font-family:Arial;font-size:30;font-weight:bold;font-style:normal;fill:#0066cc;' text-anchor='middle' class='highcharts-titlex' zIndex='4'>SI</text>";
			title+="<text x='93' y='50' style='font-family:Arial;font-size:30;font-weight:bold;font-style:normal;fill:#288DC8;' text-anchor='middle' class='highcharts-titlex' zIndex='4'>Lac</text>";
			//title+="<text x='180' y='50' style='color:#0066cc;font-family:Arial;font-size:12;font-weight:normal;font-style:normal;fill:#0066cc;' text-anchor='middle' class='highcharts-titlex' zIndex='4'>Cuadro de mando</text>";
			title+="<rect x='40' y='60'  width='500' height='15' style='fill:#eaf0f2;stroke-width:0;stroke:rgb(0,0,0)' />";
			title+="<text x='45' y='72' style='color:#0066cc;font-family:Arial;font-size:12;font-weight:normal;font-style:normal;fill:#0F3E66;' class='highcharts-titlex' zIndex='4'>ProducciÃ³n</text>";
			title+="<text x='131' y='72' style='color:#0066cc;font-family:Arial;font-size:12;font-weight:normal;font-style:normal;fill:#0066cc;' text-anchor='middle' class='highcharts-titlex' zIndex='4'>nacional</text>";
			svgPag1.push(title);
			svgPag1.push(pintaChart(charts[0],20,125,0.45,null,null));
			svgPag1.push(pintaChart(charts[1],295,125,0.45,null,null));
			svgPag1.push(pintaChart(charts[2],20,400,0.45,null,null));
			svgPag1.push(pintaChart(charts[3],295,400,0.45,null,null));		
			var enlace = "<text x='50' y='810' style='color:#000;font-family:Arial;font-size:6;font-weight:normal;font-style:normal;fill:#0F3E66;'>Copyright Â© "+fechaHoy('year')+", Silac</text>";
			enlace+= "<text x='480' y='810' style='color:#000;font-family:Arial;font-size:6;font-weight:normal;font-style:normal;fill:#0F3E66;'>PÃ¡gina 1 de 3  - "+fechaHoy(null)+"</text>";
			svgPag1.push(enlace);




			var title="<text x='55' y='50' style='font-family:Arial;font-size:30;font-weight:bold;font-style:normal;fill:#0066cc;' text-anchor='middle' class='highcharts-titlex' zIndex='4'>SI</text>";
			title+="<text x='93' y='50' style='font-family:Arial;font-size:30;font-weight:bold;font-style:normal;fill:#288DC8;' text-anchor='middle' class='highcharts-titlex' zIndex='4'>Lac</text>";
			//title+="<text x='180' y='50' style='color:#0066cc;font-family:Arial;font-size:12;font-weight:normal;font-style:normal;fill:#0066cc;' text-anchor='middle' class='highcharts-titlex' zIndex='4'>Cuadro de mando</text>";
			title+="<rect x='40' y='60'  width='500' height='15' style='fill:#eaf0f2;stroke-width:0;stroke:rgb(0,0,0)' />";
			title+="<text x='45' y='72' style='color:#0066cc;font-family:Arial;font-size:12;font-weight:normal;font-style:normal;fill:#0F3E66;' class='highcharts-titlex' zIndex='4'>ProducciÃ³n</text>";
			title+="<text x='110' y='72' style='color:#0066cc;font-family:Arial;font-size:12;font-weight:normal;font-style:normal;fill:#0066cc;'  class='highcharts-titlex' zIndex='4'>internacional</text>";
			svgPag2.push(title);
			svgPag2.push(pintaChart(charts[4],20,95,0.45,null,null));
			svgPag2.push(pintaChart(charts[5],295,95,0.45,null,null));
			svgPag2.push(pintaChart(charts[6],20,320,0.45,null,null));
			svgPag2.push(pintaChart(charts[7],20,530,0.45,1150,520));	

			title="<text x='50' y='770' style='color:#0066cc;font-family:Arial;font-size:6;font-weight:normal;font-style:normal;fill:#E54C4C;'  class='highcharts-titlex' zIndex='4'>"+jQuery('.indicadores-sectoriales-libre97 .leyenda-aviso').text()+"</text>";			
			svgPag2.push(title);
			var enlace = "<text x='50' y='810' style='color:#000;font-family:Arial;font-size:6;font-weight:normal;font-style:normal;fill:#0F3E66;'>Copyright Â© "+fechaHoy('year')+", Silac</text>";
			enlace+= "<text x='480' y='810' style='color:#000;font-family:Arial;font-size:6;font-weight:normal;font-style:normal;fill:#0F3E66;'>PÃ¡gina 2 de 3  - "+fechaHoy(null)+"</text>";
			svgPag2.push(enlace);



			var title="<text x='55' y='50' style='font-family:Arial;font-size:30;font-weight:bold;font-style:normal;fill:#0066cc;' text-anchor='middle' class='highcharts-titlex' zIndex='4'>SI</text>";
			title+="<text x='93' y='50' style='font-family:Arial;font-size:30;font-weight:bold;font-style:normal;fill:#288DC8;' text-anchor='middle' class='highcharts-titlex' zIndex='4'>Lac</text>";
			//title+="<text x='180' y='50' style='color:#0066cc;font-family:Arial;font-size:12;font-weight:normal;font-style:normal;fill:#0066cc;' text-anchor='middle' class='highcharts-titlex' zIndex='4'>Cuadro de mando</text>";
			title+="<rect x='40' y='60'  width='500' height='15' style='fill:#eaf0f2;stroke-width:0;stroke:rgb(0,0,0)' />";
			title+="<text x='45' y='72' style='color:#0066cc;font-family:Arial;font-size:12;font-weight:normal;font-style:normal;fill:#0F3E66;' class='highcharts-titlex' zIndex='4'>Industria</text>";
			//title+="<text x='110' y='72' style='color:#0066cc;font-family:Arial;font-size:12;font-weight:normal;font-style:normal;fill:#0066cc;'  class='highcharts-titlex' zIndex='4'>internacional</text>";
			svgPag3.push(title);	
			svgPag3.push(pintaChart(charts[8],20,95,0.45,null,null));
			var cuadro="", textDatos="";
			cuadro="<g transform='translate(305,85) scale(1)'><rect  width='235' height='215' style='fill:#f4f4f4;stroke-width:0;stroke:rgb(0,0,0)' />"; 
			
			cuadro+="<text x='10' y='12' style='letter-spacing:95%;color:#000;font-family:Arial;font-size:6;font-weight:bold;font-style:normal;fill:#000;'>"+jQuery('.indicadores-sectoriales-libre43 h2').text()+"</text>";
			cuadro+="<text x='10' y='24' style='color:#000;font-family:Arial;font-size:6;font-weight:normal;font-style:normal;fill:#000;'>"+jQuery('.indicadores-sectoriales-libre43 div.views-field-field-inds-libre-fecha span.views-label-field-inds-libre-fecha').text()+" "+jQuery('.indicadores-sectoriales-libre43 div.views-field-field-inds-libre-fecha  span.date-display-single').text()+"</text>";

			var text = wordWrap(jQuery(".indicadores-sectoriales-libre43 .views-field-field-inds-libre-valor1 span span.literal").text(), 31,7,40);
			cuadro+="<g transform='translate(10,27)'><text x='0' y='0' style='text-transform:lowercase;color:#000;font-family:Arial;font-size:6;font-weight:normal;font-style:normal;fill:#000;'  text-anchor='middle' class='highcharts-titlex' zIndex='4'>"+text+"</text></g>";
			if (jQuery(".indicadores-sectoriales-libre43 .views-field-field-inds-libre-valor1 span span.contenedor span.sube").length>0){
				cuadro+="<g transform='translate(15,-5) scale(0.4)'><path x='5' y='1' style='fill:#00ff00;stroke:none;stroke-width:0.19382933px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' d='m 39.161541,150.26995 h 14.41705 c -0.45995,-0.71968 -6.12155,-8.6306 -7.31222,-10.27835 z' /></g>";
			}
			if (jQuery(".indicadores-sectoriales-libre43 .views-field-field-inds-libre-valor1 span span.contenedor span.baja").length>0){
				cuadro+="<g transform='translate(15,-5) scale(0.4)'><path x='5' y='1'  d='m 24.744491,139.9916 h 14.41705 c -0.45995,0.71968 -6.12155,8.6306 -7.31222,10.27835 z' style='fill:#ff0000;stroke:none;stroke-width:0.19382933px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /></g>";
			}	
			cuadro+="<text x='40' y='56' style='color:#000;font-family:Arial;font-size:11;font-weight:normal;font-style:normal;fill:#0066cc;'>"+jQuery('.indicadores-sectoriales-libre43 .views-field-field-inds-libre-valor1 span span.contenedor span.cifra').text()+"</text>";
			cuadro+="<text x='80' y='56' style='color:#000;font-family:Arial;font-size:6;font-weight:normal;font-style:normal;fill:#0066cc;'>"+jQuery('.indicadores-sectoriales-libre43 .views-field-field-inds-libre-valor1 span span.contenedor span.unidad').text()+"</text>";
			
			var text = wordWrap(jQuery(".indicadores-sectoriales-libre43 .views-field-field-inds-libre-valor2 span span.literal").text(), 31,7,40);
			cuadro+="<g transform='translate(135,27)'><text x='0' y='0' style='text-transform:lowercase;color:#000;font-family:Arial;font-size:6;font-weight:normal;font-style:normal;fill:#000;'  text-anchor='middle' class='highcharts-titlex' zIndex='4'>"+text+"</text></g>";			
			if (jQuery(".indicadores-sectoriales-libre43 .views-field-field-inds-libre-valor2 span span.contenedor span.sube").length>0){
				cuadro+="<g transform='translate(140,-5) scale(0.4)'><path x='5' y='1' style='fill:#00ff00;stroke:none;stroke-width:0.19382933px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' d='m 39.161541,150.26995 h 14.41705 c -0.45995,-0.71968 -6.12155,-8.6306 -7.31222,-10.27835 z' /></g>";
			}
			if (jQuery(".indicadores-sectoriales-libre43 .views-field-field-inds-libre-valor2 span span.contenedor span.baja").length>0){
				cuadro+="<g transform='translate(140,-5) scale(0.4)'><path x='5' y='1'  d='m 24.744491,139.9916 h 14.41705 c -0.45995,0.71968 -6.12155,8.6306 -7.31222,10.27835 z' style='fill:#ff0000;stroke:none;stroke-width:0.19382933px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /></g>";
			}
			cuadro+="<text x='165' y='56' style='color:#000;font-family:Arial;font-size:11;font-weight:normal;font-style:normal;fill:#4cbf5f;'>"+jQuery('.indicadores-sectoriales-libre43 .views-field-field-inds-libre-valor2 span span.contenedor span.cifra').text()+"</text>";
			cuadro+="<text x='200' y='56' style='color:#000;font-family:Arial;font-size:6;font-weight:normal;font-style:normal;fill:#4cbf5f;'>"+jQuery('.indicadores-sectoriales-libre43 .views-field-field-inds-libre-valor2 span span.contenedor span.unidad').text()+"</text>";
			

			
			
			
			cuadro+="<text x='10' y='80' style='letter-spacing:95%;color:#000;font-family:Arial;font-size:6;font-weight:bold;font-style:normal;fill:#000;'>"+jQuery('.indicadores-sectoriales-libre78 h2').text()+"</text>";			
			cuadro+="<text x='10' y='92' style='color:#000;font-family:Arial;font-size:6;font-weight:normal;font-style:normal;fill:#000;'>"+jQuery('.indicadores-sectoriales-libre78 div.views-field-field-inds-libre-fecha span.views-label-field-inds-libre-fecha').text()+" "+jQuery('.indicadores-sectoriales-libre78 div.views-field-field-inds-libre-fecha  span.date-display-single').text()+"</text>";
			if (jQuery(".indicadores-sectoriales-libre78 .views-field-field-inds-libre-valor1 span span.contenedor span.sube").length>0){
				cuadro+="<g transform='translate(15,65) scale(0.4)'><path x='5' y='1' style='fill:#00ff00;stroke:none;stroke-width:0.19382933px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' d='m 39.161541,150.26995 h 14.41705 c -0.45995,-0.71968 -6.12155,-8.6306 -7.31222,-10.27835 z' /></g>";
			}
			if (jQuery(".indicadores-sectoriales-libre78 .views-field-field-inds-libre-valor1 span span.contenedor span.baja").length>0){
				cuadro+="<g transform='translate(15,65) scale(0.4)'><path x='5' y='1'  d='m 24.744491,139.9916 h 14.41705 c -0.45995,0.71968 -6.12155,8.6306 -7.31222,10.27835 z' style='fill:#ff0000;stroke:none;stroke-width:0.19382933px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /></g>";
			}			
			cuadro+="<text x='40' y='126' style='color:#000;font-family:Arial;font-size:11;font-weight:normal;font-style:normal;fill:#0066cc;'>"+jQuery('.indicadores-sectoriales-libre78 .views-field-field-inds-libre-valor1 span span.contenedor span.cifra').text()+"</text>";
			cuadro+="<text x='80' y='126' style='color:#000;font-family:Arial;font-size:6;font-weight:normal;font-style:normal;fill:#0066cc;'>"+jQuery('.indicadores-sectoriales-libre78 .views-field-field-inds-libre-valor1 span span.contenedor span.unidad').text()+"</text>";
		    
			var text = wordWrap(jQuery(".indicadores-sectoriales-libre78 .views-field-field-inds-libre-valor2 span span.literal").text(), 31,7,45);
			cuadro+="<g transform='translate(130,97)'><text x='0' y='0' style='text-transform:lowercase;color:#000;font-family:Arial;font-size:6;font-weight:normal;font-style:normal;fill:#000;'  text-anchor='middle' class='highcharts-titlex' zIndex='4'>"+text+"</text></g>";				

			if (jQuery(".indicadores-sectoriales-libre78 .views-field-field-inds-libre-valor2 span span.contenedor span.sube").length>0){
				cuadro+="<g transform='translate(140,65) scale(0.4)'><path x='5' y='1' style='fill:#00ff00;stroke:none;stroke-width:0.19382933px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' d='m 39.161541,150.26995 h 14.41705 c -0.45995,-0.71968 -6.12155,-8.6306 -7.31222,-10.27835 z' /></g>";
			}
			if (jQuery(".indicadores-sectoriales-libre78 .views-field-field-inds-libre-valor2 span span.contenedor span.baja").length>0){
				cuadro+="<g transform='translate(140,65) scale(0.4)'><path x='5' y='1'  d='m 24.744491,139.9916 h 14.41705 c -0.45995,0.71968 -6.12155,8.6306 -7.31222,10.27835 z' style='fill:#ff0000;stroke:none;stroke-width:0.19382933px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /></g>";
			}						
			cuadro+="<text x='165' y='126' style='color:#000;font-family:Arial;font-size:11;font-weight:normal;font-style:normal;fill:#4cbf5f;'>"+jQuery('.indicadores-sectoriales-libre78 .views-field-field-inds-libre-valor2 span span.contenedor span.cifra').text()+"</text>";
			cuadro+="<text x='200' y='126' style='color:#000;font-family:Arial;font-size:6;font-weight:normal;font-style:normal;fill:#4cbf5f;'>"+jQuery('.indicadores-sectoriales-libre78 .views-field-field-inds-libre-valor2 span span.contenedor span.unidad').text()+"</text>";
			
			
			

			cuadro+="<text x='10' y='150' style='letter-spacing:95%;color:#000;font-family:Arial;font-size:6;font-weight:bold;font-style:normal;fill:#000;'>"+jQuery('.indicadores-sectoriales-libre83 h2').text()+"</text>";			
			cuadro+="<text x='10' y='162' style='color:#000;font-family:Arial;font-size:6;font-weight:normal;font-style:normal;fill:#000;'>"+jQuery('.indicadores-sectoriales-libre83 div.views-field-field-inds-libre-fecha span.views-label-field-inds-libre-fecha').text()+" "+jQuery('.indicadores-sectoriales-libre83 div.views-field-field-inds-libre-fecha  span.date-display-single').text()+"</text>";			
			
			if (jQuery(".indicadores-sectoriales-libre83 .views-field-field-inds-libre-valor1 span span.contenedor span.sube").length>0){
				cuadro+="<g transform='translate(15,135) scale(0.4)'><path x='5' y='1' style='fill:#00ff00;stroke:none;stroke-width:0.19382933px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' d='m 39.161541,150.26995 h 14.41705 c -0.45995,-0.71968 -6.12155,-8.6306 -7.31222,-10.27835 z' /></g>";
			}
			if (jQuery(".indicadores-sectoriales-libre83 .views-field-field-inds-libre-valor1 span span.contenedor span.baja").length>0){
				cuadro+="<g transform='translate(15,135) scale(0.4)'><path x='5' y='1'  d='m 24.744491,139.9916 h 14.41705 c -0.45995,0.71968 -6.12155,8.6306 -7.31222,10.27835 z' style='fill:#ff0000;stroke:none;stroke-width:0.19382933px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /></g>";
			}	
			
			cuadro+="<text x='40' y='196' style='color:#000;font-family:Arial;font-size:11;font-weight:normal;font-style:normal;fill:#0066cc;'>"+jQuery('.indicadores-sectoriales-libre83 .views-field-field-inds-libre-valor1 span span.contenedor span.cifra').text()+"</text>";
			cuadro+="<text x='80' y='196' style='color:#000;font-family:Arial;font-size:6;font-weight:normal;font-style:normal;fill:#0066cc;'>"+jQuery('.indicadores-sectoriales-libre83 .views-field-field-inds-libre-valor1 span span.contenedor span.unidad').text()+"</text>";
			  			
			var text = wordWrap(jQuery(".indicadores-sectoriales-libre83 .views-field-field-inds-libre-valor2 span span.literal").text(), 31,7,45);
			cuadro+="<g transform='translate(130,165)'><text x='0' y='0' style='text-transform:lowercase;color:#000;font-family:Arial;font-size:6;font-weight:normal;font-style:normal;fill:#000;'  text-anchor='middle' class='highcharts-titlex' zIndex='4'>"+text+"</text></g>";				
			
			if (jQuery(".indicadores-sectoriales-libre83 .views-field-field-inds-libre-valor2 span span.contenedor span.sube").length>0){
				cuadro+="<g transform='translate(140,135) scale(0.4)'><path x='5' y='1' style='fill:#00ff00;stroke:none;stroke-width:0.19382933px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' d='m 39.161541,150.26995 h 14.41705 c -0.45995,-0.71968 -6.12155,-8.6306 -7.31222,-10.27835 z' /></g>";
			}
			if (jQuery(".indicadores-sectoriales-libre83 .views-field-field-inds-libre-valor2 span span.contenedor span.baja").length>0){
				cuadro+="<g transform='translate(140,135) scale(0.4)'><path x='5' y='1'  d='m 24.744491,139.9916 h 14.41705 c -0.45995,0.71968 -6.12155,8.6306 -7.31222,10.27835 z' style='fill:#ff0000;stroke:none;stroke-width:0.19382933px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1' /></g>";
			}						
			cuadro+="<text x='165' y='196' style='color:#000;font-family:Arial;font-size:11;font-weight:normal;font-style:normal;fill:#4cbf5f;'>"+jQuery('.indicadores-sectoriales-libre83 .views-field-field-inds-libre-valor2 span span.contenedor span.cifra').text()+"</text>";
			cuadro+="<text x='200' y='196' style='color:#000;font-family:Arial;font-size:6;font-weight:normal;font-style:normal;fill:#4cbf5f;'>"+jQuery('.indicadores-sectoriales-libre83 .views-field-field-inds-libre-valor2 span span.contenedor span.unidad').text()+"</text>";
			cuadro+="<text x='20' y='208' style='color:#000;font-family:Arial;font-size:4;font-weight:normal;font-style:normal;fill:#4d565b;'>"+jQuery('.indicadores-sectoriales-libre83 .views-field-field-inds-literales-resumen-1 li').text()+"</text>";
			
			
			cuadro+="</g>";
			svgPag3.push(cuadro);
	
			title="<rect x='40' y='350'  width='500' height='15' style='fill:#eaf0f2;stroke-width:0;stroke:rgb(0,0,0)' />";
			title+="<text x='45' y='360' style='color:#0066cc;font-family:Arial;font-size:12;font-weight:normal;font-style:normal;fill:#0F3E66;' class='highcharts-titlex' zIndex='4'>Comercio exterior</text>";
			svgPag3.push(title);

	
 
 
 
			var img = jQuery('#grafica-comercio-exterior-1 img.imageblock-image'); 
			var res =  resize(parseInt(img.prop("height")), parseInt(img.prop("width")),250);
			var text = wordWrap(jQuery("#grafica-comercio-exterior-1 h2").text(), 81,7,120);
			var CEImg="<g transform='translate(25,400)'><text x='0' y='0' style='color:#000;font-family:Arial;font-size:6;font-weight:normal;font-style:normal;fill:#000;'  text-anchor='middle' class='highcharts-titlex' zIndex='4'>"+text+"</text><image style='outline: 1px solid #B8D5E6;' preserveAspectRatio='none' x='0' y='20' width='"+res[0]+"' height='"+res[1]+"' xlink:href='"+imagen1+"'></image></g>";
			svgPag3.push(CEImg);
			cuadro="<text x='85' y='"+eval(res[1]+430)+"' style='color:#000;font-family:Arial;font-size:6;font-weight:normal;font-style:normal;fill:#0066cc;'>"+jQuery('#grafica-comercio-exterior-1 .block-body').text()+"</text>";
			svgPag3.push(cuadro);
			
			

			img = jQuery('#grafica-comercio-exterior-2 img.imageblock-image'); 
			res =  resize(parseInt(img.prop("height")), parseInt(img.prop("width")),250);
			text = wordWrap(jQuery("#grafica-comercio-exterior-2 h2").text(), 81,7,120);
			CEImg="<g transform='translate(300,400)'><text x='0' y='0' style='color:#000;font-family:Arial;font-size:6;font-weight:normal;font-style:normal;fill:#000;'  text-anchor='middle' class='highcharts-titlex' zIndex='4'>"+text+"</text><image style='outline: 1px solid #B8D5E6;' preserveAspectRatio='none' x='0' y='20' width='"+res[0]+"' height='"+res[1]+"' xlink:href='"+imagen2+"'></image></g>";
			svgPag3.push(CEImg);
			cuadro="<text x='360' y='"+eval(res[1]+430)+"' style='color:#000;font-family:Arial;font-size:6;font-weight:normal;font-style:normal;fill:#0066cc;'>"+jQuery('#grafica-comercio-exterior-2 .block-body').text()+"</text>";
			svgPag3.push(cuadro);

			
			var enlace = "<text x='50' y='810' style='color:#000;font-family:Arial;font-size:6;font-weight:normal;font-style:normal;fill:#0F3E66;'>Copyright Â© "+fechaHoy('year')+", Silac</text>";
			enlace+= "<text x='480' y='810' style='color:#000;font-family:Arial;font-size:6;font-weight:normal;font-style:normal;fill:#0F3E66;'>PÃ¡gina 3 de 3  - "+fechaHoy(null)+"</text>";
			svgPag3.push(enlace);
			
			
			return '<svg height="842" width="595" version="1.1" xmlns="http://www.w3.org/2000/svg">' + 	svgPag1.join('') + '</svg><svg height="842" width="595" version="1.1" xmlns="http://www.w3.org/2000/svg">' + 	svgPag2.join('') + '</svg><svg height="842" width="595" version="1.1" xmlns="http://www.w3.org/2000/svg">' + 	svgPag3.join('') + '</svg>';
			

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


function getBase64Image(img, callback) {


	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200){

			var reader = new FileReader();
			reader.onload = function(){
				var dataURL = reader.result;
				//console.log(dataURL );
				callback(dataURL.toString());
			};
			reader.readAsDataURL(this.response);	      		   
		}
	}
	xhr.open('GET', img);
	xhr.responseType = 'blob';
	xhr.send();   
      
}


function pdf() {
	
	var chart1 = jQuery('.indicadores-sectoriales-decimal72 #chart-indicador-sectorial-decimal--page').highcharts();
	var chart2 = jQuery('.indicadores-sectoriales-libre96 #chart-indicador-sectorial-libre--page').highcharts();
	var chart3 = jQuery('.indicadores-sectoriales-libre67 #chart-indicador-sectorial-libre--page').highcharts();	
	var chart4 = jQuery('.indicadores-sectoriales-libre98 #chart-indicador-sectorial-libre--page').highcharts();	

	var chart5 = jQuery('.indicadores-sectoriales-libre46 #chart-indicador-sectorial-libre--page').highcharts();
	var chart6 = jQuery('.indicadores-sectoriales-libre48 #chart-indicador-sectorial-libre--page').highcharts();	

	var chart7 = jQuery('.indicadores-sectoriales-libre60 #chart-indicador-sectorial-libre--page').highcharts();
	var chart8 = jQuery('.indicadores-sectoriales-libre97 #chart-indicador-sectorial-libre--page').highcharts();	

	var chart9 = jQuery('.indicadores-sectoriales-libre69 #chart-indicador-sectorial-libre--page').highcharts();	

	Highcharts.setOptions({
			  exporting: {
				fallbackToExportServer: false
			  }
	});
	
  Highcharts.exportCharts([chart1, chart2, chart3, chart4, chart5, chart6, chart7, chart8, chart9], {
    type: 'application/pdf'
  });
};




jQuery( document ).ajaxComplete(function( event, xhr, settings ) {
	var test = settings.url;
	if( test.indexOf('/indicadores_sectoriales_ajax/67') >= 0){
	 //console.log(settings.url );
	// printLeyendas67();
	}
	if( test.indexOf('/indicadores_sectoriales_ajax/97') >= 0){
	 //console.log(settings.url );
	 printLeyendas97();
	}
});





function  printLeyendas67() {
	var ts = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
    ts.textContent = ' (*)';
    ts.setAttribute('fill', 'red');
    jQuery('.indicadores-sectoriales-libre67 svg .highcharts-title').append(ts);
    
	var t = document.createElement("span");
    t.setAttribute('class', 'leyenda-aviso');
    t.setAttribute('style', 'color:red;font-size:0.7em');
	t.innerHTML = '* EMC: Energy Corrected Milk: EstandarizaciÃ³n de leche a 4% de grasa y 3,3% de proteina';
	jQuery(t).clone().appendTo(jQuery('.indicadores-sectoriales-libre67'));

}
function  printLeyendas97() {
	var ts = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
    ts.textContent = ' (*)';
    ts.setAttribute('fill', 'red');
    jQuery('.indicadores-sectoriales-libre97 svg .highcharts-title').append(ts);
    
	var t = document.createElement("span");
    t.setAttribute('class', 'leyenda-aviso');
    t.setAttribute('style', 'color:red;font-size:0.7em');
	t.innerHTML = '* EMC: Energy Corrected Milk: EstandarizaciÃ³n de leche a 4% de grasa y 3,3% de proteina';
	jQuery(t).clone().appendTo(jQuery('.indicadores-sectoriales-libre97'));
}




function  printTitulo(titulo) {
	
	var svgTxt="<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='50px' height='700px' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid meet'><text fill='black' x='389.276' y='44.595' id='e2_texte' style='font-family: Arial; font-size: 20px;' transform='matrix(-0.00404184 -2.17059 2.17059 -0.00404184 -47.4095 854.244)'>"+titulo+"</text></svg>";
	return svgTxt;
}
