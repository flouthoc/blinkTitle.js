var hold

function blinkTitle (opts) {
  if (!opts) opts = {}
  var delay = opts.delay || 0
  var message = opts.message || ''
  var notifyOffPage = opts.notifyOffPage || false
  var timeout = opts.timeout || false
  var title = opts.title || document.title

  if (notifyOffPage) {
    hold = setInterval(function () {
      if (document.hidden) blink()
    }, delay)
  } else {
    hold = setInterval(function () {
      blink()
    }, delay)
  }

  function blink () {
    document.title === title ?
      document.title = message :
      document.title = title
  }

  if (timeout) setTimeout(blinkTitleStop, timeout)

}

function blinkTitleStop () {
  clearInterval(hold)
}

module.exports = blinkTitle
