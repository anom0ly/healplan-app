<template>
  <v-app-bar fixed app>
    <logo />
    <v-toolbar-title>Heal<strong>Plan</strong></v-toolbar-title>
    <v-spacer />
    <v-btn
      icon
      href="https://twitter.com/anom_mw"
      target="_blank"
      rel="noopener noreferrer"
    >
      <v-icon>mdi-twitter</v-icon>
    </v-btn>
    <v-btn
      icon
      href="https://github.com/anom0ly/healplan-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      <v-icon>mdi-github</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from '~/components/Logo.vue'

export default Vue.extend({
  components: {
    Logo,
  },
})
</script>
