<template>
	<div class="contact">
		<div>
			<div class="desc">
				<h1 style="color: rgb(132, 29, 29);margin-bottom: 14px;">İnsaat Hizmetleri</h1>
				<p style="margin-bottom: 14px;" >Lorem, ipsum, dolor Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa reprehenderit quaerat, molestiae deserunt rem vel autem explicabo tempore cum. Adipisci minus delectus nam esse. Fugit autem dolores provident beatae reiciendis.</p>
				<span><i style="color: rgb(132, 29, 29);margin-bottom: 14px;" class="fa-solid fa-envelope"></i> info@insaathizmetleri.com</span>
				<span><i style="color: rgb(132, 29, 29);margin-bottom: 14px;" class="fa-solid fa-phone"></i> 0055 055 5555</span>
			</div>
			<div>
				<ul>
					<li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
					<li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
					<li><a href=""><i class="fa-brands fa-facebook-f"></i></a></li>
					<li><a href=""><i class="fa-brands fa-pinterest-p"></i></a></li>
				</ul>
			</div>
		</div>
		<div>
			<p>
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48152.69528633698!2d29.01271007818618!3d41.035243200158526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac826d524c9f1%3A0xc14f7612337b7f38!2zw5xza8O8ZGFyL8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1519733547760" width="100%" height="240" frameborder="0" style="border:0;position: absolute;bottom: 0;" allowfullscreen></iframe>
			</p>
		</div>
	</div>
</template>
<script>
	
</script>
<style scoped>
	.contact{
		width: 100%;
	}
	.contact div:first-child{
		display: flex;
	}
	.contact .desc{
		display: flex;
		flex-direction: column;
		width: 600px;
		margin: 50px auto;
		font-size: 13px;
	}
	.contact div:first-child ul{
		position: absolute;
		right: 20%;
		top: 22%;
	}
	.contact div:first-child ul li{
		background-color: rgba(132, 29, 29, 0.8);
		border-radius: 50%;
		margin-top: 10px;
		text-align: center;
	}
	.contact div:first-child ul li a{
		padding: 5px;
		color: #fff;
	}
</style>