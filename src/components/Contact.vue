<template>
    <div id="contact">
      <div class="imgHolder bgteaser">
        <div class="imgData">
          <h1>{{ title }}</h1>
        </div>
      </div>
      <div class="centered">
        <div class="content">
          <Alert message="Test" />
          
          <div v-html="description"></div>
        </div>
      </div>



    </div>
</template>

<script>
import Alert from './Alert';
export default {
    name: 'contact',
    components: {
        Alert
    },
    data() {
        return {
            'title':'Contact',
            'description':'<p>Neem contact op voor meer info... ik reageer niet.</p>'
        }
    }
}

</script>

<style scoped>

</style>
