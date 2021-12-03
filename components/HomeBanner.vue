<template>
    <v-img
    max-height="250"
    :src="Orion"
    >
        <div id="banner">
            <h2>
                Should NASA Fund the Search for 
                Intelligent Life?
            </h2>
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
                Orion Nebula
                <br />
                Image by Aidan Hibbard
            </p>
        </div>
    </v-img>
</template>

<script>
import * as OrionImage from '~/assets/orion.jpg'
export default {
    name: 'HomeBanner',
    data: () => ({
        Orion: OrionImage
    })
}
</script>

<style scoped>
#banner {
    text-align: center;
    margin-top: 50px;
}
h2 {
    margin-left: 10px;
    margin-right: 10px;
}
.v-btn {
    margin-top: 15px;
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
p {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0;
    margin: 0;
    text-align: left;
    font-size: 12px;
}
</style>