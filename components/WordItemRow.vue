<template>
  <div>
    <div v-for="item of items" :key="item" class="flex justify-center mt-4 mb-4">
      <div class="folser-icon">
        <p>{{ item.icon }}</p>
      </div>
      <div class="MultilineRowMetadataStructure-rightChildren">
        <p>{{ item.title }}</p>
        <p>{{ item.date }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            icon: "iconが入ります。" ,
            title: "タイトルが入ります",
            date: "日付が入ります。"
          },
          {
            icon: "iconが入ります。" ,
            title: "タイトルが入ります",
            date: "日付が入ります。"
          },
          {
            icon: "iconが入ります。" ,
            title: "タイトルが入ります",
            date: "日付が入ります。"
          }
        ],
      }
    },
  }
</script>
