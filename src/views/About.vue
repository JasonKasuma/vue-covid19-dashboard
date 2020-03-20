<template>
  <v-app id="About">
    <app-bar></app-bar>
    <navigation-drawer></navigation-drawer>
    <content-about></content-about>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import appBar from "../components/AppBar";
import navigationDrawer from "../components/NavigationDrawer";
import appFooter from "../components/Footer";
import contentAbout from "../components/content/ContentAbout";

export default {
  name: "About",
  components: { appBar, navigationDrawer, appFooter, contentAbout }
};
</script>

<style lang="scss">
$bg-black: #363636;

#About {
  .theme-dark {
    background: $bg-black;
  }
}
</style>
