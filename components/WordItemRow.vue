<template>
  <div>
    <div class="flex justify-center mt-4">
      <CreateFolder @close="addFolder"/>
      <EditFolder />
    </div>
    <NuxtLink v-bind:to="{name:'word',query:{id:information}}" v-for="information of informations" :key="information" class="flex justify-center mt-4 mb-4">
      <div class="folser-icon w-12">
        <span class="material-icons">folder</span>
      </div>
      <div class="MultilineRowMetadataStructure-rightChildren">
        <p>{{ information.name }}</p>
        <p>{{ information.id }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        informations: null
      }
    },
    mounted () {
        this.$axios.get('http://localhost:5000/api')
        .then(response => {
          this.informations = response.data
        })
    },
    methods: {
        addFolder(folder) {
        this.informations.push(folder)
      }
    }
  }
</script>
