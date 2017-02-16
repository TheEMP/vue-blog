<template>
    <div>
        <nav>
            <div class="nav-wrapper card blue darken-3">
                <form>
                    <div class="input-field">
                        <input id="search" type="search" v-model="searchString" required>
                        <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                        <i class="material-icons">close</i>
                    </div>
                </form>
                <ul>
                    <li v-for="question in filteredQuestions">
                        <router-link :to="'/questions/'+question._id">
                            {{question.title}}
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>


</template>

<script>
    export default {
        name: 'search',
        data() {
            return {
                questions: [{ id: 554554, title: 'Hello', body: 'Test' }],
                searchString: ''
            }
        },
        computed: {
            filteredQuestions() {
                debugger
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