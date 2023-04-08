<template>
  <div>
    <h1>Delete Page</h1>
    <button class="delete-btn" @click="doDelete">Delete Page</button>
    <message-dialog ref="messageDialog"></message-dialog>
  </div>
</template>

<script>
import { ref } from 'vue';
import MessageDialog from '../components/MessageDialog.vue'

export default {
  components: { MessageDialog },
  setup() {
    const messageDialog = ref(null);

    const doDelete = async () => {
      await messageDialog.value.show({
        title: 'Delete Page',
        message: 'Are you sure you want to delete this page? It cannot be undone.',
      })

      console.log('done!!!');
    }

    return {
      messageDialog,
      doDelete
    }
  }
}
</script>

<style scoped>
.delete-btn {
  padding: 0.5em 1em;
  background-color: #eccfc9;
  color: #c5391a;
  border: 2px solid #ea3f1b;
  border-radius: 5px;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
}
</style>