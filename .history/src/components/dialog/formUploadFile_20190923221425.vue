<template>
    <v-dialog
        v-model="dialog"
        max-width="500px"
    >
        <v-card>
            <v-form>
                <v-card-title primary-title>
                    <span>Form upload file</span>
                </v-card-title>
            </v-form>
        </v-card>
    </v-dialog>
</template>
<script>
export default {
    props: ["dialog"]
}
</script>