import HomePage from '@/pages/HomePage.vue'
import EditPage from '@/pages/EditPage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import SignUpPage from '@/pages/SignUpPage.vue'
import MovieDetailsPage from '@/pages/MovieDetailsPage.vue'
import WatchlistPage from '@/pages/WatchlistPage.vue'
import ProfilePage from '@/pages/ProfilePage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'

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
    path: '/watchlist',
    name: 'watchlist',
    meta: { guest: false },
    component: WatchlistPage
  },
  {
    path: '/profile',
    name: 'profile',
    meta: { guest: false },
    component: ProfilePage
  },
  {
    path: '/edit',
    name: 'edit',
    meta: { guest: false },
    component: EditPage
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundPage
  }
]
