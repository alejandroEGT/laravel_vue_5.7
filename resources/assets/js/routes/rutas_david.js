
import NotFound from '../components/404.vue'
//loged

import Home from "../components/Home/Home";

import Chat from "../components/Home/david";

let routes_david = [

{
    path: '/home',
    component: Home,
    redirect:'index',
    iconCls: 'el-icon-message',
    meta: {auth: true},
    children: [
        //{ path: '/index', component: Index, name: 'Index' },
        { path: '/chat', component: Chat, name: 'David' },
    ]
},
{
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }     


];

export default routes_david;