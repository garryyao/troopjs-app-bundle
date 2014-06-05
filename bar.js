define(['troopjs-core/component/widget'], function (Widget) {
  return Widget.extend({
    "sig/start": function () {
      this.html('Greeting from TroopJS 1.x!');
    }
  });
});

