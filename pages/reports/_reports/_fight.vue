<template>
  <v-container>
    <div>
      <H1>FIGHT BREAKDOWN!</H1>
      <p>This is fight # {{ this.$route.params.fight }}</p>
    </div>
  </v-container>
</template>

<script>
export default {
  /*
  validate({ params }) {
    return reportDataQuery.report.fights.includes(params.fight)
  },
  */
  data() {
    return {}
  },
  created() {
    console.log('fight component created')
  },
}
</script>
