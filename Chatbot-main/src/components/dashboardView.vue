<template>
  <div>
    <div class="main_container">
      <div class="inner_container">
        <!-- <sidebarViewVue class="sidebar" /> -->
        <chatboxView class="chatbox" />
      </div>
    </div>
  </div>
</template>

<script setup>
import chatboxView from "../views/chatboxView.vue";
import sidebarViewVue from "../views/sidebarView.vue";
</script>

<style scoped>
.main_container {
  /* height: 100vh;
  background-color: #2d033b; */
}
.inner_container {
  display: flex;
}
.sidebar {
  flex: 20%;
}
.chatbox {
  flex: 80%;
}
</style>
