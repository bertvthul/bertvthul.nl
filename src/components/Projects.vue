<template>
  <div id="projects">
    <div class="centered">
      <h1>Projecten</h1>
      <ul class="fCards">
        <li class="fCard">
          <div class="fCardHolder">
            <router-link v-bind:to="'/projects/mix-blend-mode'" class="imgHolder imgDefault"></router-link>
            <div class="fCardData">
              <h4>CSS mix blend mode</h4>
              <router-link v-bind:to="'/projects/mix-blend-mode'" class="btn">Bekijk project</router-link>
            </div>
          </div>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
  export default {
    name:"projects",
    data() {
      return {

      }
    },
    methods: {

    }

  }
</script>

<style scoped>

</style>
