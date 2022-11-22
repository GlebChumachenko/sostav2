import {createRouter,createWebHashHistory} from "vue-router";
import teamTimetable from "@/components/team-timetable";
import theMainContent from "@/components/the-main-content";
import playersInfo from "@/components/players-info";
import reserveInfo from "@/components/reserve-info";




let  routes = [
    {
        path: '/',
        component: teamTimetable,
        name: 'timetable'
    },
    {
        path: '/:team',
        component: theMainContent,
        name: 'team',
        children: [
            {
                path: '/:team/',
                component: playersInfo,
                name: 'mainsquad'
            },
            {
                path: '/:team/reserve',
                component: reserveInfo,
                name: 'reserve'
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;




