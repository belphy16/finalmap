 
	 /*list of locations*/
	var locations = [
		{title: "Malliyoor Sree Mahaganapathy Temple", location: {lat: 9.733244, lng: 76.501275}, googleId: "ChIJPx0Nk2LWBzsRKqCw2Ou7KJU", pincode: "686603"},
		{title: "Thazhathangady Juma Masjid", location: {lat:  9.598416, lng: 76.50551}, googleId: "ChIJKyomAAMrBjsRvCqdHw-O3Qw", pincode: "686603"},
		{title: "Kumarakam Bird Sanctuary", location: {lat:  9.62723, lng: 76.42861}, googleId: "ChIJG4td2neACDsRguUR1HU505M", pincode: "686563"},
		{title: "Island of Pathiramanal", location: {lat: 9.618643, lng: 76.384709}, googleId: "ChIJcY9C3KKACDsRJOkW3c0iFNU", pincode: "688555"},
		{title: "vaikom", location: {lat: 9.721645, lng: 76.392667}, googleId: "ChIJF89lxQ55CDsRYQBIDmt-lhU", pincode: "686141"},
		{title: "Muncipal Jubilee Park", location: {lat: 9.592904, lng: 76.528411}, googleId: "ChIJPQWep3UrBjsRcFise7TSIWo", pincode: "686002"},
		{title: "Kumarakom", location: {lat: 9.617545, lng: 76.430095}, googleId: "ChIJ96jwrsqBCDsRIekpNVwHIww", pincode: "686141"},
		{title: "Palai", location: {lat: 9.713753, lng: 76.682928}, googleId: "ChIJn15tsM7NBzsRNC7P1r-POrM", pincode: "686141"},
		{title: "Changanaserry", location: {lat: 9.445888, lng: 76.540965}, googleId: "ChIJJ8OSaAsmBjsRoAStKsBnbAg", pincode: "686002"},
		{title: "Kanjirappilly", location: {lat: 9.557271, lng: 76.78943}, googleId: "ChIJCwFLJHg2BjsR2tD0zhg6lgM", pincode: "686141"},
		{title: "Bharananganam Church", location: {lat: 9.69945, lng: 76.724994}, googleId: "ChIJ-25sSHHMBzsRaE1ZIWVfsj4", pincode: "686141"},
		{title: "Erumeli Church", location: {lat: 9.481056, lng: 76.845052}, googleId: "ChIJw804GtNHBjsR6ZkGA9jjPpA", pincode: "686141"},
		{title: "Ettumanoor", location: {lat: 9.67036, lng: 76.560875}, googleId: "ChIJfY1XPXvTBzsRfYed_NpW_-o", pincode: "686002"},
		{title: "Kuravilangadu", location: {lat: 9.758441, lng: 76.563273}, googleId: "ChIJNdbsmTrRBzsRGpM5NTJ1z6U", pincode: "686141"}
	];
 
 	
	
 	//search
 	  window.onload= function() {

            var viewModel = {
                txtSearch : ko.observable(""),
            };
			
            viewModel.locationlist = ko.dependentObservable(function () {

				var input = viewModel.txtSearch();																			  
				hideListings();
				var bounds = new google.maps.LatLngBounds();
				// Extend the boundaries of the map for each marker and display the marker

				
				var divListHTML="<ul>";
				for (var i = 0; i < markers.length; i++) {
				  
				  if(markers[i].title.toLowerCase().includes(input.toLowerCase())){
					  divListHTML+="<li class='lst' onClick='clkList("+i+");' >"+markers[i].title+"</li>";
					  markers[i].setMap(map);
					  bounds.extend(markers[i].position);
					  
				  }
				  
				}
				
				divListHTML+="</ul>";				
				map.fitBounds(bounds);													  
																	  						  
                return  divListHTML;
            });

            ko.applyBindings(viewModel);
       }
 		//end search
 	
	
		function hideListings() {
			for (var i = 0; i < markers.length; i++) {
			  markers[i].setMap(null);
			}
		}
 		
		function clkList(ind)
		{
			populateInfoWindow(markers[ind], largeInfowindow);
		}
 
 
 
 
 	  var map;
	  var largeInfowindow;
	  var marker;

      // Create a new blank array for all the listing markers.
      var markers = [];

      function initMap() {
		  
		  
        // Create a styles array to use with the map.
        var styles = [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ];

        // Constructor creates a new map - only center and zoom are required.
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 10.527642,lng: 76.214435},
          zoom: 13,
          styles: styles,
          mapTypeControl: false
        });

       
        largeInfowindow = new google.maps.InfoWindow();


        // Style the markers a bit. This will be our listing marker icon.
        var defaultIcon = makeMarkerIcon('0091ff');

        // Create a "highlighted location" marker color for when the user
        // mouses over the marker.
        var highlightedIcon = makeMarkerIcon('FFFF24');

        // The following group uses the location array to create an array of markers on initialize.
        for (var i = 0; i < locations.length; i++) {
          // Get the position from the location array.
          var position = locations[i].location;
          var title = locations[i].title;
          // Create a marker per location, and put into markers array.
            marker = new google.maps.Marker({
            position: position,
            title: title,
            animation: google.maps.Animation.DROP,
            icon: defaultIcon,
            id: i
          });
			
          // Push the marker to our array of markers.
          markers.push(marker);
          // Create an onclick event to open the large infowindow at each marker.
          marker.addListener('click', function() {
            populateInfoWindow(this, largeInfowindow);
          });
		  
		    
		  
          // Two event listeners - one for mouseover, one for mouseout,
          // to change the colors back and forth.
          marker.addListener('mouseover', function() {
            this.setIcon(highlightedIcon);
          });
          marker.addListener('mouseout', function() {
            this.setIcon(defaultIcon);
          });
        }

        
		showListings("");
		

      }

    
      // on that markers position.
      function populateInfoWindow(marker, infowindow) {
        // Check to make sure the infowindow is not already opened on this marker.
        if (infowindow.marker != marker) {
          // Clear the infowindow content to give the streetview time to load.
          infowindow.setContent('');
          infowindow.marker = marker;
		  infowindow.setContent('<div>' + marker.title + '<br>Loading...</div>');
          // Make sure the marker property is cleared if the infowindow is closed.
          infowindow.addListener('closeclick', function() {
            infowindow.marker = null;
          });
          var streetViewService = new google.maps.StreetViewService();

		    var radius = 50;
			//wiki api start
			var articleUrl="";
			var wikiUrl="";
			var wikiURL = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + marker.title + '&format=json&callback=wikiCallback';
			var wikiTimeout = setTimeout(function() {
				alert("failed to load wikipedia page");
			}, 8000);
			/*ajax requst*/
			$.ajax({
				url: wikiURL,
				dataType: "jsonp"
			}).done(function(response) {
				/*timeout is cleared if wikipedia link is loaded successfully*/
				clearTimeout(wikiTimeout);
				/*response from wikipedia api*/
				articleUrl = response[3][0];
				
				if(articleUrl!=null){
					wikiUrl='<p><a href="'+articleUrl+'" target="_blank">'+articleUrl+'</a></p>';	
				}
				else{
					wikiUrl='<p>wikipedia url not found</p>';	
				}
				streetViewService.getPanoramaByLocation(marker.position, radius, getStreetView_wiki);
			});
		    
			//wiki api end
  			
          
         
		  //make StreetView
          function getStreetView_wiki(data, status) {
            if (status == google.maps.StreetViewStatus.OK) {
              var nearStreetViewLocation = data.location.latLng;
              var heading = google.maps.geometry.spherical.computeHeading(
                nearStreetViewLocation, marker.position);
                infowindow.setContent('<div>' + marker.title + '</div>'+wikiUrl+'<div id="pano"></div>');
                var panoramaOptions = {
                  position: nearStreetViewLocation,
                  pov: {
                    heading: heading,
                    pitch: 30
                  }
                };
              var panorama = new google.maps.StreetViewPanorama(
                document.getElementById('pano'), panoramaOptions);
            } else {
              infowindow.setContent('<div>' + marker.title + '</div>'+wikiUrl +
                '<div>No Street View Found</div>');
            }
          }
          
          // Open the infowindow on the correct marker.
          infowindow.open(map, marker);
        }
      }





 	

	  
	  
	  
	  //make icon
      function makeMarkerIcon(markerColor) {
        var markerImage = new google.maps.MarkerImage(
          'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
          '|40|_|%E2%80%A2',
          new google.maps.Size(21, 34),
          new google.maps.Point(0, 0),
          new google.maps.Point(10, 34),
          new google.maps.Size(21,34));
        return markerImage;
      }
