<template>
	<div>
		<h1>About</h1>
		<article>
			
			<div class="profile">
				<img src="/img/profile.jpg" alt="profile picture">
			</div>
			<div class="cv">
				<h1>Jakob precht</h1>
				<h2>Frontened Developer</h2>
				<ul>
					<li>
						6 years experience
					</li>
					<li>
						Speaks: German, English & Danish.
					</li>
					<li>
						<p>
							Things I am working with:<br><br>
							Languages and Structures: JavaScript, HTML, CSS, PHP<br>
							Frameworks and Libraries: Vue, Nuxt, Node.js, jQuery, Three.js, p5.js<br>
							CMS: WordPress, TYPO3, NEOS<br>
							APIs: GraphQL, REST<br>
							Platforms and Tools: Docker, DDEV, NPM, Git<br>
							Design Tools: Adobe Suite, Figma, Adobe XD<br>
						</p>
					</li>
				</ul>
			</div>
		</article>
	</div>
</template>

<style scoped lang="scss">
	article {
		display: flex;
		flex-wrap: wrap;
		margin-top: 25px;

		h1 {
			width: 100%;
		}

		.profile {
			padding-right: 25px;

			img {
				max-width: 100%;
				width: 250px;
			}
		}


		ul {
			padding-left: 1.25em;
		}
	}



</style>

