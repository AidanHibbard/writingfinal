<template>
  <v-app dark>
    <v-main>
    <v-app-bar
      dark
      style="
        background-color: transparent;
      "
    >
        <v-app-bar-nav-icon v-if="drawer===false" @click="drawer = true"></v-app-bar-nav-icon>

          <v-toolbar-title
            v-if="drawer===false"
          >
          Finding Life
        </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer 
      dark 
      v-model="drawer" 
      style="
        position: fixed; 
        top: 0; 
        left: 0; 
        overflow-y: scroll;
        ">
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="text--accent-4"
        >
          <nuxt-link to="/">
            <v-list-item>
                <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
          </nuxt-link>

          <ArticlesContainer />

          <ResourcesContainer />

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
        <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import ArticlesContainer from '~/components/ArticlesContainer.vue'
import ResourcesContainer from '~/components/ResourcesContainer.vue'
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),
  components: {
    ResourcesContainer,
    ArticlesContainer,
  },
}
</script>

<style scoped>
.container {
  margin: 0;
  padding: 0;
  max-width: 100%;
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