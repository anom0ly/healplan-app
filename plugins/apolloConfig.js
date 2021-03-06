// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (context) => {
  return {
    httpEndpoint: 'https://www.warcraftlogs.com/api/v2/client',

    /*
     * For permanent authentication provide `getAuth` function.
     * The string returned will be used in all requests as authorization header
     */
    getAuth: () =>
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5MzYwMGQ5OS0yNTgwLTRkYzUtYThjYi0wYTg3MjgyMTVjNjciLCJqdGkiOiJhZjIzNWMwMDZjYzAxZThmNDFiMzY0MWM1YjFhMDEwZWNlOGY5N2M0ZWNkZTFlMmVmN2FkNzk3MzE5Y2NkOGVmNjQxYjBkMDkzMWFiZDUyYiIsImlhdCI6MTYyMDQwNzYyMCwibmJmIjoxNjIwNDA3NjIwLCJleHAiOjE2MjI5OTk2MjAsInN1YiI6IjE0MTEiLCJzY29wZXMiOlsidmlldy1wcml2YXRlLXJlcG9ydHMiXX0.xWh8pu3JNo4ZYbT9E0T0J3b8ILIPe-soKx-LGiX4vSNG7_TTDe-8XTlYMtk4xvzuaW0HaJiPZDcg2I3_aCFwPx9BSXHDmhXsMS5zGNXtmMv-3_Ko_XoJf2tYu0yp-oafCDvHcGPKigxUf5t9qeLK1w4DxlEgiHqMhJ_LNqk3CKNZq5EsH17rL79QJg4bbb0DBaXkui-TpBqwTJOXE20eKXD6vYdXkoHGiVbtW23kQTBqFj3uNfEXi-ZZeAJa5F_Kcr_C47DqigaAnUF75SrqQE4iEHZc8wMtp-YaUQQxSpKLcB0FBQzEOZvjTznRiXn5VNsPTuTz9LIbXvo2VOvgxxO8CEm1DifN6RY0yQuu77L5MTFzEyIeoMNmia_GbZfAufU3LcUbhFLU4Qs_CI3LQSSKl0qXnijhpvxq5sUF3PGY124IxDD6oiebDfxYJ7QdEf09DjaybVESbmsO9A4HOmT1rD8-DZBoNNnq2S6hD-aZN8TS-6XsKgo-4x8BSHuPlUIG-U70m16hH-c_8omFD5gDx0AqaM_DFbvovniBS0gNJj3pLv3ZEj-8Qx-Z_81PRA88wA3MrAc4m2_tjYgHk9NciYQX48O0YM6joW6QqjaSqvGiYuFdXwOwZiXQ4aZ66L7W9DNrHtvJhCzJ6PbHTZF5muZaBTMGHiSXM-_9Ius',
  }
}
