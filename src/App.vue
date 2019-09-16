<template>
  <div id="app">
    <template lang="html">
      <div>
        <vm-date-picker type="daterange" :options="options4" placeholder="Fechas" v-model="date"/>
      </div>
    </template>
  </div>
</template>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
