define(['troopjs-browser/component/widget'], function (Widget) {
  return Widget.extend({
    "sig/start": function () {
      this.html('Welcome to TroopJS 2.x!');
    }
  });
});

