Vue.directive('src', {
  imgHelper: lib.img(),
  cdn: function (key) {
    var cdnurlMap = window.CDN_URL
    return cdnurlMap && cdnurlMap[key] && cdnurlMap[key].cdnurl ? cdnurlMap[key].cdnurl : key
  },
  bind: function () {
    // this.parseSrc(this.expression)
  },
  convertLength: function (n) {
    return Math.ceil(n / window.remUnit * 32 * window.devicePixelRatio)
  },
  parseSrc: function (src) {

    // if (!this.literal) {
    //   src = this.vm[src]
    // }

    if (typeof src !== 'string' || !src) {
      return
    }

    // console.log('before', src)

    // get cdnurl
    // src = this.cdn(src)
    src = lib.cdnurl(src)

    // convert if url is absolute
    // 1. <width>x<height>
    // 2. cover: offset(width/dpr, height/dpr)
    // 3. get <width>x<height> from cdn url
    // 4. 200x200

    var size = (this.el) ? this.el.getAttribute('size') || '' : ''
    var param = {}
    var width
    var height

    // check if [size] format is <width>x<height>
    var matchedSize = size.match(/^(\d+)x(\d+)$/)
    if (matchedSize) {
      width = matchedSize[1]
      height = matchedSize[2]
      // console.log('matched size from [size]', size, width, height)
    }
    else if (size === 'cover') {
      // check if [size] is 'cover' and element existed
      if (this.el) {
        width = this.el.offsetWidth / window.rem * window.remUnit
        height = this.el.offsetHeight / window.rem * window.remUnit
        // console.log('matched size from element offset', width, height)
      }
    }
    else {
      // check if url is absolute and has <width>x<height>
      matchedSize = src.match(/^(?:http(?:s)?\:)?\/\/.+\-(\d+)\-(\d+)\.\w+$/)
      if (matchedSize) {
        width = matchedSize[1]
        height = matchedSize[2]
        // console.log('matched size from url size', width, height)
      }
    }

    if (width && height) {
      param.size = this.convertLength(width) + 'x' + this.convertLength(height)
    }
    else {
      param.size = '200x200'
      // console.log('no size matched', '200x200')
    }
    src = this.imgHelper.getNewUrl(src, param)

    // console.log('after', param.size, src)
    this.el.src = src
  },
  update: function (newValue, oldValue) {
    this.parseSrc(newValue)
  },
  unbind: function () {
  }
})
