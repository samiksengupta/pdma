<template>
    <q-layout view="hHh lpR fFf">

        <q-header bordered class="bg-dark text-white">
            <q-toolbar>
                <q-btn dense flat round icon="menu" @click="leftDrawerOpen = !leftDrawerOpen" />

                <q-toolbar-title @click="navigateToRoute('/')">
                    <q-avatar>
                        <img src="./assets/pokeball.png">
                    </q-avatar>
                    PDMA - The Pokemon Data Manager and Analytics Tool
                </q-toolbar-title>
            </q-toolbar>
        </q-header>

        <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
            <q-list>
                <q-item-label header>Pokedex</q-item-label>
                <q-item clickable tag="router-link" to="/pokedex">
                    <q-item-section avatar>
                        <q-icon name="search" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Pokedex</q-item-label>
                        <q-item-label caption>List of Pokemon</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item-label header>Manage</q-item-label>
                <q-item clickable tag="router-link" to="/datasets">
                    <q-item-section avatar>
                        <q-icon name="album" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Data</q-item-label>
                        <q-item-label caption>Search, List, Edit and Delete Data</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable tag="router-link" to="/import">
                    <q-item-section avatar>
                        <q-icon name="download" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Import</q-item-label>
                        <q-item-label caption>Bulk Import Data</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable tag="router-link" to="/export">
                    <q-item-section avatar>
                        <q-icon name="publish" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Export</q-item-label>
                        <q-item-label caption>Bulk Export Data</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable tag="router-link" to="/versions">
                    <q-item-section avatar>
                        <q-icon name="numbers" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Versions</q-item-label>
                        <q-item-label caption>Edit Versions</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable tag="router-link" to="/languages">
                    <q-item-section avatar>
                        <q-icon name="translate" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Languages</q-item-label>
                        <q-item-label caption>Edit Languages</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable tag="router-link" to="/changelogs">
                    <q-item-section avatar>
                        <q-icon name="track_changes" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Changelogs</q-item-label>
                        <q-item-label caption>Generate Changelogs</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item-label header>Analytics</q-item-label>
                <q-item clickable tag="router-link" to="/reports">
                    <q-item-section avatar>
                        <q-icon name="analytics" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Reports</q-item-label>
                        <q-item-label caption>Generate Reports</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item-label header>App</q-item-label>
                <q-item clickable tag="router-link" to="/settings">
                    <q-item-section avatar>
                        <q-icon name="settings" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Settings</q-item-label>
                        <q-item-label caption>Change Options</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable tag="router-link" to="/info">
                    <q-item-section avatar>
                        <q-icon name="info" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Info</q-item-label>
                        <q-item-label caption>Credits and Attributions</q-item-label>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-drawer>

        <q-page-container>
            <router-view></router-view>
        </q-page-container>

    </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
    name: 'LayoutDefault',

    setup() {
        return {
            leftDrawerOpen: ref(false)
        }
    },

    methods: {
        navigateToRoute(routePath) {
            // Use Vue Router's programmatic navigation to navigate to the specified route
            this.$router.push(routePath);
        },
    },
}
</script>
