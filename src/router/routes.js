import HomePage from '../pages/HomePage.vue'
import EditPage from '../pages/EditPage.vue'
import LoginPage from '../pages/LoginPage.vue'
import SignUpPage from '../pages/SignUpPage.vue'
import MovieDetailsPage from '../pages/MovieDetailsPage.vue'
export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/movie/:id',
    name: 'movie',
    component: MovieDetailsPage
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpPage
  },
  {
    path: '/edit',
    name: 'edit',
    component: EditPage
  }
]
