<template>
	<h3 class="title">HİZMETLERİMİZ</h3>
	<div class="hizmetler">
		<div class="hizmet">
			<div class="icon blue">
				<i class="fa-solid fa-clock"></i>
			</div>
			<h5>ZAMANINDA TESLİM</h5>
			<p>Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Sit amet excepturi expedita molestiae voluptates perferendis.</p>
		</div>
		<div class="hizmet">
			<div class="icon orange">
				<i class="fa-solid fa-diagram-project "></i>
			</div>
			<h5>PROJE TASARIMI</h5>
			<p>Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Sit amet excepturi expedita molestiae voluptates perferendis.</p>
		</div>
		<div class="hizmet">
			<div class="icon blue">
				<i class="fa-solid fa-building"></i>
			</div>
			<h5>ORGANİZASYON</h5>
			<p>Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Sit amet excepturi expedita molestiae voluptates perferendis.</p>
		</div>
		<div class="hizmet">
			<div class="icon orange">
				<i class="fa-solid fa-shield"></i>
			</div>
			<h5>MÜŞAVİRLİK</h5>
			<p>Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Sit amet excepturi expedita molestiae voluptates perferendis.</p>
		</div>
		<div class="hizmet">
			<div class="icon green">
				<i class="fa-solid fa-house"></i>
			</div>
			<h5>TAAHHÜT</h5>
			<p>Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Sit amet excepturi expedita molestiae voluptates perferendis.</p>
		</div>
		<div class="hizmet">
			<div class="icon orange">
				<i class="fa-sharp fa-solid fa-unlock"></i>
			</div>
			<h5>REVİT MEP</h5>
			<p>Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Sit amet excepturi expedita molestiae voluptates perferendis.</p>
		</div>
	</div>
</template>
<script>
	
</script>
<style scoped>
	.title{
		text-align: center;
		margin: 30px 0;
		color: #2b2d30;
	}
	.hizmetler{
		display: flex;
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;
	}
	.hizmetler .hizmet{
		position: relative;
		width: 23%;	
		height: 120px;
		font-size: 13px;
		margin: 30px 20px;
		padding: 20px;
		text-align: center;
		background-color: #fff;
		color: #2b2d30;
		box-shadow: 4px 6px 13px;
	}
	.hizmetler .hizmet .icon{
		position: absolute;
		top: -40px;
		left: 135px;
		background-color: green;
		width: 80px;
		height: 80px;
		border-radius: 50%;
		font-size: 25px;
	}
	.hizmetler .hizmet .icon i{
		margin-top: 27px;
	}
	.hizmetler .hizmet h5{
		margin-top: 35px;
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