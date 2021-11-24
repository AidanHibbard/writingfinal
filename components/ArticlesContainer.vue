<template>
    <div>
        
        <v-list-item
            v-for="(article, index) in articleTitles"
            :key="index"
        >
            <nuxt-link :to="{ name: 'articles-slug', params: { slug: article.a } }">
                <v-list-item-title>
                    {{article.title.substring(0,30)}}...    
                </v-list-item-title>
            </nuxt-link>
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
a:link {
    color: white;
    text-decoration: none;
}
a:visited {
    color: white;
    text-decoration: none;
} 
a:hover {
    color: white;
    text-decoration: none;
}
a:active {
    color: white;
    text-decoration: none;
} 
</style>