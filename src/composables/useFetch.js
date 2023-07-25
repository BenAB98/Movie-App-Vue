import { inject, ref } from 'vue'
import { fetchApi } from '@/utils/fetchAPI'
import { USER } from '@/utils/keys'

export function useFetch(initialData = null) {
  const user = inject(USER)
  console.log(user)
  const data = ref(initialData)
  const loading = ref(false)
  const error = ref(null)

  async function doFetch(url, options) {
    try {
      error.value = null
      loading.value = true
      const response = await fetchApi(url, options)
      data.value = response
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  return { data, loading, error, doFetch }
}
