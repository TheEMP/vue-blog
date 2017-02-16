<template>
    <div class="thread-container">
        <div class="card blue darken-3 white-text">
              <a @click="goBack" class="left backbtn btn-floating btn-large waves-effect waves-light red"><i class="material-icons">arrow_back</i></a>

            <div class="row">

                <div class="col s12">
                    <h1>Title: {{thread.title}}</h1>
                </div>
            </div>
            <div class="row">
                <div class="col s12">
                    <p class="flow-text">{{thread.userName}} ({{thread.userId}})</p>

                </div>
            </div>

            <vue-markdown :source="thread.text"></vue-markdown>
            <div class="row">
                <div class="col s12">
                    <!--<edit :comment="thread" :text="thread.text"></edit>-->
                    <reply :comment="thread"></reply>
                </div>
            </div>
        </div>
        <comment-list onThread="true" :parent="thread" :comments="thread.comments"></comment-list>

    </div>
</template>

<script>
    import VueMarkdown from "vue-markdown"
    import comments from "../comment/Comment-list"
    import mockData from "./MOCK_DATA.json"
    //import edit from "../shared/Edit"
    import reply from "../shared/Reply"
    export default {
        name: "thread",
        mounted() {
            this.updateData()
            window.updateThreadData = this.updateData
        },
        components: {
            VueMarkdown,
            "comment-list": comments,
             reply,
            // edit
        },
        methods: {
            updateData() {
                let blog = mockData[this.id -1]
                this.thread = blog
            },
            goBack(){
                window.history.back()
            }
        },
        props: {
            id: { default() { return this.$route.params.id } }
        },
        data() {
            return {
                thread: { comments: [] }
            }
        }
    }

</script>

<style>
    a.backbtn {
        margin: 15px
    }
</style>