<template>
    <blockquote class="comment-container card card-panel blue-grey lighten-3">
        <h3> Comments on {{parent.userId}}'s post</h3>
        <comment-item v-for="(item, index) in comments" :comment="item"></comment-item>
        
    </blockquote>
</template>

<script>
    import comment from "./Comment-item"
    //import threads from "./mock-threads.js"
    export default {
        name: "comment-list",
        methods: {
            setThreadInfo() {
                // Load Tags Date upvotes once the thread has been loaded
            },
            addComment() {
                this.$parent.addComment(this.curComment)
            },

        },
        computed:{
            mainComments() {
                return this.comments.filter(e=>{
                    if (!e.commentId) {
                        return e
                    }
                })
            }
        },
        mounted() {
            console.log("hi")
            // axios.get("api/comments/?threadId=" + this.id).then(res => {
            //     console.log(res)
            //     this.thread.comments = res.data.data
            // })
        },
        components: {
            "comment-item": comment
        },
        props: {
            comments: Array,
            parent: Object
        }
    }

</script>