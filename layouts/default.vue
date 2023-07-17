<template>
	<div class="content">
		<AppHeader />
		<slot />
		<ClientOnly>
			<CanvasComp />
		</ClientOnly>
	</div>
</template>
<script>
const title = ref('Jakob Precht - Frontend Dev')
const description = ref('This is my rag-tag portfolio')


useHead({
	title,
	meta: [{
		name: title,
		content: description
	}]
})

</script>

<style  lang="scss">



	body {
		
		background: #545252;
		color: #333;
		// color: #c5b2b2;
		font-family: Arial, Helvetica, sans-serif;
		padding: 0;
		margin: 0;
	}

	.content {
		padding-left: 2%;
		padding-right: 2%;
		padding-top: 1.5%;

		position: absolute;
		top: 10%;
		left: 10%;
		right: 10%;
		padding-bottom: 60px;
		z-index: 2;
		transform: 255ms ease-in-out;
		// bottom: 10%;
		// overflow: auto;
		
		// z-index: -1;
		
		&::after {
			content: '';
			position: absolute;
			left: 0;
			top: 0;
			bottom: 60px;
			right: 0;
			background: hsl(27, 41%, 85%);
			border-radius: 20px;
			backdrop-filter: blur(200px);
			opacity: 0.8;
			will-change: auto;
			transition: 255ms ease-in-out;
			box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
			z-index: -1;
			transform: 255ms ease-in-out;
		}

		
	}

	.content >div {
		padding: 20px;
		box-sizing: border-box;
		padding-top: 20px;


		* {
			color: #333;
			
		}
	}

	canvas {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		max-width: 100%;
		height: 100vh;
		z-index: -1;
	}



</style>

