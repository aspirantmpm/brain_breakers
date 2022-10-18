!(function (e) {
  'function' != typeof e.matches &&
    (e.matches =
      e.msMatchesSelector ||
      e.mozMatchesSelector ||
      e.webkitMatchesSelector ||
      function (e) {
        for (
          var t = this,
            o = (t.document || t.ownerDocument).querySelectorAll(e),
            n = 0;
          o[n] && o[n] !== t;

        )
          ++n;
        return Boolean(o[n]);
      }),
    'function' != typeof e.closest &&
      (e.closest = function (e) {
        for (var t = this; t && 1 === t.nodeType; ) {
          if (t.matches(e)) return t;
          t = t.parentNode;
        }
        return null;
      });
})(window.Element.prototype);

document.addEventListener('DOMContentLoaded', function () {
  var modalButtons = document.querySelectorAll('.js-modal-open'),
    overlay = document.querySelector('.js-modal-overlay'),
    closeButtons = document.querySelectorAll('.js-modal-close');

  modalButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();

      var modalId = this.getAttribute('data-modal'),
        modalElem = document.querySelector(
          '.js-modal[data-modal="' + modalId + '"]'
        );

      modalElem.classList.add('is-open');
      overlay.classList.add('is-open');
    });
  });

  closeButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      var parentModal = this.closest('.js-modal');

      parentModal.classList.remove('is-open');
      overlay.classList.remove('is-open');
    });
  });

  document.body.addEventListener(
    'keyup',
    function (e) {
      var key = e.keyCode;

      if (key == 27) {
        document.querySelector('.js-modal.is-open').classList.remove('is-open');
        document.querySelector('.js-modal-overlay').classList.remove('is-open');
      }
    },
    false
  );

  overlay.addEventListener('click', function () {
    document.querySelector('.js-modal.is-open').classList.remove('is-open');
    this.classList.remove('is-open');
  });
});
