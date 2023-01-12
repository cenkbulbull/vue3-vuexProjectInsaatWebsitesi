<template>
	<div class="home">
		<div class="desc">
			<div class="title">
				<h1 style="color: rgb(132, 29, 29);">Selim İnşaat</h1>
			</div>
			<div class="content">
				{{tanitim}}
			</div>
		</div>
		<div class="tamamlanan">
			<div class="item green">
				<i class="fa-solid fa-diagram-project"></i>
				<p style="font-size: 30px;">34+</p>
				<p>DEV PROJE</p>
			</div>
			<div class="item orange">
				<i class="fa-solid fa-shield"></i>
				<p style="font-size: 30px;">2,5+</p>
				<p>M2 PROJE TASARIMI</p>
			</div>
			<div class="item blue">
				<i class="fa-solid fa-box"></i>
				<p style="font-size: 30px;">14+</p>
				<p>TAAHHÜT</p>
			</div>
			<div class="item green">
				<i class="fa-solid fa-house-chimney"></i>
				<p style="font-size: 30px;">4+</p>
				<p>REVIT MAP</p>
			</div>
		</div>
		<ul>
			<li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
			<li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
			<li><a href=""><i class="fa-brands fa-facebook-f"></i></a></li>
			<li><a href=""><i class="fa-brands fa-pinterest-p"></i></a></li>
		</ul>
	</div>
</template>

<script>
	
	
	import {onMounted,ref,computed} from 'vue'
	import {firestoreRef} from "../firebase/config"
	import {useStore} from 'vuex'
	
	export default {
		setup(){
			const tanitim = ref("")
			const store = useStore()

			onMounted(async()=>{
				await firestoreRef.collection("siteAciklama").get()
				.then(snap=>{
					snap.forEach(doc=>{
						//console.log(doc.data().Text)
						store.dispatch("getTanitim",doc.data().Text)
						tanitim.value=store.getters.getStateTanitim
					})
				})
			})
			return {tanitim}

		}
	}
</script>
<style scoped>
	.home .desc{
		width: 800px;
		color: #292826;
		margin: 40px auto;
		font-size: 12px;
	}
	.home .desc .title{
		margin-bottom: 15px;
	}
	.home .tamamlanan{
		display: flex;
		width: 80%;
		margin:20px auto;
	}
	.home .tamamlanan .item{
		margin-left: 20px;
		width: 25%;
		height: 120px;
		text-align: center;
		font-size: 13px;
		padding:20px 0 ;
	}
	.home .tamamlanan .item i{
		font-size: 40px;
	}
	.home ul{
		position: absolute;
		right: 20px;
		bottom: 20px;
	}
	.home ul li{
		background-color: rgba(132, 29, 29, 0.8);
		border-radius: 50%;
		margin-top: 10px;
		text-align: center;
	}
	.home ul li a{
		padding: 5px;
		color: #fff;
	}
	.green{
		background-color: #19b550 !important;
		color: #fff;
	}
	.blue{
		background-color: #2d40ed !important;
		color: #fff;
	}
	.orange{
		background-color: #e6953e !important;
		color: #fff;
	}
</style>