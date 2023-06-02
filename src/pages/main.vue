<template>
    <header>
      <mainHeader/>  
    </header>
    <main>
      <mainMain/>
    </main>
    <footer></footer>
</template>

<script>
  import mainHeader from '@/components/headers/mainHeader'
  import mainMain from '@/components/mains/mainMain'
  export default{
  name: 'App' ,
  components: {
    mainHeader,
    mainMain
  }
}
</script>

<style>
header {
  width: 100%;
  height: auto;
}
</style>