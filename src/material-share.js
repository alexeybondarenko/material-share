(function () {

  var utils = {};
  utils.defaults = function (defaultObj, cloneObj) {
    if (!cloneObj) return defaultObj;
    var res = {};
    Object.keys(defaultObj).forEach(function (key) {
      res[key] = cloneObj[key] || defaultObj[key];
    });
    return res;
  };
  function MaterialShare(el, opts) {
    if (!el) {
      return;
    }
    this.el = el;
    this.options = utils.defaults(this.options, opts);

    this.init();
  }

  utils.insertAfter = function (elem, refElem) {
    var parent = refElem.parentNode;
    var next = refElem.nextSibling;
    if (next) {
      return parent.insertBefore(elem, next);
    } else {
      return parent.appendChild(elem);
    }
  };

  MaterialShare.prototype.options = {
    facebookId: null,
    twitterId: null,
    linkedinId: null
  };
  MaterialShare.prototype.socials = {
    facebook: {
      enable: true,
      className: 'material-share-facebook',
      getShareLink: function () {
        return 'https://www.facebook.com/sharer/sharer.php?u=' + location.href
      }
    },
    twitter: {
      enable: true,
      className: 'material-share-twitter',
      getShareLink: function () {
        return 'https://twitter.com/share?url=' + location.href + '&text=' + document.title
      }
    },
    linkedinId: {
      enable: true,
      className: 'material-share-linkedin',
      getShareLink: function () {
        return 'https://www.linkedin.com/cws/share?url=' + location.href + '&title=' + document.title
      }
    }
  };

  MaterialShare.prototype.show = function () {
    this.isShown = true;
    this.listEl.classList.add('is-active');
  };
  MaterialShare.prototype.hide = function () {
    this.isShown = false;
    this.listEl.classList.remove('is-active');
  };
  MaterialShare.prototype.toggle = function () {
    if (this.isShown) this.hide();
    else this.show();
  };
  MaterialShare.prototype.isShown = false;

  MaterialShare.prototype.init = function () {

    var wrapEl = document.createElement('div');
    wrapEl.classList.add('material-share-wrap');

    utils.insertAfter(wrapEl, this.el);
    wrapEl.appendChild(this.el);

    this.el.classList.add('material-share');

    var parentListElementWrap = document.createElement('div');
    parentListElementWrap.classList.add('material-share-list-wrap');

    var parentListElementWrapIn = document.createElement('div');
    parentListElementWrapIn.classList.add('material-share-list-wrap__in');
    var parentListElement = document.createElement('div');
    parentListElement.classList.add('material-share-list');

    parentListElementWrap.appendChild(parentListElementWrapIn);
    parentListElementWrapIn.appendChild(parentListElement);

    function createListElement(social) {
      var a = document.createElement('a');
      a.setAttribute('href', social.getShareLink());
      a.setAttribute('target', '_blank');
      a.classList.add(social.className);
      return a;
    }

    var self = this;
    Object.keys(this.socials).forEach(function (item) {
      parentListElement.appendChild(createListElement(self.socials[item]));
    });

    this.listEl = parentListElement;
    utils.insertAfter(parentListElementWrap, this.el);

    this.el.addEventListener('click', function () {
      self.toggle();
    }, 0);
  };

  if (typeof jQuery !== 'undefined') {
    jQuery.fn.materialShare = function (options) {
      return this.each(function () {

        var $this = $(this);

        $this.share = new MaterialShare(this, options);
      });
    }
  }
  window.MaterialShare = MaterialShare;

})();
