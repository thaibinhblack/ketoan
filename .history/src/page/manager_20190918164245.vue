<template>
    <div id="page-manager">
        <v-row>
            <side-bar />
        </v-row>
    </div>
</template>

<script>
export default {
    components: {
        'side-bar': () => import('@/components/sideBar.vue')
    }
}
</script>