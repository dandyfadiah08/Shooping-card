<template>
<body id="dekstop flex item-center justify-center gap-10">
  <card />
</body>
  
</template>

<script>
import card from './components/card.vue'

export default {
  name: 'App',
  components: {
    card
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#dekstop{
position: relative;
width: 2504px;
height: 1731px;

background: #FCFCFC;
}
</style>
