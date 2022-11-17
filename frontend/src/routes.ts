import About from "./page/About/About";
import Auth from "./page/Auth/Auth";
import Catalog from "./page/Catalog";
import Contact from "./page/Contact/Contact";
import Delivery from "./page/Delivery/Delivery";
import FAQ from "./page/FAQ/FAQ";
import Home from "./page/Home";

export const routes:{path:string,component: () => JSX.Element,auth?:boolean}[] = [
    {
        path:'/',
        component: Home,
    },
    {
        path:'/catalog',
        component: Catalog,
    },
    {
        path:'/auth',
        component: Auth,
    },
    {
        path:'/delivery',
        component: Delivery,
    },
    {
        path:'/about',
        component: About,
    },
    {
        path:'/contacts',
        component: Contact,
    },
    {
        path:'/FAQ',
        component: FAQ,
    },
]