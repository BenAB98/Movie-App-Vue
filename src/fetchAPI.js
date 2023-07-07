export async function fetchApi(url) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwM2E1YTEzZTk4NTk4NDcyNTRjYWQ5M2E5Nzg2MjEzYyIsInN1YiI6IjY0NzFiMmE0YmUyZDQ5MDBiZjlkNWFhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XuVUHSkSjI6SYi-p-Mf-32ZvVklBRRin8sFCmiNqBaE`
    }
  }
  const response = await fetch(url, options)
  const data = await response.json()
  if (!response.ok) {
    throw data
  }
  return data
}
