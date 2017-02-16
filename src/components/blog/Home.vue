<template>
    <div class="thread-container">
         <!--<router-link v-if="$route.path != '/new'" :to='{name: "new"}' class="waves-effect waves-light btn-large green"><i class="material-icons">&#xE8CD;</i>New Blog</router-link>-->
        <threadlist :threads="threads">
        </threadlist>
    </div>
</template>

<script>
    //import axios from 'axios'
    import threadlist from "./ThreadList"
    import mockData from "../../server-assets/blog-service.js"
    console.log(mockData)
    export default {
        name: "allthreads",
        data() {
            return {
                threads: mockData.getBlogs(),
                curPage: 0
            }
        },
        mounted() {
            console.log("route path", this.$route.path)
            // Load List of threads
            // axios.get("api/threads").then(res => {
            //     console.log("thread", res.data)
            //     this.threads = res.data.data
            // }).catch(err => {
            //     console.log(err)
            // })
            // console.log(this.threads)
            // var totalNeeded = Math.ceil(this.threads.length/20)
            // var count = 0 
            // this.totalthreads = Array.from({length:totalNeeded}, x => count += 1)
            // console.log(this.totalthreads, totalNeeded)

        },
        computed: {
            threadCount() {
                return this.threads.length
            }
        },
        methods: {
            changePage(page) {
                if (page === this.curPage) {
                    return
                }

                if (!this.totalthreads[page]) {
                    return
                }
            }
        },
        components: {
            threadlist
        }
    }

</script>