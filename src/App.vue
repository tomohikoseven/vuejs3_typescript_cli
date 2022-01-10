<template>
  <div id="nav" class="view">
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/organisms/Header.vue";
import Footer from "@/organisms/Footer.vue";

export default defineComponent({
  name: "App",
  components: {
    Header,
    Footer,
  },
  setup() {
    return {};
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.view {
  margin: 0 auto;
  width: 320px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
