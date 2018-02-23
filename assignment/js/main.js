
$(document).ready(function() {
  // Modify labels
  $("#text-label1").text('Data URL');
  $("#text-label2").text('Latitude Key');
  $("#text-label3").text('Longitude Key');
  $("#plot-button").text('Finish');

 // Tell user what to enter
  $("#text-input1").val('Enter URL Path');
  $("#text-input2").val('Enter Latitude Key');
  $("#text-input3").val('Enter Longitude Key');

  // Allow user input1
  $("#text-input1").prop('disabled', false);
  $("#text-input2").prop('disabled', false);
  $("#text-input3").prop('disabled', false);

  // Prevent error before user enter anything
  var url;
  var lat;
  var lon;
  // Get user input
  var getInput = function(){
    url = $("#text-input1").val();
    lat = $("#text-input2").val();
    lon = $("#text-input3").val();
  };
//code from Week 4 Lab 2 Part 2 part2-app-state.js in this space
var parseData = function(data){return JSON.parse(data);
};

var makeMarkers = function(data) {return _.map(data, function(obj){return L.marker([obj.Y,obj.X]);
});
};

var plotMarkers = function(data) {return _.map(data, function(mark){return mark.addTo(map);
});
};
/*=============================
var removeMarkers = function(data) {return _.each(data, function(mark){map.removeLayer(mark);
});
};

var makeNew = function (object) {
  return _.map (object, function (item) {
    if (item.YEARBUILT >= 2008) {
    return L.marker ([item.LAT, item.LONG_]);
  }
  });
};

var newMarkers = function (list){
  return _.map (list, function (marker) {
    if (item.YEARBUILT >= 2008) {
    marker.addTo(map);
  }
});
};
========================*/
/* =====================
 BUTTON CLICK RESULT
===================== */

var plotIt = function(){
  // Call function to get all user input
  getInput();
  // Get data from user input
  var downloadData = $.ajax(url);
  // Plot markers using functions
  downloadData.done(function(data) {
    var parsed = parseData(data);
    var markers = makeMarkers(parsed);
    plotMarkers(markers);
  });
};

$("#plot-button").click(function() {
  plotIt();
});

/* =====================
 Leaflet setup - feel free to ignore this
===================== */

var map = L.map('map', {
  center: [39.9522, -75.1639],
  zoom: 14
});
var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

/* =====================
 CODE EXECUTED HERE!
===================== */

//downloadData.done(function(data) {
  //var parsed = parseData(data);
  //var markers = makeMarkers(parsed);
  //plotMarkers(markers);
  //removeMarkers(markers);
});
