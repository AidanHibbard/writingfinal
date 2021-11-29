<template>
    <div>
        <v-list-item
            @click="subMenu(dropdownState)"
        >
            <v-list-item-title>Unit Resources</v-list-item-title>
                <v-list-item-icon>
                <v-icon
                    v-if="dropdownState === false"
                >
                    mdi-arrow-down-thin-circle-outline
                </v-icon>
                <v-icon
                    v-else
                >
                    mdi-arrow-up-thin-circle-outline
                </v-icon>
            </v-list-item-icon>
        </v-list-item>
        <div v-if="dropdownState === true">
            <v-list-item
                v-for="(resource, index) in resourceTitles"
                :key="index"
            >
                <nuxt-link :to="{ name: 'resources-slug', params: { slug: resource.a } }">
                    <v-list-item-title>{{resource.title}}</v-list-item-title>
                </nuxt-link>
            </v-list-item>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'ResourcesContainer',
    data: () => ({
        dropdownState: false,
    }),
    computed: {
        ...mapState({
            resourceTitles: state => state.resourceTitles
        })
    },
    methods: {
        subMenu(state) {
            if (state === false) {
                this.dropdownState = true
            } else {
                this.dropdownState = false
            }
        },
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