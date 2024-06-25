import { createRouter, createWebHistory } from 'vue-router';
import About from './components/About.vue';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Dashboard from './components/Dashboard.vue';
import ProductList from './components/ProductList.vue';
import AdminReport from './components/AdminReport.vue';
import FormView from './views/FormView.vue';
import PostDetail from './views/PostDetail.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },

  { path: '/posts', name: 'posts', component: () => import('./views/PostView.vue') },
  
  { path: '/post/:id', name: 'PostDetail', component: () => import('./views/PostDetail.vue') },

  { path: '/posts', name: 'posts', component: () => import('./views/PostView.vue') },

  
  { path: '/form', name: 'form', component: FormView },
 
  { path: '/form/:id', name: 'EditForm', component: FormView },

  { path: '/admin-report', name: 'AdminReport', component: AdminReport, meta: {requiresAdmin: true } },

  { path: '/login', name: 'Login', component: Login},

  { path: '/dashboard', name: 'Dashboard', component: Dashboard},


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach[(to, from, next) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if(to.matched.some[record => record.meta.requiresAdmin]){
    if (user && user.role === 'admin'){
      next();
    }
    else{
      next('/login')
    }
  }
  else{
    next();
  }
}

];

export default router;