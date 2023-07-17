<template>
	<div>
		<h1>Portfolio</h1>

		<div class="index">
			<ul>
				<li>
					<a href="https://www.sotax.com" target="_blank" ref="norefferer">
						<img src="/img/sites/0_sotax.com.png" alt="">
					</a>
				</li>
				<li>
					<a href="https://www.malreden.ch" target="_blank" ref="norefferer">
						<img src="/img/sites/1_malreden.ch.png" alt="">
					</a>
				</li>
				<li>
					<a href="https://www.mz-viva.ch" target="_blank" ref="norefferer">
						<img src="/img/sites/2_mz-viva.ch.png" alt="">
					</a>
				</li>
				<li>
					<a href="https://www.kinderkrebs-schweiz.ch" target="_blank" ref="norefferer">
						<img src="/img/sites/3_kinderkrebs-schweiz.ch.png" alt="">
					</a>
				</li>
				<li>
					<a href="https://www.co-architekten.ch" target="_blank" ref="norefferer">
						<img src="/img/sites/4_co-architekten.ch.png" alt="">
					</a>
				</li>
				<li>
					<a href="https://www.trallala-weine.ch" target="_blank" ref="norefferer">
					<img src="/img/sites/5_trallala-weine.ch.png" alt="">
					</a>
				</li>
				<li>
					<a href="https://www.martinaeschlimann.ch/" target="_blank" ref="norefferer">
						<img src="/img/sites/6_martinaeschlimann.ch.png" alt="">
					</a>
				</li>
				
				<li>
					<a href="https://www.movetia.ch" target="_blank" ref="norefferer">
						<img src="/img/sites/7_movetia.ch.png" alt="">
					</a>
				</li>
				<li>
					<a href="https://www.heyday.ch" target="_blank" ref="norefferer">
						<img src="/img/sites/8_heyday.ch.png" alt="">
					</a>
				</li>
				<li>
					<a href="https://www.petitepuce.ch" target="_blank" ref="norefferer">
						<img src="/img/sites/9_petitepuce.ch.png" alt="">
					</a>
				</li>
				<li>
					<a href="https://webwaren.digital/" target="_blank" ref="norefferer">
						<img src="/img/sites/10_webwaren.digital.png" alt="">
					</a>
				</li>
				<li>
					<a href="https://www.bauconstruct.ch" target="_blank" ref="norefferer">
					<img src="/img/sites/11_bauconstruct-services.ch.png" alt="">
					</a>
				</li>
				<li>
					<a href="https://www.vivianechassot.ch" target="_blank" ref="norefferer">
						<img src="/img/sites/12_vivianechassot.ch.png" alt="">
					</a>
				</li>
			</ul>
		</div>
		<!-- <ClientOnly>
			<PortfolioComp />
		</ClientOnly> -->

	</div>
</template>

<style scoped lang="scss">
	.index {
		ul {
			list-style: none;
			display: flex;
			flex-wrap: wrap;
			margin: 0;
			padding: 0;
			
			row-gap: 25px;
			column-gap: 25px;
			max-width: 1200px;

			li {
				max-width: calc(25% - 25px);
				min-width: 200px;
			}

			li, li a {
				display: flex;
				flex-direction: column;
			}

		}
	}
</style>

