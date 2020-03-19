<template>
  <v-content class="theme-dark" id="ContentHome">
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center" v-if="list_data_corona">
        <v-col
          cols="12"
          sm="3"
          v-for="(item, index) in list_data_corona"
          :key="index"
        >
          <v-card
            shaped=""
            dark=""
            class="card-country"
            @click="toggleCard(index + 1)"
          >
            <v-list-item three-line>
              <v-avatar :color="generateColorAvatar(index)" class="mr-2">
                <span class="subtitle-1">{{ index + 1 }}</span>
              </v-avatar>
              <v-list-item-content>
                <span class="title">{{ item.country }}</span>
                <v-list-item-subtitle>
                  <span class="overline">Total Cases:</span>
                  <span class="title ml-2">{{
                    formatNumber(item.total_cases)
                  }}</span>
                </v-list-item-subtitle>
                <div v-if="active_card == index + 1">
                  <v-list-item-subtitle>
                    <span class="overline">New Cases:</span>
                    <span class="subtitle-2 ml-2">{{
                      formatNumber(item.new_cases)
                    }}</span>
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    <span class="overline">Total Deaths:</span>
                    <span class="subtitle-2 ml-2">{{
                      formatNumber(item.total_deaths)
                    }}</span>
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    <span class="overline">New Deaths:</span>
                    <span class="subtitle-2 ml-2">{{
                      formatNumber(item.new_deaths)
                    }}</span>
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    <span class="overline">Total Recovered:</span>
                    <span class="subtitle-2 ml-2">{{
                      formatNumber(item.total_recovered)
                    }}</span>
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    <span class="overline">Active Cases:</span>
                    <span class="subtitle-2 ml-2">{{
                      formatNumber(item.active_cases)
                    }}</span>
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    <span class="overline">Serious Critical:</span>
                    <span class="subtitle-2 ml-2">{{
                      formatNumber(item.serious_critical)
                    }}</span>
                  </v-list-item-subtitle>
                </div>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "ContentHome",
  data: () => ({
    active_card: 0
  }),
  async created() {
    await this.$store.dispatch("corona/get_data_all_corona");
  },
  computed: {
    list_data_corona() {
      return this.$store.getters["corona/data_corona"];
    }
  },
  methods: {
    generateColorAvatar(index) {
      if (index < 3) {
        return "red darken-3";
      } else if (index < 10) {
        return "amber darken-2";
      } else if (index < 20) {
        return "indigo darken-2";
      } else if (index < 50) {
        return "blue darken-1";
      } else if (index < 100) {
        return "teal darken-1";
      } else {
        return "blue-grey darken-1";
      }
    },
    formatNumber(number) {
      return number.toLocaleString();
    },
    toggleCard(index) {
      this.active_card = this.active_card == index ? 0 : index;
    }
  }
};
</script>

<style lang="scss">
#ContentHome {
  .card-country {
    cursor: pointer;
  }

  .card-country:hover {
    transform: scale(1.1);
  }
}
</style>
