$('#export').click(function() {
  drawInlineSVG($('#contenedor').highcharts().getSVG(), "chart_exchange_canvas", function(contenedor) {
	console.log(contenedor);
	build_pdf(contenedor);
  });
});


function build_pdf(contenedor) {
	//var docDefinition = { image: contenedor };
	var docDefinition = {
		content: [
			{text: 'Descargado' },
			{ image: contenedor, width: 600 },
		]
	};
	pdfMake.createPdf(docDefinition).download('pdfName.pdf');
}

function drawInlineSVG(svgElement, canvas_id, callback) {
  var can = document.getElementById(canvas_id);
  var ctx = can.getContext('2d');

  var img = new Image();
  img.setAttribute('src', 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgElement))));
  img.onload = function() {
    ctx.drawImage(img, 0, 0);
    callback(can.toDataURL("image/png"));
  }
}

window.addEventListener('load', function(){
		Highcharts.chart('contenedor',{
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

