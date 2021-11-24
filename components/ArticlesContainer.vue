<template>
    <div>
        <v-list-item
            v-for="(article, index) in articleTitles"
            :key="index"
        >
            <v-list-item-title>{{article.title}}</v-list-item-title>
        </v-list-item>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'ArticlesContainer',
    computed: {
        ...mapState({
            articleTitles: state => state.articleTitles
        })
    },
}
</script>

<style scoped>

</style>