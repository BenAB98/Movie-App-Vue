import { API_BASE_URL, API_READ_ACCESS_TOKEN, API_VERSION } from '@/constants/api-constants'
import {
  CREATE_REQUEST_TOKEN_URL,
  CREATE_SESSION_URL,
  VALIDATE_WITH_LOGIN_URL,
  ACCOUNT_URL
} from '@/constants/endpoints'
import { LOGIN, USER,TOKEN } from '@/utils/keys'
import { useStorage } from '@vueuse/core'


const USER_ID = 'user_id'
const TOKEN_KEY = 'token'
export default function useAuth(app, router) {
  const user = useStorage(USER_ID, {}, sessionStorage)
  const token = useStorage(TOKEN_KEY, null, sessionStorage)


  async function createRequestToken() {
    const res = await fetch(`${API_BASE_URL}${API_VERSION}${CREATE_REQUEST_TOKEN_URL}`, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`
      }
    })
    const data = await res.json()
    if (!data.success) {
      throw new Error('Creating request token failed.')
    } else { 
      return data.request_token
    }
  }

  async function validateWithLogin(requestToken, username, password) {
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`
      },
      body: JSON.stringify({
        username: username,
        password: password,
        request_token: requestToken
      })
    }
    const res = await fetch(`${API_BASE_URL}${API_VERSION}${VALIDATE_WITH_LOGIN_URL}`, options)
    const data = await res.json()
    if (!data.success) {
      throw new Error('Authorizing the request token failed.')
    }
   else return data
  }

  async function createSession(requestToken) {
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`
      },
      body: JSON.stringify({ request_token: requestToken })
    }

    const res = await fetch(`${API_BASE_URL}${API_VERSION}${CREATE_SESSION_URL}`, options)
    const data = await res.json()
    if (!data.success) {
      throw new Error('Creating session failed.')
    }
    sessionStorage.setItem('session_id', data.session_id)
  }

  async function getAccountData() {
    const sessionId = sessionStorage.getItem('session_id')
    if (!sessionId) {
      throw new Error('No session ID.')
    }
    const params = new URLSearchParams()
    params.append('session_id', sessionId)
    const url = `${API_BASE_URL}${API_VERSION}${ACCOUNT_URL}?${params}`
    const options = {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`
      }
    }
    const res = await fetch(url, options)
    const data = await res.json()
    if (!data.id) {
      throw new Error('Getting user info failed.')
    }
    user.value = data
    return data
  }

  async function login(username, password) {
    try {
      
     const request_token = await createRequestToken()
     if(request_token) {
      await validateWithLogin(request_token, username, password)
      await createSession(request_token)
      user.value = await getAccountData()
      token.value = request_token
     }
    } catch (error) {
      console.log(error);
    }
  }

  router.beforeEach((to, _, next) => {
    if (to.matched.some(record => record.meta.guest===false) && !token.value)
      next({name:'login'})
    else if(to.name === 'login' && token.value) {
      next({name:'home'})
    } else {
      next();
    }
  });
  app.provide(USER, user)
  app.provide(LOGIN, login)
  app.provide(TOKEN,token)
  
}