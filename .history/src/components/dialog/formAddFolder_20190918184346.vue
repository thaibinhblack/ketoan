<template>
<v-dialog v-model="dialog" width="600px">
    <v-card>
        <v-card-title>
        <span class="headline">Form tạo thư mục</span>
        </v-card-title>
        <v-card-text>
            <form>
                <v-row>
                    <v-col cols="12" sm="12">
                        <v-select
                            :items="years"
                            v-model="folder.year"
                            label="Chọn năm cho thư mục"
                        ></v-select>
                    </v-col>
                    <v-col cols="12" sm="12" md="6">
                        <v-text-field
                            name="NAME_FOLDER"
                            label="Tên thư mục"
                            prepend-icon="mdi-folder"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="6">
                        <v-text-field
                            name="NAME_FOLDER"
                            label="Đường dẫn thư mục"
                            prepend-icon="mdi-link"
                        ></v-text-field>
                    </v-col>
                </v-row>
            </form>
        </v-card-text>
        <v-card-actions>
        <div class="flex-grow-1"></div>
        <v-btn color="green darken-1" text @click="$emit('closeDialog',false)">Close</v-btn>
        <v-btn color="green darken-1" text>Save</v-btn>
        </v-card-actions>
    </v-card>
</v-dialog>
</template>
<script>
export default {
    props: ["dialog"],
    data()
    {
        return {
            years: ["2019","2018","2017"],
            folder: {
                year: "2019"
            }
        }
    }
}
</script>