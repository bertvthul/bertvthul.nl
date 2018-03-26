<template>
	<div id="app" :class="{menuopen:menuopen}">
		<div class="mobMenuOverlay" @click="toggleMobMenu"></div>
		<header class="site-header shade">
				<router-link v-bind:to="'/'" id="logo">BVTH</router-link>
				<div id="mainmenu">
					<div class="mobMenuHeader">Menu</div>
					<ul class="menu">
							<li><router-link to="/">Home</router-link></li>
							<li><router-link to="/projects">Projecten</router-link></li>
							<li><router-link to="/about">Over</router-link></li>
							<li><router-link to="/tasks">Nieuws</router-link></li>
							<li><router-link to="/contact">Contact</router-link></li>
					</ul>
					<div class="mobMenuFooter">Volg me ook op hyves!</div>
				</div>
				<div id="mobMenuBtn" @click="toggleMobMenu"><span class="mobMenuLine"></span></div>

				<div class="clearfix"></div>
		</header>
		<transition :name="transitionName" mode="out-in">
			<router-view/>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'app',
	data() {
		return {
			"menuopen":false,
			transitionName: 'fade'
		}
	},
	watch: {
	  '$route' (to, from) {
	  	console.log(to.path);
	    const toDepth = to.path.split('/').length
	    const fromDepth = from.path.split('/').length
	    this.transitionName = toDepth < fromDepth ? 'fade' : 'fade'
	  }
	},
	methods:{
		toggleMobMenu: function(){
			this.menuopen = !this.menuopen;
			console.log('menu open: '+this.menuopen);
		}
	},
	metaInfo: {
			title: 'Standaard titel Vue js website',
			titleTemplate: '%s | Motivo'
		}
}
</script>

<style>
@import './assets/css/focus.css';
@import './assets/css/template.css';

/* durations and timing functions.              */
.fade-enter-active {
	transition: all 0.4s ease;
}
.fade-leave-active {
	transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
</style>
