<template>
    <div id="QuickInfoContainer">
        <center>
            <v-btn
                rounded
                color="primary"
                dark
                >
                <nuxt-link :to="{ name: 'articles-slug', params: { slug: 'government-cut-nasa-seti-funding' } }">
                    Get Started
                </nuxt-link>
            </v-btn>
        </center>
        <p>
            200 Billion Galaxies found, 
            four thousand earth like planets, 
            and zero intelligent life contacted. 
            Yet astronomers claim we've only 
            explored a bathtub out of the oceans size
            vomule of space. With almost 20 years passing since 
            the search for intelligent life was pulled from NASA's
            budget cries have continued to grow in support of adding it back.
            Politicians have been reluctant to support the motion,
            with money already tight for other operations even a project that takes 
            1/1000 the budget has to be scrutinized. NASA's current astrobiology 
            instrumentation searches for microorganisms as we expect any life on dead planets 
            will be like the organisms that feed off volcanos in the deepest regions of the ocean.
            So if we don't have the proper tools to listen or talk we may never 
            meet some cosmic neighbors and if we do what should we say?
        </p>
    </div>
</template>

<script>
export default {
    name: 'QuickInfo'
}
</script>

<style scoped>
p {
    padding-left: 15px;
    padding-right: 15px;
    max-width: 550px;
    margin: 0 auto;
}
.v-btn {
    margin-bottom: 15px;
}
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