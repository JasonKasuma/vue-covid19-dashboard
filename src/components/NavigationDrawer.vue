<template>
  <v-navigation-drawer v-model="drawer" app clipped dark>
    <v-list dense>
      <v-list-item link @click="navRoute('/')">
        <v-list-item-action>
          <v-icon>dashboard</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link @click="navRoute('/about')">
        <v-list-item-action>
          <v-icon>info</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>About</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NavigationDrawer",
  data: () => ({
    drawer: null
  }),
  methods: {
    navRoute(link) {
      this.$router.push(link);
    }
  }
};
</script>
