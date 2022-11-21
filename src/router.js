import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import teamTimetable from "@/components/team-timetable";
import theMainContent from "@/components/the-main-content";



const router = new VueRouter({
    routes: [
        { path: '/', component: theMainContent, name: 'team' },
        { path: '/:timetable', component: teamTimetable, name: 'timetable'}
    ]
})

export default router;




