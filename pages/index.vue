<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <logo-bold />
      </div>
      <v-card>
        <v-card-title class="headline">Welcome to Heal Plan </v-card-title>
        <v-card-text>
          <p>
            We are just getting started, so check back often for our awful
            progress! We may get this done in Shadowlands.
          </p>
          <div class="text-xs-right">
            <v-icon color="#01d355">mdi-coffee</v-icon>
          </div>
          <hr class="my-3" />
          <small>Like in Blizzard Soon Time</small>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import LogoBold from '~/components/LogoBold'

export default {
  components: {
    LogoBold,
  },
}
</script>
