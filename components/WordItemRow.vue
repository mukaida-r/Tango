<template>
  <div>
    <NuxtLink v-bind:to="{name:'word',query:{id:information}}" v-for="information of informations" :key="information" class="flex justify-center mt-4 mb-4">
      <div class="folser-icon w-12">
        <span class="material-icons">folder</span>
      </div>
      <div class="MultilineRowMetadataStructure-rightChildren">
        <p>{{ information.id }}</p>
        <p>{{ information.name }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            title: "タイトルが入ります",
            date: "日付(1)が入ります。"
          },
          {
            title: "タイトルが入ります",
            date: "日付(2)が入ります。"
          },
          {
            title: "タイトルが入ります",
            date: "日付(3)が入ります。"
          }
        ],
        informations: null
      }
    },
  mounted () {
      this.$axios.get('http://localhost:5000/api')
      .then(response => {
        console.log(response);
        this.informations = response.data
      })
  },
  }
</script>
