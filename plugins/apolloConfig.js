export default (context) => {
  return {
    httpEndpoint: 'https://www.warcraftlogs.com/api/v2/client',

    /*
     * For permanent authentication provide `getAuth` function.
     * The string returned will be used in all requests as authorization header
     */
    getAuth: () =>
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5MWM2NDVhZC05NTlhLTQxYTctOTMyMC0xNzAyY2JmNGJkNTUiLCJqdGkiOiJjNWViNjc1MjNiNGE5ZjM0NzgzMWJlMzcxMzI5OTI2YTQwYjgxM2M3YjQ3Nzg4YTk1ZWFlMjU2MDk2NjRmOWRjMmQ3NTZlZmVlM2VkMTI4NCIsImlhdCI6MTYwMjgwOTUxNiwibmJmIjoxNjAyODA5NTE2LCJleHAiOjE2MDU0MDE1MTYsInN1YiI6IjE0MTEiLCJzY29wZXMiOlsidmlldy1wcml2YXRlLXJlcG9ydHMiXX0.jlWT5kl6Myb2O0J-3lh1WalTWfv8cRDWaicSaM6-7KxGflCqlNMc5pLvzXuoMwz_jKbaEhqam_pz2pNZU_dtUjzIa9eMI8TS68X9YK0sEMjbIdsYjj7ncUQWDKVJPJ6ZWRFHIXOnzDjbs8FaE7GaepYKcKHLEp7KkQl0b1YI9yPx4lnORjXpsU60bl8MqV3278Kx_6LnGNKee90jqob8UtgMmo_8t7P3Ww3IRDOQ8-8upbaGWoDL2Yl-AvtuPQ5NuPOg_ogTpIAO18BkFkCwvFTnmN1plWpQFi88bkWID_XG0_C92HixjQE9zpVbrqTV03-F_Z_Kg9ngpJW4ATmi8HWHtxdlJklPIVQJXOAmzmWZqa80m4Q6_enjrckceTApWYk2i8LHW9MCBUlKBeeR7hrTKkI7eYtxaheD5VwRLqu7KLhE-bZqS_XNmkCAaPkh2U1QNC2X-075jGNc_A0K0HGKXd2S_56ZMmv5jrkEWqNqyURd3Kyl8V022N2Bpv4SRJzpdsc9o4rlsVfN2otyfXcoFcVJaE5lvXBuN1m0Ya7ZiALjeOpL1qq1EJPDfAwdp9DIyFe5imEqdo63V7oKLZ_G-A9FOly9J7ei9IPs9B2v3sKh5Y28n77QnS1-KmFUJSME7neJF9f2nKv7_fNQxng16rIWVMP4oqVTKwy79-I',
  }
}
