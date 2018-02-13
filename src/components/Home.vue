<template>
    <div id="home">
      <div class="imgHolder bgteaser">
        <div class="imgData"><h1 v-if="params.showTitle">{{title}}</h1></div>
      </div>
        <div class="centered">

            <div class="content">
              <p class="lead" v-html="description"></p>
              <hr class="my-4">
                <router-link v-bind:to="'about'" class="btn">Lees verder</router-link>


                <div class="well media">
                    <div class="pull-left"><div class="imgHolder imgDefault"></div></div>
                    <div class="media-body">
                      <h3 class="media-heading">Bert van 't Hul</h3>
                      <div class="media-text">Full-stack developer</div>
                      <router-link v-bind:to="'about'" class="btn">Lees meer...</router-link>
                    </div>
                </div>
            </div><!-- content -->

        </div><!-- .centered -->
    </div>
</template>

<script>
export default {
    name: 'home',
    data() {
       return {
            title:'Vue.js website',
            description:'<p>Test website in Vue.js met api koppelingen, router en meta-data.</p>',
            params: {
                showTitle:true
            }
       }
    },
    metaInfo: {
      title: 'Dit is Home page vue titel',
      meta: [
          { name: 'description', content: 'Een meta beschrijving van de home pagina' },
          { name:'author', 'content': 'Bert'}
        ]
    }
}
</script>

<style scoped>

</style>
