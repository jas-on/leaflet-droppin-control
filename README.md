# Leaflet Pindrop

A Leaflet control that adds a button which allows the user to drop and pickup a marker
in the center of the screen by toggling the button. Useful when the map uses only one marker.

## Usage
Add `leaflet-pindrop-control` JavaScript and CSS to the page:

```html
<link href="L.Control.Pindrop.css" rel="stylesheet">
<script src="L.Control.Pindrop.js" ></script>
```

Add control to your map:

```javascript
map.addControl(new L.Control.PinDrop());

L.control.pindrop().addTo(map);
```

Configurable:
```javascript
L.control.pindrop({
    position: "topleft",
    setView: false,
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
