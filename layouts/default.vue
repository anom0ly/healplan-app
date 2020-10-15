<template>
  <v-app>
    <heal-header />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <heal-footer />
  </v-app>
</template>

<script>
import HealHeader from '~/components/Header'
import HealFooter from '~/components/Footer'

export default {
  components: {
    HealHeader,
    HealFooter,
  },

  data() {
    return {}
  },
}
</script>
