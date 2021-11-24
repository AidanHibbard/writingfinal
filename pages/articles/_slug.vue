<template>
    <articles>
        <h1>{{ article.title }}</h1>
        <br />
            <TableOfContents :toc="article.toc" />
        <nuxt-content :document="article" />
    </articles>
</template>

<script>
import TableOfContents from '~/components/TableOfContents.vue'
export default {
    components: {
        TableOfContents,
    },
    async asyncData({ $content, params, error }) {
        try {
            const [article] = await $content('articles', { deep: true })
                .where({ dir: `/${params.slug}` })
                .fetch()
            return { article }
        } catch (err) {
            error({
                statusCode: 404,
                message: 'Article could not be found'
            })
        }
    }
}
</script>

<style scoped>

</style>