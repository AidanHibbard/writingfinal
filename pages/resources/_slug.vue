<template>
    <article>
        <h1>{{ resource.title }}</h1>
            <br />
        <nuxt-content :document="resource" />
    </article>
</template>

<script>
export default {
    async asyncData({ $content, params, error }) {
        try {
            const [resource] = await $content(`resources/${params.slug}`)
                .fetch()
            return { resource }
        } catch (err) {
            error({
                statusCode: 404,
                message: 'Resource could not be found'
            })
        }
    }
}
</script>

<style scoped>
article {
    padding-left: 10px;
    margin-top: 100px;
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