<script setup lang="ts">
import { onMounted } from 'vue'
import { ref } from 'vue';

defineProps<{
	title: string,
}>()

const activeDropdown = ref<boolean>(false)
const slotHeight = ref<number | null>(null);

const toggleDropdown = () => {
    activeDropdown.value = !activeDropdown.value;
}

const calculateSlotHeight = () => {
    const slotElement = document.querySelector('.slot span');
    slotHeight.value = slotElement.clientHeight;
}
onMounted(() => {
	calculateSlotHeight();
	window.addEventListener('resize', calculateSlotHeight);
})
</script>

<template>

<div class="flex flex-col border-2 border-purple rounded-lg py-2 px-4 overflow-hidden mb-10">
	<div 
		class="flex justify-between items-center cursor-pointer"
		@click="toggleDropdown"
	>
		<h3 class="text-purple font-bold">{{ title }}</h3>

		<svg class="min-w-[14px] min-h-[14px]" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path :class="[activeDropdown ? `rotate-90 opacity-0` : ``]" d="M5.72727 1.27273C5.72727 0.56982 6.29709 0 7 0C7.70291 0 8.27273 0.56982 8.27273 1.27273V12.7273C8.27273 13.4302 7.70291 14 7 14C6.29709 14 5.72727 13.4302 5.72727 12.7273V1.27273Z" fill="#515BE0"/>
			<path d="M12.7273 5.72727C13.4302 5.72727 14 6.29709 14 7C14 7.70291 13.4302 8.27273 12.7273 8.27273H1.27273C0.56982 8.27273 2.4907e-08 7.70291 5.56313e-08 7C8.63556e-08 6.29709 0.56982 5.72727 1.27273 5.72727L12.7273 5.72727Z" fill="#515BE0"/>
		</svg>
	</div>
	<div class="slot w-full bg-white rounded-lg duration-300 h-full"
		:style="{maxHeight: activeDropdown ? `calc(20px + ${slotHeight}px)` : '0px'}"
	>
<<<<<<< HEAD
		<span class="block mt-4 text-sm tracking-[0.03em] leading-[130%] font-medium pr-4">
			<slot></slot>
		</span>
=======
		<div ref="slotElement" class="block mt-2 mobile-text duration-150 pr-4">
			<slot></slot>
		</div>
>>>>>>> 659e0a4 (Slider, dropdown, responsive, layout, utilities, rename "financement" page)
	</div>
</div>

</template>


<style lang="scss">
@use '../styles/_variables.scss' as *;

svg, path {
	transition: .3s ease-in-out;
}

<<<<<<< HEAD
=======
.slot {
	transition: .3s ease-in-out max-height;	

	&:not(.active) {
		transition: .1s .3s ease-in-out padding, .3s ease-in-out max-height;	
	}

	&.active > div {
		padding-bottom: 10px;
	}
}

>>>>>>> 659e0a4 (Slider, dropdown, responsive, layout, utilities, rename "financement" page)
</style>
