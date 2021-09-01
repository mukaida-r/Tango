<template>
  <div>
    <NuxtLink v-bind:to="{name:'word',query:{id:item}}" v-for="item of items" :key="item" class="flex justify-center mt-4 mb-4">
      <div class="folser-icon">
        <p>{{ item.icon }}</p>
      </div>
      <div class="MultilineRowMetadataStructure-rightChildren">
        <p>{{ item.title }}</p>
        <p>{{ item.date }}</p>
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
            icon: "1iconが入ります。" ,
            title: "タイトルが入ります",
            date: "日付(1)が入ります。"
          },
          {
            icon: "2iconが入ります。" ,
            title: "タイトルが入ります",
            date: "日付(2)が入ります。"
          },
          {
            icon: "3iconが入ります。" ,
            title: "タイトルが入ります",
            date: "日付(3)が入ります。"
          }
        ],
      }
    },
  }
</script>
