<template>
<div class="sourceSelection">
kies bron:
<select v-on:change="sourceChanged" class="selectpicker">
    <option v-bind:value="source.id" v-for="source in sources">{{source.name}}</option>
</select>

<div v-if="source"><h4><a v-bind:href="source.url" target="_blank">{{source.name}}</a></h4><div v-html="source.description"></div></div>
</div>
</template>

<script>
export default {
    name:'sourceselection',
    data(){
        return {
            sources: [],
            source: ''
        }
    },
    created:function(){
        this.$http.get('https://newsapi.org/v1/sources?language=en')
        .then(response=>{
           this.sources = response.data.sources;
           this.$emit('sourceChanged',this.sources[0].id);
        });
    },
    methods: {
        sourceChanged:function(e){
           for(var i=0; i<this.sources.length;i++){
            if(this.sources[i].id == e.target.value){
                this.source=this.sources[i];
            }
           }
           this.$emit('sourceChanged',e.target.value);
        }
        
    }
}
</script>

<style scoped>

</style>