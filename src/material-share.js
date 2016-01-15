(function () {

  var MaterialShare = function (el, opts) {
    if (!el) return null;
    this.el = el;
    this.options = options;

    this.init ();
  };

  MaterialShare.prototype = {};
  MaterialShare.prototype.init = function () {
    el.addEventListener('click', function () {
      console.log('button click');
    }, 0);
  }

  window.MaterialShare = MaterialShare;

})();
