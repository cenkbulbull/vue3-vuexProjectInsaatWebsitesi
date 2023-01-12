<template>
	<h3 class="title">REFERANSLARIMIZ</h3>
	<div class="referanslar">
		<div v-for="(ref,index) in referanslar" :key="index" class="ref">
			<div class="refimage">
				<img :src="require(`@/assets/images/${ref.resim}`)">
			</div>
			<div class="content">
				<h2>{{ref.ad}}</h2>
				<p>{{ref.icerik}}</p>
			</div>
		</div>
	</div>

	<h3 class="title">HİZMET VERDİĞİMİZ BAZI FİRMALAR</h3>
	<div class="sirketler">
		<div v-for="(sirket,index) in sirketler" :key="index">
			<div class="sirketref">
				<img :src="require(`@/assets/images/${sirket}`)">
			</div>
		</div>
	</div>
</template>
<script>
	import referansGetir from "../composables/referansGetir"
	import firmaGetir from "../composables/firmaGetir"
	import {ref,computed} from 'vue'
	import {firestoreRef} from "../firebase/config"
	import {useStore} from 'vuex'
	export default{
		setup(){
			const store = useStore()

			const {referansYukle} = referansGetir()
			const {firmaYukle}=firmaGetir()

			referansYukle()
			firmaYukle()

			const referanslar = computed(()=>{
				return store.getters.getStateRef
			})

			const sirketler = computed(()=>{
				return store.getters.getStateSirketler
			})
			
			return {referanslar,sirketler}
		}

	}
</script>
<style scoped>
	.title{
		text-align: center;
		margin-top: 20px;
		color: #2b2d30;
	}
	.referanslar{
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		margin: 35px 0;
		color: #2b2d30;
	}
	.referanslar .ref{
		width:20%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-left: 33px;
	}
	.refimage{
		background-color: #fff;
		width: 80px;
		height: 80px;
		border-radius: 50%;
		border: 1px solid #bab8b8;
		padding: 10px;
	}
	.ref img{
		width: 80px;
		height: 80px;
		border-radius: 50%;
	}
	.content{
		font-size: 12px;
		margin-top: 20px;
		text-align: center;
	}
	.sirketler{
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	.sirketref{
		border: 1px solid #bab8b8;
		width: 150px;
		height: 80px;
		margin: 30px 5px;
	}
	.sirketref img{
		width: 150px;
		height: 80px;
	}
</style>