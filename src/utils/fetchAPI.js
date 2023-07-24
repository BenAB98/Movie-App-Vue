import { API_BASE_URL, API_READ_ACCESS_TOKEN, API_VERSION } from '@/constants/api-constants'

export async function fetchApi(url) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`
    }
  }
  const response = await fetch(url, options)
  const data = await response.json()
  if (!response.ok) throw data
  return data
}

export async function addOrRemoveList(url, media_id, watchlist) {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`
    },
    body: JSON.stringify({
      media_type: 'movie',
      media_id,
      watchlist
    })
  }
  const response = await fetch(url, options)
  const data = await response.json()
  if (!response.ok) throw data
  return data
}

export async function getDetails(movieId) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application.json',
      'content-type': 'application/json',
      Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`
    }
  }
  const response = await fetch(
    `${API_BASE_URL}${API_VERSION}/movie/${movieId}?language=en-US`,
    options
  )
  const data = await response.json()
  if (!response.ok) throw data
  return data
}
