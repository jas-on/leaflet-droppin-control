# Leaflet PinDrop

A Leaflet control that adds a button which allows the user to drop and pickup a marker
in the center of the screen by toggling the button. Useful when the map uses only one marker.

## Setup
`bower install leaflet.pindrop.control`

## Usage
Add `leaflet-pindrop-control` JavaScript and CSS to the page:

```html
<link href="L.Control.PinDrop.css" rel="stylesheet">
<script src="L.Control.PinDrop.js"></script>
```

Add control to the map:

```javascript
map.addControl(new L.Control.PinDrop());

L.control.pindrop().addTo(map);
```

Configurable:
```javascript
L.control.pindrop({
    position: "topleft",
    icon: "icon ion-pin",
    draggable: true,
    labels: {
        title: "Toggle pin drop"
    }
}).addTo(map);
```

Useful methods:

```javascript
var pin = new L.Control.PinDrop();
map.addControl(pin);

pin.drop(); //adds a marker and returns the marker
pin.pickup(); //removes the marker

pin.currentPin(); //returns the marker
```

Events:
```javascript
map.on("pindrop", function(control) {

});

map.on("pinpickup", function(control) {

});
```
