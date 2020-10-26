//https://export.highcharts.com/
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
      debug("using standard XMLSerializer.serializeToString")
      return (new XMLSerializer()).serializeToString(svg);
    } else {
      debug("using custom XMLSerializerForIE");
      return XMLSerializerForIE(svg);
    }

  }

    function base64dataURLencode(s) {
    var b64 = "data:image/svg+xml;base64,";

    // https://developer.mozilla.org/en/DOM/window.btoa
    if (window.btoa) {
      debug("using window.btoa for base64 encoding");
      b64 += btoa(s);
    } else {
      debug("using custom base64 encoder");
      b64 += Base64.encode(s);
    }

    return b64;
  }



$( "#export" ).click(function() {

  var doc = new jsPDF('portrait', 'pt', 'a4', true);
  var elementHandler = {
    '#ignorePDF': function(element, renderer) {
      return true;
    }
  };

  var titulo = document.getElementById("page-title");
  doc.fromHTML(titulo, 15, 15, {
    'width': 560,
    'elementHandlers': elementHandler
  });

  var article = document.getElementById("article");
  doc.fromHTML(article, 25, 25, {
    'width': 560,
    'elementHandlers': elementHandler
  });

  var svg = document.querySelector('svg');
  var canvas = document.createElement('canvas');
  var canvasIE = document.createElement('canvas');
  var context = canvas.getContext('2d');
  var DOMURL = window.URL || window.webkitURL || window;
  var data = XMLSerialize(svg);
  //canvg(canvas, data);
  var svgBlob = new Blob([data], {
    type: 'image/svg+xml;charset=utf-8'
  });

  var url = DOMURL.createObjectURL(svgBlob);

  var img = new Image();
  img.onload = function() {
    context.canvas.width = $('#container').find('svg').width();;
    context.canvas.height = $('#container').find('svg').height();;
    context.drawImage(img, 0, 0);
      // freeing up the memory as image is drawn to canvas
      DOMURL.revokeObjectURL(url);

      var dataUrl;
            if (isIEBrowser()) { // Check of IE browser
              var svg = $('#container').highcharts().container.innerHTML;
              canvg(canvasIE, svg);
              dataUrl = canvasIE.toDataURL('image/JPEG');
            }
            else{
              dataUrl = canvas.toDataURL('image/jpeg');
            }
            doc.addImage(dataUrl, 'JPEG', 20, 300, 560, 350);

            var bottomContent = document.getElementById("article3");
            doc.fromHTML(bottomContent, 15, 650, {
              'width': 560,
              'elementHandlers': elementHandler
            });

            setTimeout(function() {
              doc.save('TestChart.pdf');
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
          else  //Other browser
          {
            console.log('Other Browser');
            ieBrowser = false;
          }

          return ieBrowser;
        };
 //https://export.highcharts.com/
