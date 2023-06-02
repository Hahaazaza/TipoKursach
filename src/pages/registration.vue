<template>
  <header>
    <registrationHeader/>  
  </header>
  <main>
    <registrationMain/>
  </main>
  <footer></footer>
</template>

<script>
import registrationHeader from '@/components/headers/registrationHeader'
import registrationMain from '@/components/mains/registrationMain'
export default{
name: 'App' ,
components: {
  registrationHeader,
  registrationMain
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