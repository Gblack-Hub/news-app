export async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    return response.text().then((text) => {
      throw new Error(text);
    });
  }
  return response.json();
}
