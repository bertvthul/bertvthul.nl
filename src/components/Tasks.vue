<template>
<div id="tasks">
    <h3>Taken</h3>
    <ul v-if="tasks">
        <li v-for="task in tasks" class="card" style="width: 31%;margin:0 1%;float:left;">
        
              <img class="card-img-top" v-if="task.image" v-bind:src="'http://u25190p19359.web0120.zxcs.nl/cms/media/tasks/images/thumbs/'+task.image" />
              <div class="card-body">
                <h4 class="card-title">{{task.title}}</h4>
                <p class="card-text" v-html="task.task"></p>
                <router-link class="btn btn-success" v-bind:to="'task/'+task.id">Lees meer</router-link>
                
              </div>
            
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name:"tasks",
    data(){
        return {
            tasks:[]
        }
    },
    created: function(){
        
        this.$http.get('http://u25190p19359.web0120.zxcs.nl/cms/index.php?option=api&view=tasks')
        .then(response=>{
           this.tasks = response.data;
        }).catch(function(data){
            console.log(data);
        });
    },
    metaInfo: {
      title: 'Een overzicht lijstje',
      meta: [
          { name: 'description', content: 'Een meta beschrijving van de lijst' }
        ]
    }
}
</script>

<style scoped>

</style>