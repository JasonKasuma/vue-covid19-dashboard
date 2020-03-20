<template>
  <v-content class="theme-dark" id="ContentAbout">
    <v-container>
      <v-card dark="" class="mx-auto" width="800" shaped="">
        <v-list-item>
          <span class="headline">COVID-19 Dashboard</span>
        </v-list-item>
        <v-list-item>
          <div>
            Data sources this application are taken from
            <a href="https://www.worldometers.info/coronavirus/"
              >https://www.worldometers.info/coronavirus/</a
            >
            and periodically retrieved and updated automatically.
          </div>
        </v-list-item>
        <v-card-actions>
          <v-btn color="red darken-3" text>
            any issue? contact to softwaremakassar@gmail.com
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "ContentAbout"
};
</script>
