<template>
  <v-dialog
        v-model="dialog"
        hide-overlay
        fullscreen 
        max-width="500px"
        transition="dialog-bottom-transition"
  >
         <v-card>
          <v-toolbar dark color="primary">
            <v-btn icon dark @click="$emit('closeDialog', false)">
                <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Settings</v-toolbar-title>
            <div class="flex-grow-1"></div>
            <v-toolbar-items>
                <v-btn dark text @click="$emit('closeDialog', false)">Save</v-btn>
            </v-toolbar-items>
            </v-toolbar>
            <v-card-text>
                <v-row>
                    <v-col cols="12" sm="12">
                        <v-avatar
                            size="50PX"
                            color="#e2e2e2"
                        >
                            <!-- <img src="src" alt="alt"> -->
                        </v-avatar>
                        <span style="margin-left: 15px;">NAME</span>
                        
                        <p style="margin-top: 15px">Nội dung comment</p>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-actions class="bottom-comment">
                <v-row>
                    <v-col cols="12" sm="12">
                        <v-text-field
                            name="name"
                            label="Comment"
                            placeholder="Nhập comment tại đây"
                            prepend-icon="mdi-comment"
                            append-icon="mdi-comment-arrow-right-outline"
                            id="id"
                        ></v-text-field>
                    </v-col>
                </v-row>
            </v-card-actions>
        </v-card>
  </v-dialog>
</template>

<script>
export default {
    props: ["dialog"]
}
</script>

<style scoped>
.bottom-comment {position: absolute;width: 98%;bottom: 0;}
</style>