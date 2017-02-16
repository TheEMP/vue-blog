<template>
    <div>
        <nav class="nav-extended card blue darken-3">
            <div class="nav-wrapper">
                <h1 class="brand-logo center">BluBlog</h1>
            </div>
            <div class="nav-content">
                <ul class="tabs tabs-transparent">
                    <li class="tab"><router-link :to="{name: 'home'}"> Home </router-link></li>
                    <li class="tab"><router-link :to="{name: 'new'}"> New Post </router-link></li>
                </ul>
            </div>
        </nav>
        <Search></Search>
    </div>
</template>

<script>
    import Search from './Search.vue'
    export default {
        name: 'navbar',
        components: { Search }
    }

</script>

<style>

</style>