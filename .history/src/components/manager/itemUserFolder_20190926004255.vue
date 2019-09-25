<template>
    <v-row  >
        <v-col cols="12" sm="4" md="3">
            <v-avatar
                size="50px"
                color="#e2e2e2"
            >
                <!-- <img src="src" alt="alt"> -->
            </v-avatar>
        </v-col>
        <v-col cols="12" sm="6" md="7" style="line-height:50px">{{user.USERNAME}}</v-col>
        <v-col cols="12" sm="2">
            <v-checkbox v-model="check" :value="user.UUID_USER"></v-checkbox>
        </v-col>
    </v-row>
</template>
<script>
export default {
    props: ["user"]
}
</script>