import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '@/views/Dashboard.vue';
import Login from '@/views/Login.vue';
import Signup from '@/views/Signup.vue';
import AddMissingItem from '@/views/AddMissingItem.vue';
import LostItemList from '@/views/LostItemList.vue';
import ItemDetail from '@/views/ItemDetail.vue';

const routes = [
  { path: '/', redirect: '/Dashboard' },
  { path: '/Dashboard', component: Dashboard },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/add-missing-item', component: AddMissingItem },
  { path: '/lost-items', component: LostItemList },
  { path: '/item/:id', component: ItemDetail }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;