<template>
  <v-content class="theme-dark" id="ContentHome">
    <v-container>
      <v-row v-if="list_data_corona">
        <v-col cols="12" sm="12">
          <v-text-field
            dark
            label="Solo"
            v-model="search_key"
            @keyup="filterDataCorona"
            placeholder="Search Country"
            solo
          ></v-text-field>
          <v-list-item>
            <v-chip
              class="mr-2"
              :outlined="active_sort != 1"
              dark
              color="blue-gray darken-3"
              pill
              @click="sortByDataCorona(1)"
              >Sort by Total Cases</v-chip
            >
            <v-chip
              class="mr-2"
              :outlined="active_sort != 2"
              dark
              color="red darken-3"
              pill
              @click="sortByDataCorona(2)"
              >Sort by Total Deaths</v-chip
            >
            <v-chip
              class="mr-2"
              :outlined="active_sort != 3"
              dark
              color="green darken-3"
              pill
              @click="sortByDataCorona(3)"
              >Sort by Total Recovered</v-chip
            >
            <v-chip
              class="mr-2"
              :outlined="active_sort != 4"
              dark
              color="amber darken-3"
              pill
              @click="sortByDataCorona(4)"
              >Sort by Total Criticals</v-chip
            >
          </v-list-item>
        </v-col>
        <v-col
          cols="12"
          sm="3"
          v-for="(item, index) in list_data_corona"
          :key="index"
        >
          <v-card
            shaped
            dark
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
                  <span class="title ml-2">
                    {{ formatNumber(item.total_cases) }}
                  </span>
                </v-list-item-subtitle>
                <div v-if="active_card == index + 1">
                  <v-list-item-subtitle>
                    <span class="overline">New Cases:</span>
                    <span class="subtitle-2 ml-2">
                      {{ formatNumber(item.new_cases) }}
                    </span>
                  </v-list-item-subtitle>

                  <v-list-item-subtitle>
                    <span class="overline">Deaths:</span>
                    <v-chip small class="ml-2" color="red darken-3" pill>
                      <v-icon left small>sentiment_very_dissatisfied</v-icon>
                      {{ formatNumber(item.total_deaths) }}
                    </v-chip>
                  </v-list-item-subtitle>

                  <v-list-item-subtitle>
                    <span class="overline">New Deaths:</span>
                    <span class="subtitle-2 ml-2">
                      {{ formatNumber(item.new_deaths) }}
                    </span>
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    <span class="overline">Recovered:</span>
                    <v-chip small class="ml-2" color="green darken-3" pill>
                      <v-icon left small>sentiment_very_satisfied</v-icon>
                      {{ formatNumber(item.total_recovered) }}
                    </v-chip>
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    <span class="overline">Active Cases:</span>
                    <span class="subtitle-2 ml-2">
                      {{ formatNumber(item.active_cases) }}
                    </span>
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    <span class="overline">Critical:</span>
                    <v-chip small class="ml-2" color="amber darken-3" pill>
                      <v-icon left small>sentiment_dissatisfied</v-icon>
                      {{ formatNumber(item.serious_critical) }}
                    </v-chip>
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
import _ from "lodash";

export default {
  name: "ContentHome",
  data: () => ({
    search_key: "",
    active_card: 0,
    active_sort: 1,
    master_data_corona: null,
    list_data_corona: null
  }),
  async created() {
    await this.$store.dispatch("corona/get_data_all_corona");
    this.master_data_corona = this.$store.getters["corona/data_corona"];
    this.list_data_corona = this.master_data_corona;
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
    },
    filterDataCorona() {
      if (this.search_key == "") {
        this.list_data_corona = this.master_data_corona;
      }
      this.list_data_corona = this.master_data_corona.filter(item =>
        item.country.toLowerCase().includes(this.search_key.toLowerCase())
      );
    },
    sortByDataCorona(index) {
      this.active_sort = index;
      switch (index) {
        case 1:
          this.list_data_corona = _.orderBy(
            this.list_data_corona,
            ["total_cases"],
            ["desc"]
          );
          break;

        case 2:
          this.list_data_corona = _.orderBy(
            this.list_data_corona,
            ["total_deaths"],
            ["desc"]
          );
          break;

        case 3:
          this.list_data_corona = _.orderBy(
            this.list_data_corona,
            ["total_recovered"],
            ["desc"]
          );
          break;

        case 4:
          this.list_data_corona = _.orderBy(
            this.list_data_corona,
            ["serious_critical"],
            ["desc"]
          );
          break;

        default:
          break;
      }
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
