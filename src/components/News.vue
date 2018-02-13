<template>
<div class="newssource">
    <SourceSelection v-on:sourceChanged="sourceChanged"></SourceSelection>
    <NewsList v-bind:source="source"></NewsList>
</div>
</template>

<script>
import SourceSelection from '@/components/SourceSelection'
import NewsList from '@/components/NewsList'
export default {
    name:'news',
    components: {
        SourceSelection,
        NewsList
    },
    data(){
        return {
            source:''
        }
    },
    methods: {
        sourceChanged:function(source){
            this.source=source;
        }
    },
    metaInfo: {
      title: 'Nieuws overzicht',
      meta: [
          { name: 'description', content: 'Nieuws lijstje' }
        ]
    }
}
</script>

<style scoped>

</style>