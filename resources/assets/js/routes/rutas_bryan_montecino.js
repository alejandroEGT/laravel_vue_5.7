
import NotFound from '../components/404.vue'
//loged

import Home from "../components/Home/Home";

import Bryanm from "../components/Home/mexi";

let routes_mexi = [

{
    path: '/home',
    component: Home,
    redirect:'index',
    iconCls: 'el-icon-message',
    meta: {auth: true},
    children: [
        //{ path: '/index', component: Index, name: 'Index' },
        { path: '/bryanm', component: Bryanm, name: 'Bryanm' },
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

export default routes_mexi;