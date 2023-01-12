<template>
  <nav>
    <Navbar/>
  </nav>
  <router-view/>
</template>

<script>
  import Navbar from "./components/Navbar"
  export default{
    components:{
      Navbar
    },
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
  *{
    font-family: 'Poppins', sans-serif;
    outline: none;
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
