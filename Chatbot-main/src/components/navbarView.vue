<template>
  <div>
    <div class="sidebar_container">
      <div class="sidebar_inner_container">
        <ul>
          <div class="pill">
            <li class="logo">
              <ph-list :size="28" class="icons" />Eddie
            </li>
            <li></li>
          </div>
          <div class="pill">
            <li><ph-user-circle :size="32" class="icons" /></li>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
* {
  color: var(--text);
}
ul {
  display: flex;
  justify-content: space-between;
  align-content: center;
  list-style: none;
  margin: 0.75rem 1.15rem;
}
li {
  display: flex;

  align-items: center;
}
.pill {
  display: flex;
}
.logo {
  font-weight: 400;
  font-size: 1.25rem;
}
.icons {
  margin: 0px 5px;
}
</style>
