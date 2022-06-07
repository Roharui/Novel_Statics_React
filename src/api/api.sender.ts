
const HEADER = {
  "Content-Type": "application/json",
}

const API_URL = "https://novel-static-app.herokuapp.com"

export function search(link: string) {
  return fetch(API_URL + "/n", {
    method: "POST",
    headers: HEADER,
    body: JSON.stringify({
      link
    }),
  })
  .then(res => res.json())
}

