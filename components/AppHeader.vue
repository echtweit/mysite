<template>
	<header class="header">
		<div class="header-row">
			<nuxtLink to="/">
	    		<img class="ident" src="/img/scalar.png" alt="ident">
			</nuxtLink>
		</div>
		<div class="menu">
			<nav>
			<ul>
				<li><NuxtLink to="/about">About</NuxtLink></li>
				<li><NuxtLink to="/portfolio">Portfolio</NuxtLink></li>
			</ul>
			</nav>
			<span class="menu-toggle"></span>
		</div>
	</header>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
	setup() {
		
	},
})
</script>


<style lang="scss">
	.header {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.header-row {
		display: flex;
		align-items: center;

		.ident {
			width: 80px;
			height: 80px;
			transition: 1s ease-in-out;
			will-change: auto;
			backface-visibility: hidden;

			&:hover {
				transform: rotateZ(90deg);
				background-color: #d3f0d8;
				border-radius: 900px;
			}
		}

		h1 {
			margin-left: 20px;
		}
		
	}
	// .menu {
	// 	border-radius: 200px;
	// 	background-color: #7a6c5d;
	// 	padding: 15px 55px 15px 15px;
	// 	position: relative;
	// 	overflow: hidden;

	// 	&:hover {
	// 		ul {
	// 			max-width: 251px;
	// 		}
	// 	}
		
	// 	ul {
	// 		list-style: none;
	// 		display: flex;
	// 		margin: 0;
	// 		padding: 0;
	// 		max-width: 0px;
	// 		transition: 255ms cubic-bezier(.22,.02,.54,1.43);
			
			
	// 		overflow: hidden;

	// 		li {
	// 			margin: 0 20px;

	// 			a {
	// 				color: #F7EFEC;
	// 				text-decoration: none;
	// 			}
	// 		}
	// 	}

	// 	.menu-toggle {
	// 		position: absolute;
	// 		right: 0;
	// 		top: 0;
	// 		bottom: 0;
	// 		width: 48px;
	// 		border-radius: 200px;
	// 		background: #1B272C;
	// 		cursor: pointer;

	// 		&:after {
	// 			content: "";
	// 			position: absolute;
	// 			top: 30%;
	// 			left: 30%;
	// 			width: 70%;
	// 			height: 70px;
	// 			border-radius: 100px;
	// 			border: 3px solid #F7EFEC;
				
	// 		}
	// 	}

	// }

	.router-link-exact-active {
		text-decoration: underline !important;
	}

	.menu {
		ul {
			list-style: none;
			margin: 0;
			padding: 0;
			display: flex;
			margin-left: 12.5px;

			li {
				margin: 0 12.5px;

				a {
					color: #333;
					//color: #c5b2b2;
					text-decoration: none;

					&:hover {
						text-decoration: underline;
					}
				}
			}
		}
	}

	
</style>