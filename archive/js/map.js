function doInitMap() {
    
    var myLatLng = {lat: parseFloat('49.988358'), lng: parseFloat('36.232845')};
    var markerColor = '#1d6df8';
    // Create a map object and specify the DOM element
    // for display.
    var map = new google.maps.Map(document.getElementById('googleMap'), {
      center: myLatLng,
      zoom: 16,
      disableDefaultUI: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: [
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    }
                ]
            }
        ]
    });
    var svg = [
        '<?xml version="1.0"?>',
            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 511.999 511.999" style="enable-background:new 0 0 511.999 511.999;" xml:space="preserve">',
            '<path style="fill:'+ markerColor +'" d="M454.848,198.848c0,159.225-179.751,306.689-179.751,306.689c-10.503,8.617-27.692,8.617-38.195,0  c0,0-179.751-147.464-179.751-306.689C57.153,89.027,146.18,0,256,0S454.848,89.027,454.848,198.848z"/>',
            '<path style="fill:#FFF;" d="M256,298.89c-55.164,0-100.041-44.879-100.041-100.041S200.838,98.806,256,98.806  s100.041,44.879,100.041,100.041S311.164,298.89,256,298.89z"/>',
            '<g>',
            '</g>',
            '<g>',
            '</g>',
            '<g>',
            '</g>',
            '<g>',
            '</g>',
            '<g>',
            '</g>',
            '<g>',
            '</g>',
            '<g>',
            '</g>',
            '<g>',
            '</g>',
            '<g>',
            '</g>',
            '<g>',
            '</g>',
            '<g>',
            '</g>',
            '<g>',
            '</g>',
            '<g>',
            '</g>',
            '<g>',
            '</g>',
            '<g>',
            '</g>',
            '</svg>'
        ].join('\n');
    // Create a marker and set its position.
    var marker = new google.maps.Marker({
      map: map,
      position: myLatLng,
      icon: { 
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg), 
        scaledSize: new google.maps.Size(40, 40) 
      },
      optimized: false
    });
}
jQuery(document).ready( function() {
    doInitMap();
});