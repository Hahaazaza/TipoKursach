<template>
    <header>
      <loginHeader/>  
    </header>
    <main>
      <loginMain/>
    </main>
    <footer></footer>
</template>

<script>
  import loginHeader from '@/components/headers/loginHeader'
  import loginMain from '@/components/mains/loginMain'
  export default{
  name: 'App' ,
  components: {
    loginHeader,
    loginMain
  }
}
</script>

<style>
header {
  margin-bottom: 2%;
}
main {
  margin: 0 2% 0 2%;
}
</style>