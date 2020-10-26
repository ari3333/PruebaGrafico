//https://export.highcharts.com/
//https://embed.plnkr.co/plunk/LTZHOc          ejemplo importante
//https://www.highcharts.com/docs/export-module/client-side-export    informacion de cosa utilizar
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

function XMLSerialize(svg) {

    // quick-n-serialize an SVG dom, needed for IE9 where there's no XMLSerializer nor SVG.xml
    // s: SVG dom, which is the <svg> elemennt
    function XMLSerializerForIE(s) {
      var out = "";

      out += "<" + s.nodeName;
      for (var n = 0; n < s.attributes.length; n++) {
        out += " " + s.attributes[n].name + "=" + "'" + s.attributes[n].value + "'";
      }

      if (s.hasChildNodes()) {
        out += ">\n";

        for (var n = 0; n < s.childNodes.length; n++) {
          out += XMLSerializerForIE(s.childNodes[n]);
        }

        out += "</" + s.nodeName + ">" + "\n";

      } else out += " />\n";

      return out;
    }

    if (window.XMLSerializer) {
      //debug("using standard XMLSerializer.serializeToString")
      return (new XMLSerializer()).serializeToString(svg);
    } else {
     // debug("using custom XMLSerializerForIE");
     return XMLSerializerForIE(svg);
   }
 }

 $( "#export" ).click(function() {

   var doc = new jsPDF('portrait', 'pt', 'a4', true);
   var elementHandler = {
     '#ignorePDF': function(element, renderer) {
       return true;
     }
   };
   doc.setFontSize(20);
   doc.setTextColor(0, 102, 204 );
   doc.text('TILAC',15,20);
   doc.setTextColor(100);


/*var img1 = '';
var img2 = '';
html2canvas(document.querySelector("#page-title")).then(canvas => {
   img1 = canvas.toDataURL('image/png');
   html2canvas(document.querySelector("#valor")).then(canvas => {
      img2 = canvas.toDataURL('image/png');
      doc.addImage(img1, 'JPEG', 20, 60);
      //doc.addPage();//aqui hago un salto de pagina, una imagen en cada pagina
      doc.addImage(img2, 'JPEG', 20, 80);
   });
 });*/
doc.addHTML($('#valor').html(), 15, 60, {
   'width': 250,
   'elementHandlers': elementHandler
 });
 var article = document.getElementById("des1");
 doc.fromHTML($('#des1').html(), 300, 60, {
   'width': 250,
   'elementHandlers': elementHandler
 });

 var svg = document.querySelector('svg');
 var canvas = document.createElement('canvas');
 var canvasIE = document.createElement('canvas');
 var context = canvas.getContext('2d');
 var DOMURL = window.URL || window.webkitURL || window;
 var data = XMLSerialize(svg);
  canvg(canvas, data);
  var svgBlob = new Blob([data], {
    type: 'image/svg+xml;charset=utf-8'
  });

  var url = DOMURL.createObjectURL(svgBlob);  //crea un DOMString

  console.log('url: '+ url);

    var img = new Image();
    img.onload = function() {
      context.canvas.width = $('#container').find('svg').width();
      context.canvas.height = $('#container').find('svg').height();
      context.drawImage(img, 0, 0);
      // liberando la memoria a medida que la imagen se dibuja en el lienzo
      DOMURL.revokeObjectURL(url);

      var dataUrl;
            if (isIEBrowser()) { // Comprobación del navegador IE
              var svg = $('#container').highcharts().container.innerHTML;
              canvg(canvasIE, svg);
              dataUrl = canvasIE.toDataURL('image/JPEG');
            }
            else{
              dataUrl = canvas.toDataURL('image/jpeg');
            }
            doc.addImage(dataUrl, 'JPEG', 20, 250, 560, 250);

             doc.page = 1; // use this as a counter.
              var totalPages = 1; // define total amount of pages
              // HEADER
              doc.setFontSize(20);
              // FOOTER
              var str = "Page " + doc.page; doc.setFontSize(10);
              doc.text(str, 50, doc.internal.pageSize.height - 10);
              setTimeout(function() {
                doc.save('Silac.pdf');
              }, 2000);
            };
            img.src = url;

});


 function isIEBrowser(){
   var ieBrowser;
   var ua = window.navigator.userAgent;
   var msie = ua.indexOf("MSIE ");

          if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // Internet Explorer
          {
            ieBrowser = true;
          }
          else  //Otro navegador
          {
            console.log('Otro navegador');
            ieBrowser = false;
          }

          return ieBrowser;
        };
 //https://export.highcharts.com/

