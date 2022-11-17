import {createRouter, createWebHashHistory} from 'vue-router';
import basePlayerInfo from "@/components/base-player-info";
import theReserveInfo from "@/components/the-reserve-info";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/players', component: basePlayerInfo },
        { path: '/reserve', component: theReserveInfo}
    ]

})