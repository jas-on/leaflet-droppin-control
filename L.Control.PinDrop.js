(function(factory, window) {
  if (typeof define === 'function' && define.amd) {
    define(['leaflet'], factory);

  } else if (typeof exports === 'object') {
    module.exports = factory(require('leaflet'));
  }

  if (typeof window !== 'undefined' && window.L) {
    window.L.Locate = factory(L);
  }

} (function(L) {
  L.Control.PinDrop = L.Control.extend({
    options: {
      position: "topleft",
      setView: false,
      iconDropped: "icon ion-pin",
      iconLifted: "icon ion-pin",
      showPopup: true,
      labels: {
        title: "Toggle pin drop"
      }
    },

    initialize: function(options) {
      //override existing options
      for (var i in options) {
        if (typeof this.options[i] === 'object') {
          L.extend(this.options[i], options[i]);
        } else {
          this.options[i] = options[i];
        }
      }
    },

    onAdd: function(map) {
      this._map = map;
      this._pin = null;

      var container = L.DomUtil.create('div', 'leaflet-control-pindrop leaflet-bar leaflet-control');

      this._link = L.DomUtil.create('a', 'leaflet-bar-part leaflet-bar-part-single', container);
      this._link.href = '#';
      this._link.title = this.options.labels.title;

      this._icon = L.DomUtil.create('span', this.options.iconDropped, this._link);

      L.DomEvent
        .on(this._link, 'click', L.DomEvent.stopPropagation)
        .on(this._link, 'click', L.DomEvent.preventDefault)
        .on(this._link, 'click', this._toggleDropState, this)
        .on(this._link, 'dblclick', L.DomEvent.stopPropagation);

      return container
    },

    _toggleDropState: function() {
      if (!this._pin) {
        this.drop();
      } else {
        this.pickup();
      }
    },

    drop: function() {
      if (this._pin) {
        throw new Error("Must pickup pin before dropping again.");
      }

      this._pin = L.marker(this._map.getCenter(), {
        draggable: true
      }).addTo(this._map);

      L.DomUtil.addClass(this._container, "active");

      return this._pin;
    },

    pickup: function() {
      if (!this._pin) {
        throw new Error("Must drop pin before picking up again.");
      }

      this._map.removeLayer(this._pin);

      L.DomUtil.removeClass(this._container, "active");
      this._pin = null;
    },

    currentPin: function() {
      return this._pin;
    }
  });

  L.control.pindrop = function(options) {
    return new L.Control.PinDrop(options);
  };

  return L.Control.PinDrop;
}, window));