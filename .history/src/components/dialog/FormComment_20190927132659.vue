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
            <v-toolbar-title>Close</v-toolbar-title>
            <div class="flex-grow-1"></div>
            <!-- <v-toolbar-items>
                <v-btn dark text @click="$emit('closeDialog', false)">Save</v-btn>
            </v-toolbar-items> -->
            </v-toolbar>
            <v-card-text class="contnet-comment">
                <v-row>
                    <v-col class="item-comment active" cols="12" sm="12" v-for="i in 10" :key="i">
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
                            v-model="CONTENT_COMMENT"
                            append-icon="mdi-comment-arrow-right-outline"
                            @click:append="apiCommentFile()"
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
    props: ["dialog", "file"],
    data()
    {
        return {
            CONTENT_COMMENT: "",
            comments: []
        }
    },
    methods: {
        apiCommentFile()
        {
            if(this.CONTENT_COMMENT != "")
            {
                const data = new FormData()
                data.append("UUID_FILE_MANAGEMENT",this.file.UUID_FILE_MANAGEMENT)
                data.append("CONTENT_COMMENT",this.CONTENT_COMMENT)
                this.$http.post(this.$store.state.API_URL + 'comment/create?api_token='+this.$session.get('token'),data)
                .then(() => {

                })
            }
            
        },
        apiGetComment()
        {
            this.$http.get(this.$store.state.API_URL + 'comment?api_token='+this.$session.get('api_token')).then((response) => {
                this.comments = response.data
            })
        }
    }
}
</script>

<style scoped>
.bottom-comment {position: absolute;width: 98%;bottom: 0;}
.item-comment.active {text-align: right;margin-right: 15px;}
.contnet-comment {max-height: calc(100% - 124px);overflow: hidden;;overflow-y: scroll;position: absolute;width: 100%;top: 64px}
</style>