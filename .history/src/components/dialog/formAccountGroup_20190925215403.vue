<template>
<v-dialog
    v-model="dialog"
    persistent :overlay="false"
    max-width="500px"
    transition="dialog-transition"
>
    
</v-dialog>
</template>

<script>
export default {
    props: ["dialog"]
}
</script>