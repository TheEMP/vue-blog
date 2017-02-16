<template>
    <div :if="canEdit" class="edit-container">
        <div class="row">

            <div class="col s6 offset-s3">
                <a @click="toggle" class="waves-effect waves-light red btn"><i class="material-icons left">mode_edit</i>Edit</a>

                <form @submit.prevent="save" v-if="active">
                    <textarea class="materialize-textarea" rows="8" cols="100" v-model="msgText"></textarea>
                    <VueMarkdown class="left-align" v-if="active" :source="msgText">
                    </VueMarkdown>
                    <button class="waves-effect waves-light waves-red red btn" type="submit"><i class="material-icons">&#xE86C;</i>Comfirm Edit</button>

                </form>
            </div>

        </div>
    </div>
</template>

<script>
    import VueMarkdown from "vue-markdown"
    //  import cookies from "../../assets/getCookies.js"
    import mockData from "../../server-assets/blog-service.js"
    import axios from "axios"
    export default {
        name: "edit",
        methods: {
            toggle() {
                this.active = !this.active
            },
            save() {
                //
               mockData.editBlog(this.id, this.msgText)
               console.log(this.$parent.updateData)
               this.$parent.updateData()
            }
        },
        mounted() {
            this.msgText = this.text
        },
        computed: {
            canEdit() {
                return true
            }
        },
        data() {
            return {
                msgText: this.text,
                active: false
            }
        },
        components: {
            VueMarkdown
        },
        props: {
            text: String,
            comment: Object,
            id: String
        },
    }

</script>