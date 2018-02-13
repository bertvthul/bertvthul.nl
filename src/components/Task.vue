<template>
<div id="task">
    <img v-if="task.image" v-bind:src="'http://u25190p19359.web0120.zxcs.nl/cms/media/tasks/images/resized/'+task.image" />
    <h1>{{task.title}}</h1>
    <div v-html="task.task"></div>
    <router-link to="/tasks" class="btn btn-success">Terug</router-link>
</div>
</template>

<script>
export default {
    name: "task",
    data(){
        return {
            task:[]
        }
    },
    methods: {
        getTask(id){
            this.$http.get('http://u25190p19359.web0120.zxcs.nl/cms/?option=api&view=task&id='+id)
            .then(response=>{
               this.task = response.data;
            }).catch(function(data){
                console.log(data);
            });
        }
    },
    created: function(){
        this.getTask(this.$route.params.id);
    },
    metaInfo () {
      return {
        title: this.task.title,
        meta: [
          { vmid: 'description', name: 'description', content: 'Beschrijving over '+this.task.title }
        ]
      }
    }
    
}
</script>

<style scoped>

</style>