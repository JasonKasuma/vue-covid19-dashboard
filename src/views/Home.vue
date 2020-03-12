<template>
  <v-app id="Home" dark>
    <v-navigation-drawer v-model="drawer" app clipped dark>
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left color="red darken-4" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>COVID-19 Dashboard</v-toolbar-title>
    </v-app-bar>

    <v-content class="theme-dark">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center"></v-row>
      </v-container>
    </v-content>

    <v-footer app dark>
      <span>COVID-19 Dashboard - Created by Munir Ap</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    drawer: null
  })
};
</script>

<style lang="scss">
$bg-black: #363636;

#Home {
  .theme-dark {
    background: $bg-black;
  }
}
</style>
