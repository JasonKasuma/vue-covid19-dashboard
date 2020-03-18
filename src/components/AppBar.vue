<template>
  <v-app-bar app clipped-left color="red darken-4" dark>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    <v-toolbar-title>COVID-19 Dashboard</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar"
};
</script>