import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
	state: () => ({
		bg: 'bg-white',
		modal: false,
		feedback: false,
		comp: 'Contacts',
		lang: 'rus',
		langProp: {
	
			'rus': {
				'catalogue': 'Каталог',
				'about': 'О нас',
				'blog': 'Блог',
				'contacts': 'Контакты'
			},
			'en':{
				'catalogue': 'Products',
				'about': 'About us',
				'blog': 'Blog',
				'contacts': 'Contacts'
			},
			'kyr':{}
		}
	}),
})
