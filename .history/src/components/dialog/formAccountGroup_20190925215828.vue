<template>
<v-dialog
    v-model="dialog"
    persistent :overlay="false"
    max-width="500px"
    transition="dialog-transition"
>
    <v-card>
        <v-card-title primary-title>
            <span>Form thành viên quản lý thư mục</span>
        </v-card-title>
        <v-card-text>
            <v-slide-group
            class="pa-4"
            active-class="success"
            show-arrows
            >
            <v-slide-item
                v-for="n in 15"
                :key="n"
                v-slot:default="{ active, toggle }"
            >
                <v-card
                :color="active ? undefined : 'grey lighten-1'"
                class="ma-4"
                height="200"
                width="100"
                @click="toggle"
                >
                <v-row
                    class="fill-height"
                    align="center"
                    justify="center"
                >
                    <v-scale-transition>
                    <v-icon
                        v-if="active"
                        color="white"
                        size="48"
                        v-text="'mdi-close-circle-outline'"
                    ></v-icon>
                    </v-scale-transition>
                </v-row>
                </v-card>
            </v-slide-item>
            </v-slide-group>
        </v-card-text>
    </v-card>
</v-dialog>
</template>

<script>
export default {
    props: ["dialog"]
}
</script>