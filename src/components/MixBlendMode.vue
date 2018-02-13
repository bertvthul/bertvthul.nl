<template>
  <div id="mixBlendMode">
    <header class="secondary">
      <ul class="unstyled">
          <li @click="overlaycolor=color" v-for="color in overlaycolors" class="liblock" v-bind:class="{active:(color==overlaycolor)}"><span v-bind:style="{backgroundColor: color}"></span></li>
        	<li class="liblock"><input type="color" name="color" id="colorPicker" v-on:change="colorPicked()" /></li>
      </ul>
      <div class="clearfix"></div>
      <ul class="unstyled">
        <li @click="bgimage=bg" v-for="bg in bgimages" class="liblock" v-bind:class="{active:(bg==bgimage)}"><span v-bind:class="bg"></span></li>
      </ul>


      <div class="clearfix"></div>
    </header>


    <ul class="fCards" v-bind:class="'c'+nrcols">
        <li v-for="blendmode in blendmodes" class="fCard" @click="blendModeClicked(blendmode)">
          <div class="fCardHolder">
            <div class="imgHolder" v-bind:class="bgimage">
              <div class="imgOverlay" v-bind:class="{hidden:(blendmode=='normal')}" v-bind:style="{backgroundColor: overlaycolor,mixBlendMode:blendmode}"></div>
              <div class="imgData">
                <div class="padding">
                  <i class="fa fa-cog fCardEdit pull-right"></i>
                  <h4>{{blendmode}}</h4>

                </div>
              </div>
            </div>
          </div>
        </li>
    </ul>
    <div class="fModalOverlay" @click="modalvisible=false" v-bind:class="{show:modalvisible}"></div>
    <div id="selection" class="fModal" v-bind:class="{show:modalvisible}">

      <div class="fModalContent">
        <div class="pull-right w50">
          <div class="imgHolder pt65" v-bind:class="bgimage">
            <div class="imgOverlay" v-bind:class="{hidden:(blendmode=='normal')}" v-bind:style="{backgroundColor: overlaycolor,mixBlendMode:blendmode}"></div>
            <div class="imgData">
              <div class="padding"><h4>{{blendmode}}</h4></div>
            </div>
          </div>
        </div>
        <div class="pull-left w50">
          <div class="paddingRight">
            <div class="pull-right">
              <span class="btn" @click="switchBlendmode(-1)"><i class="fa fa-chevron-left"></i></span>
              <span class="btn" @click="switchBlendmode(1)"><i class="fa fa-chevron-right"></i></span>

            </div>
            <h3 class="fModalTitle">{{blendmode}}</h3>
            <p>Mooie stijl! Gebruik deze code in je project:</p>

            <div id="blendModeCodeWrap">
            <span class="btn" @click="copyText()">Kopieren</span>
            <textarea id="blendModeCode">
.overlay {
  background-color: {{overlaycolor}};
  mix-blend-mode: {{blendmode}};
}</textarea>
            </div>
<ul class="unstyled">
    <li @click="overlaycolor=color" v-for="color in overlaycolors" class="liblock" v-bind:class="{active:(color==overlaycolor)}"><span v-bind:style="{backgroundColor: color}"></span></li>
    <li class="liblock"><input type="color" name="color" id="colorPicker" v-on:change="colorPicked()" /></li>
</ul>
<div class="clearfix"></div>
<ul class="unstyled">
  <li @click="bgimage=bg" v-for="bg in bgimages" class="liblock" v-bind:class="{active:(bg==bgimage)}"><span v-bind:class="bg"></span></li>
</ul>

          </div>
      </div>
      <div class="clearfix"></div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'mixblendmode',
    data() {
        return {
            'title':'CSS mix blend mode',
            'description':'<p>mix blend mode tests</p>',
            'nrcols':6,
            'bgimage':'bgimage1',
            'bgimages':['bgimage1','bgimage2','bgimage3',
            'bgimage4','bgimage5','bgimage6','bgimage7','bgimage8'],
            'overlaycolor':'#1abc9c',
            'overlaycolors':['#1abc9c','#3498db','#9b59b6',
            '#34495e','#f1c40f','#e67e22','#e74c3c','#95a5a6',
            '#ecf0f1','#111111'],
            'modalvisible':false,
            'blendmode':'',
            'blendmodes':[
              'normal', 'multiply', 'screen', 'overlay','darken',
              'lighten','color-dodge','color-burn','hard-light',
              'soft-light','difference','exclusion',
              'hue','saturation','color','luminosity'
            ]
        }
    },
    methods: {
      colorPicked: function(e){
        var colorpicked=document.getElementById('colorPicker').value;
        this.overlaycolors.push(colorpicked);
        this.overlaycolor=colorpicked;
      },
      blendModeClicked:function(blendmode){
        this.blendmode=blendmode;
        this.modalvisible=true;
      },
      switchBlendmode:function(increment){
        var curindex = this.blendmodes.indexOf(this.blendmode);
        curindex += increment;
        if(curindex >  this.blendmodes.length){
          curindex=0;
        } else if(curindex <  0){
          curindex=this.blendmodes.length;
        }
        this.blendmode = this.blendmodes[curindex];
      },
      copyText:function(){
        var copyText = document.getElementById("blendModeCode");
        copyText.select();
        document.execCommand("Copy");
      }
    },
    metaInfo: {
      title: 'CSS Mix Blend Mode testing tool',
      meta: [
          { name: 'description', content: 'A testing and viewing tool for all the CSS mix blend modes. See what color and mode works for your project.' },
          { name:'author', 'content': 'Bert van t Hul'}
        ]
    }
}
</script>

<style scoped>
  .fCard {
    cursor:pointer;
  }
  #blendModeCodeWrap {
    position: relative;
  }
  #blendModeCodeWrap .btn {
    position: absolute;
    top:10px;
    right:10px;
    z-index: 2;

  }
  textarea#blendModeCode {
    min-height: 112px;
    background: #eaeaea;
  }
</style>
