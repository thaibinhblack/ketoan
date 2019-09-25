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
            <v-btn icon dark @click="dialog = false">
                <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Settings</v-toolbar-title>
            <div class="flex-grow-1"></div>
            <v-toolbar-items>
                <v-btn dark text @click="dialog = false">Save</v-btn>
            </v-toolbar-items>
            </v-toolbar>
        </v-card>
  </v-dialog>
</template>

<script>
export default {
    props: ["dialog"]
}
</script>