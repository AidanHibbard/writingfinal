import Vuex from 'vuex'
const createStore = () => {
    return new Vuex.Store({
        state: () => ({
            resourceTitles: null,
            articleTitles: null,
        }),
        actions: {
            async nuxtServerInit() {
                const resourcesMeta = await this.$content('resources', { deep: true })
                    .only(['title', 'a'])
                    .without(['body'])
                    .fetch()
                const articlesMeta = await this.$content('articles', { deep: true })
                    .only(['title', 'a'])
                    .without(['body'])
                    .fetch()
                this.state.resourceTitles = resourcesMeta
                this.state.articleTitles = articlesMeta
            }
        }
    })
}
export default createStore