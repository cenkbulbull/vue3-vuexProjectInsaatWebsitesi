<template>
	<ul>
		<li><router-link :to="{name:'Home'}" exact active-class="active"><i class="fa-solid fa-house"></i> ANASAYFA</router-link></li>
		<li><router-link :to="{name:'Hizmetler'}" active-class="active">HİZMETLER</router-link></li>
		<li><router-link :to="{name:'Referanslar'}" active-class="active">REFERANSLAR</router-link></li>
		<li><router-link :to="{name:'Iletisim'}" active-class="active">İLETİŞİM</router-link></li>
	</ul>
</template>
<script>
	
</script>
<style scoped>
	ul{
		height: 60px;
		background-color: rgba(52, 51, 51, 0.4);
		font-size: 13px;
		font-weight: bold;
		text-align: center;
	}
	ul li{
		display: inline-block;
		margin: 20px;
	}
	ul li a{
		color: #fff;
	}
	ul li a:hover{
		color: rgba(132, 29, 29, 0.8);
		transition: .5s color;
	}
	.active{
		color: rgba(132, 29, 29, 0.8);
	}
</style>