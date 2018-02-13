<template>
  <div id="about">
    <div class="imgHolder bgteaser">
      <div class="imgData">
        <h1>{{ title }}</h1>
      </div>
    </div>
    <div class="centered">
      <div class="content">
        <div v-html="description"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
        title: 'About',
        description: '<p>Ik ben bert</p>',
        params: {
            showTitle:true
        }
    }
  },
  metaInfo: {
      title: 'Over ons',
      meta: [
          { name: 'description', content: 'Een meta beschrijving van de over ons' }
        ]
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
