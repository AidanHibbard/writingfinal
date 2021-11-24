<template>
    <article>
        <h1>{{ article.title }}</h1>
            <br />
        <h4>
            {{article.author}}, 
            {{ article.published_date}}
            <nuxt-link :to="article.origin_link">
                Original Article
            </nuxt-link>
        </h4>
        <nuxt-content :document="article" />
    </article>
</template>

<script>
export default {
    async asyncData({ $content, params, error }) {
        try {
            const [article] = await $content(`articles/${params.slug}`)
                .fetch()
            console.log(article)
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
article {
    padding-left: 10px;
    margin-top: 25px;
    max-width: 550px;
    margin: 0 auto;
}
h1 {
    text-align: center;
    padding-bottom: 0;
    margin-bottom: 0;
}
h4 {
    margin-top: 0;
    padding-top: 0;
    padding-bottom: 10px;
}
a {
    margin-left: 45px;
}
</style>