<template>
	<div>
		<h1>
			Jakob Precht<br>
			Frontend {{ currentWord }}
		</h1>
		<p>This is my rag-tag portfolio site</p>
		<br>
		<a href="mailto:precht.jakob@gmail.com">Contact me</a><br>
		<NuxtLink to="/about">Learn more about me</NuxtLink><br>
		<NuxtLink to="/about">See projects i have worked on</NuxtLink><br>

	</div>
</template>

<script>
import wordlist from '../public/words.json';



// still getting used to nuxt3 ...
export default {
	data() {
		return {
			words: wordlist,
			currentIndex: 0,
			currentWord: '',
			typing: false,
			speed: 50,
		};
	},
	mounted() {
		this.startTypingEffect();
	},
	methods: {
		startTypingEffect() {
			let usedWords = [];
			const getRandomIndex = () => {
				return Math.floor(Math.random() * this.words.length);
			};
			
			const typeWriter = (txt) => {
				let i = 0;
				const len = txt.length;
				
				const type = () => {
					if (i < len) {
						this.currentWord += txt.charAt(i);
						i++;
						setTimeout(type, this.speed);
					} else {
						this.typing = false;
						setTimeout(this.displayNextWord, 2000);
					}
				};

				type();
			};

			this.displayNextWord = () => {
				this.currentWord = '';
				let randomIndex;
				let randomWord;
				
				do {
					randomIndex = getRandomIndex();
					randomWord = this.words[randomIndex];
				} while (usedWords.includes(randomWord));

				usedWords.push(randomWord);

				const maxUsedWords = 10;
				if (usedWords.length > maxUsedWords) {
					usedWords.shift();
				}

				this.typing = true;
				typeWriter(randomWord);
			};

			this.displayNextWord();
		},
	},
};
</script>