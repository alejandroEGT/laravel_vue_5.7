
import NotFound from '../components/404.vue'
//loged

import Home from "../components/Home/Home";

import Bryanv from "../components/Home/bryanv";

let routes_bryan_vidal = [

{
    path: '/home',
    component: Home,
    redirect:'index',
    iconCls: 'el-icon-message',
    meta: {auth: true},
    children: [
        //{ path: '/index', component: Index, name: 'Index' },
        { path: '/bryanv', component: Bryanv, name: 'Bryanv' },
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

export default routes_bryan_vidal;