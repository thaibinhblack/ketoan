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
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
  </v-dialog>
</template>

<script>
export default {
    props: ["dialog"]
}
</script>