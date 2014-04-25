(function() {
  var globe = planetaryjs.planet();
  // The `earth` plugin draws the oceans and the land; it's actually
  // a combination of several separate built-in plugins.
  globe.loadPlugin(planetaryjs.plugins.earth({
    topojson: { file:   'world-110m-withlakes.json' },
    oceans:   { fill:   '#222' },
    land:     { stroke:   '#f4f4f4', fill: '#2c2c2c', lineWidth: 0.25 },
    borders:  { stroke: '#f4f4f4', lineWidth: 0.25 }
  }));
  globe.loadPlugin(lakes({
    fill: '#2c2c2c', stroke: '#f4f4f4', lineWidth: 0.25
  }));
  // The `pings` plugin draws animated pings on the globe.
  globe.loadPlugin(planetaryjs.plugins.pings());
  // Load our custom `autorotate` plugin; see below.
  globe.loadPlugin(autorotate(10));
  // The `zoom` and `drag` plugins enable
  // manipulating the globe with the mouse.
  //globe.loadPlugin(planetaryjs.plugins.zoom({
  //  scaleExtent: [100, 300]
  //}));
  globe.loadPlugin(planetaryjs.plugins.drag({
    // Dragging the globe should pause the
    // automatic rotation until we release the mouse.
    onDragStart: function(planet) {
      this.plugins.autorotate.pause();
    },
    onDragEnd: function(planet) {
      this.plugins.autorotate.resume();
    }
  }))
  // Set up the globe's initial scale, offset, and rotation.
  globe.projection.scale(175).translate([175, 175]).rotate([0, -10, 0]);

  // Every few milliseconds, we'll draw another ping.
  var colors = ['#00acee'];
  setInterval(function() {
    var lat = Math.random() * 50 - -20;
    var lng = Math.random() * -40 - 80;
    var color = colors[Math.floor(Math.random() * colors.length)];
    globe.plugins.pings.add(lng, lat, { color: color, ttl: 2000, angle: Math.random() * 5 });
  }, 100);

  // UK
  setInterval(function() {
    var lat = Math.random() * 30 - -40;
    var lng = Math.random() * -40 - -30;
    var color = colors[Math.floor(Math.random() * colors.length)];
    globe.plugins.pings.add(lng, lat, { color: color, ttl: 2000, angle: Math.random() * 5 });
  }, 100);

  // South America
  setInterval(function() {
    var lat = Math.random() * 40 - 30;
    var lng = Math.random() * -35 - 45;
    var color = colors[Math.floor(Math.random() * colors.length)];
    globe.plugins.pings.add(lng, lat, { color: color, ttl: 2000, angle: Math.random() * 5 });
  }, 100);

  // Australia
  setInterval(function() {
    var lat = Math.random() * 25 - 40;
    var lng = Math.random() * -35 - -150;
    var color = colors[Math.floor(Math.random() * colors.length)];
    globe.plugins.pings.add(lng, lat, { color: color, ttl: 2000, angle: Math.random() * 5 });
  }, 100);
  
  // China/Japan
  setInterval(function() {
    var lat = Math.random() * 30 - -20;
    var lng = Math.random() * -60 - -140;
    var color = colors[Math.floor(Math.random() * colors.length)];
    globe.plugins.pings.add(lng, lat, { color: color, ttl: 2000, angle: Math.random() * 5 });
  }, 100);
 

  var canvas = document.getElementById('globe');
  // Special code to handle high-density displays (e.g. retina, some phones)
  if (window.devicePixelRatio == 2) {
    canvas.width = 700;
    canvas.height = 700;
    context = canvas.getContext('2d');
    context.scale(2, 2);
  }
  // Draw the globe
  globe.draw(canvas);

  function lakes(config) {
    config = config || {};
    return function(planet) {
      var lakes = null;

      planet.onInit(function() {
        var world = planet.plugins.topojson.world;
        lakes = topojson.feature(world, world.objects.ne_110m_lakes);
      });

      planet.onDraw(function() {
        planet.withSavedContext(function(context) {
          context.beginPath();
          planet.path.context(context)(lakes);
          context.fillStyle = config.fill || 'black';
          context.fill();
        });
      });
    };
  };

  // This plugin will automatically rotate the globe around its vertical
  // axis a configured number of degrees every second.
  function autorotate(degPerSec) {
    // Planetary.js plugins are functions that take a `planet` instance
    // as an argument...
    return function(planet) {
      var lastTick = null;
      var paused = false;
      planet.plugins.autorotate = {
        pause:  function() { paused = true;  },
        resume: function() { paused = false; }
      };
      // ...and configure hooks into certain pieces of its lifecycle.
      planet.onDraw(function() {
        if (paused || !lastTick) {
          lastTick = new Date();
        } else {
          var now = new Date();
          var delta = now - lastTick;
          // This plugin uses the built-in projection (provided by D3)
          // to rotate the globe each time we draw it.
          var rotation = planet.projection.rotate();
          rotation[0] += degPerSec * delta / 2500;
          if (rotation[0] >= 180) rotation[0] -= 360;
          planet.projection.rotate(rotation);
          lastTick = now;
        }
      });
    };
  };
})();
