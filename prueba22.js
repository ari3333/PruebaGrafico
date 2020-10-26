var myChart = Highcharts.chart('container',{
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
function downloadPDF() {

  const doc = new jsPDF('portrait', 'pt', 'a4', true);
  var width = doc.internal.pageSize.getWidth();
  console.log(width);

  var height = doc.internal.pageSize.getHeight();
   console.log(height);
  let aspectRatioA4 = width / height;
   doc.setFontSize(20);
   doc.setTextColor(0, 102, 204 );
   doc.text('TILAC',15,40);
   doc.setTextColor(100);
  var img1 = '';
  var img2 = '';
  var img3 = '';

  html2canvas(document.getElementById('page-title'), {
    onrendered: function(canvas){
      img1 = canvas.toDataURL('image/png');
      doc.addImage(img1, 'JPEG', 20, 60, 560, 25);
      html2canvas(document.getElementById('valor'), {
        onrendered: function(canvas){
          img2 = canvas.toDataURL('image/png');
          doc.addImage(img2, 'JPEG', 20, 100);
          html2canvas(document.getElementById('des1'), {

            onrendered: function(canvas){
              img3 = canvas.toDataURL('image/png');
              console.log(img3);
              doc.addImage(img3, 'JPEG', 27, 100, ancho);
              html2canvas(document.getElementById('container'), {
                onrendered: function(canvas){

           //img3 = canvas.toDataURL('image/png');

      //doc.addPage();//aqui hago un salto de pagina, una imagen en cada pagina

     // doc.addImage(img3, 'JPEG', 300, 80);

      //chart
      var chart = $("#container").highcharts();
      var svg = chart.getSVG({
        exporting: {
          sourceWidth: chart.chartWidth,
          sourceHeight: chart.chartHeight
        }
      });
      //var mycanvas = document.createElement("canvas");
      canvg(canvas, svg);
      var imgtest = canvas.toDataURL("image/PNG");
      doc.addImage(canvas.toDataURL("image/PNG"), "JPG", 20, 280, 560, 300);

      //fin chart
      html2canvas(document.getElementById('article3'), {
        onrendered: function(canvas){
          var img4 = canvas.toDataURL('image/png');
          doc.addImage(img4, 'JPEG', 20, 550);

      //var img = canvas.toDataURL('image/PNG');
      //doc.addImage(img, 'JPG',20, 20);
      doc.save('test.pdf');
    }
  });
    }
  });
            }
          });
        }
      });
       }
      });

    }

