<template>
  <div class="text-center">
    <button v-on:click="show">
      <span class="material-icons w-12 h-12 leading-10 bg-green-400 rounded-lg text-white items-center">create_new_folder</span>
      <p>新規作成</p>
    </button>

    <modal name="model-content">
      <p>新しいフォルダを作成</p>
      <input v-model="newFolder" class="border-current" placeholder="新規フォルダの名前">
      <button class="block mx-auto" v-on:click="createFolder">この名前で作成</button>
    </modal>
  </div>
</template>

<script>
export default {
  methods: {
    show() {
      this.$modal.show("model-content")
    },
    hide() {
      this.$modal.hide("model-content")
    },
    async createFolder() {
      if(this.newFolder) {
        await this.$axios.$post('http://localhost:5000/api', {
          "fa": this.newFolder
          })
            .then(response => {
              return response;
            })
            .catch(error=> {
              console.log(error);
              for(let key of Object.keys(error)) {
                console.log(key);
                console.log(error.config.data);
              }
            })
      }
    }
  }
}
</script>
