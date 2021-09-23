<template>
  <div class="text-center">
    <button v-on:click="show">
      <span class="material-icons w-12 h-12 leading-10 bg-green-400 rounded-lg text-white items-center">create_new_folder</span>
      <p>新規作成</p>
    </button>

    <modal name="modal-content" :height="680">
      <p>表</p>
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <p>裏</p>
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <button class="block mx-auto mt-4">保存</button>
    </modal>
  </div>
</template>

<script>
export default {
  methods: {
    show() {
      this.$modal.show("modal-content")
    },
    hide() {
      this.$modal.hide("model-content")
    }
  }
}
</script>
