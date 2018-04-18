'use strict'

const IsNew = require('is-new')

module.exports = function unarray (a, {fallback, recursive} = {}) {
  const isNew = IsNew() // Used to guard against recursive loops
  while (Array.isArray(a)) {
    if (!isNew(a) || a.length !== 1) break
    a = a[0]
    if (!recursive) break
  }
  return (Array.isArray(a) && typeof fallback !== 'undefined') ? fallback : a
}
