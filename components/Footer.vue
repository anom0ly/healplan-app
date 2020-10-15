<template>
  <v-footer app padless>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link.name"
        color="black"
        text
        rounded
        class="my-2"
        nuxt
        :to="link.url"
      >
        {{ link.name }}
      </v-btn>
    </v-row>
    <v-col class="text-center py-4" cols="12">
      <v-btn class="primary" depressed>
        <v-icon>mdi-copyright</v-icon> {{ new Date().getFullYear() }} -
        <strong>Heal Plan</strong>
      </v-btn>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [
      { name: 'Home', url: '/' },
      { name: 'Inspire', url: '/inspire' },
      { name: 'Contact Us', url: '/' },
    ],
  }),
}
</script>
