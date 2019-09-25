<template>


</template>

<script>
export default {
    props: ["classActive"],
    data()
    {
        return {
            user: {}
        }
    },
    created()
    {
    }
}
</script>

<style scoped>
.item-sub {padding-left: 45px;text-transform: uppercase}
.left-sidebar {width: 0}
.left-sidebar.active {width: 250px}
a {text-decoration: none}
</style>