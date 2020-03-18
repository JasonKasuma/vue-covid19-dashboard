<template>
  <v-app id="Home" dark>
    <app-bar></app-bar>
    <navigation-drawer></navigation-drawer>
    <content-home></content-home>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import appBar from "../components/AppBar";
import navigationDrawer from "../components/NavigationDrawer";
import appFooter from "../components/Footer";
import contentHome from "../components/content/ContentHome";

export default {
  name: "Home",
  components: { appBar, navigationDrawer, appFooter, contentHome }
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
