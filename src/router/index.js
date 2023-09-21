import { createRouter, createWebHashHistory } from 'vue-router';
import MainComponent from '../components/MainComponent.vue'
import InfoComponent from '../components/InfoComponent.vue'
import SetupComponent from '../components/SetupComponent.vue'
import DataSetList from '../components/DataSetList.vue'

const routes = [
    { path: '/', component: MainComponent },
    { path: '/pokedex', component: MainComponent },
    { path: '/datasets', component: DataSetList },
    { path: '/import', component: MainComponent },
    { path: '/export', component: MainComponent },
    { path: '/versions', component: MainComponent },
    { path: '/languages', component: MainComponent },
    { path: '/changelogs', component: MainComponent },
    { path: '/reports', component: MainComponent },
    { path: '/settings', component: MainComponent },
    { path: '/info', component: InfoComponent },
    { path: '/setup', component: SetupComponent },
    // Define routes for other pages here
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router
