<template>
  <v-content class="theme-dark">
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <li v-for="(item, index) in list_data_corona" :key="index">
          {{ item.country }}
        </li>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "ContentHome",
  data: () => ({
    list_data_corona: null
  }),
  async created() {
    await this.$store.dispatch("corona/get_data_all_corona");
    this.list_data_corona = this.$store.getters["corona/data_corona"];
  }
};
</script>
