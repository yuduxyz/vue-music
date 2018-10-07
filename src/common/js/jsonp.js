import originJSONP from 'jsonp'

export default function jsonp (url, data, options) {
  url += (url.indexOf('?') === -1 ? '?' : '&') + parseParam(data)
  return new Promise((resolve, reject) => {
    originJSONP(url, options, (err, res) => {
      if (!err) {
        resolve(res)
      } else {
        reject(err)
      }
    })
  })
}

function parseParam (data) {
  let url = ''
  for (let key in data) {
    const value = data[key] !== undefined ? data[key] : ''
    url += `&${key}=${encodeURIComponent(value)}`
  }
  return url.length ? url.substring(1) : url
}
