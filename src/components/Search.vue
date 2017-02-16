<template>
    <div>
        <nav>
            <div class="nav-wrapper">
                <form>
                    <div class="input-field">
                        <input id="search" type="search" v-model="searchString" required>
                        <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                        <i class="material-icons">close</i>
                    </div>
                </form>
            </div>
        </nav>
    </div>


</template>

<script>
    export default {
        name: 'search',
        data() {
            return {
                questions: [],
                searchString: ''
            }
        },
        computed: {
            filteredQuestions: function () {

                var questArray = this.questions
                var userQuery = this.searchString
                if (userQuery.length > 0) {
                    userQuery = userQuery.trim().toLowerCase();
                    questArray = questArray.filter(function (item) {
                        if (item.title.toLowerCase().indexOf(userQuery) !== -1) {
                            return item;
                        }
                    })
                    return questArray;
                }
            }
        }
    }

</script>

<style>

</style>