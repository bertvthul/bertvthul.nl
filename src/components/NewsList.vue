<template>
<div class="newsOutput">
    <div v-if="articles">
        <ul class="newslist">
            <li v-for="article in articles" class="media">
                <div class="pull-left">
                    <img width="100px" style="margin-right:20px;" v-bind:src="article.urlToImage" class="media-object">
                </div>
                <div class="media-body">
                    <h5 class="media-heading"><a v-bind:href="article.url" target="_blank">{{article.title}}</a></h5>
                    <div>{{article.description}}</div>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    name:'newslist',
    data (){
        return {
            articles:[]
        }
    },
    props:['source'],
    methods: {
        updateSource: function(source){
            this.$http.get('https://newsapi.org/v1/articles?source='+source+'&apiKey=36222ecec3d84994bbc35f75b9269cef')
            .then(response=>{
               this.articles = response.data.articles; 
            });
        }
    },
    created: function(val){
        this.updateSource(val)
    },
    watch: {
        source: function (val){
            this.updateSource(val);
        }
    }
}
</script>

<style scoped>
.newsOutput {
text-align:left;
}
ul.newslist li {
border-top: 1px solid #ccc;
padding:20px 0;
}
</style>