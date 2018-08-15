
import NotFound from '../components/404.vue'
//loged

import Home from "../components/Home/Home";

import Felipe from "../components/Home/felipe";

let routes_felipe = [

{
    path: '/home',
    component: Home,
    redirect:'index',
    iconCls: 'el-icon-message',
    meta: {auth: true},
    children: [
        //{ path: '/index', component: Index, name: 'Index' },
        { path: '/Felipe', component: Felipe, name: 'Felipe' },
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

export default routes_felipe;