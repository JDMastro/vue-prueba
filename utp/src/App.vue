<template>
  <div id="app">
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";

export default {
  name: 'App',
  components: {
    //HelloWorld,
    Header,
    Footer,
    Main
  }
}
</script>

<style>

</style>
