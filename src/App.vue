<template>
  <div id="app">
    <Dispatch />
  </div>
</template>

<script>
import Dispatch from './views/Dispatch'

export default {
  name: 'App',
  components: {
    Dispatch
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>
