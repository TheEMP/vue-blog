<template>
    <div>
        <nav class="nav-extended">
            <div class="nav-wrapper">
                <a href="#" class="brand-logo">Logo</a>
                <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>
                </ul>
                <ul class="side-nav" id="mobile-demo">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>
                </ul>
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