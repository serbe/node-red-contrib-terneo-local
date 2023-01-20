import fetch from "node-fetch"

const data = {
  cmd: 4,
  sn: "4A002C000150535658313720000159",
}

const response = await fetch("http://127.0.0.1:8882/api.cgi", {
  method: "post",
  body: JSON.stringify(data),
})

console.log(response.ok)
console.log(response.status)
console.log(response.statusText)
console.log(response.headers.raw())
console.log(response.headers.get("content-type"))
const body = await response.json()
console.log(body)
