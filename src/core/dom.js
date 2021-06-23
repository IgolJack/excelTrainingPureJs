class Dom {
  constructor(selector) {
    this.$el = typeof selector === 'string'
      ? document.querySelector(selector)
      : selector
  }

  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html
      return this
    }
    return this.$el.outerHTML().trim()
  }

  text(tex) {
    if (typeof tex === 'string') {
      this.$el.textContent = tex
    } else return this.$el.textContent
  }

  on(eventType, callback) {
    this.$el.addEventListener(eventType, callback)
  }

  off(eventType, callback) {
    this.$el.removeEventListener(eventType, callback)
  }


  clear() {
    this.html('')
    return this
  }

  append(node) {
    if (node instanceof Dom) {
      node = node.$el
    }

    if (Element.prototype.append) {
      this.$el.append(node)
    } else {
      this.$el.appendChild(node)
    }
    return this
  }

  closest(selector) {
    return $(this.$el.closest(selector))
  }

  getCoords() {
    return this.$el.getBoundingClientRect()
  }

  findAll(selector) {
    return this.$el.querySelectorAll(selector)
  }

  find(selector) {
    return $(this.$el.querySelector(selector))
  }

  addClass(className) {
    this.$el.classList.add(className)
    return this
  }

  focusEl() {
    this.$el.focus()
  }
  remClass(className) {
    this.$el.classList.remove(className)
    return this
  }

  get data() {
    return this.$el.dataset
  }

  css(styles = {}) {
    Object.entries(styles).forEach(sty => {
      const [nameOfStyle, valueOfStyle] = sty
      this.$el.style[nameOfStyle] = valueOfStyle
    })
  }

  cssGet(styleType) {
    console.log(this.$el.style[styleType])
    return this.$el.style[styleType]
  }
}

export function $(selector) {
  return new Dom(selector)
}

$.create = (tagName, classes = '') => {
  const el = document.createElement(tagName)
  if (classes) {
    el.classList.add(classes)
  }
  return $(el)
}
