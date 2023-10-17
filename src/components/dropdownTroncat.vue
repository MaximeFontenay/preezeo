<script setup lang="ts">
import { onMounted } from 'vue'
import { ref } from 'vue';

const slotElement = ref(null)
const activeDropdown = ref<boolean>(false)
const slotHeight = ref<number | null>(null);

const toggleDropdown = () => {
    activeDropdown.value = !activeDropdown.value;
}

const calculateSlotHeight = () => {
	if(slotElement.value) {
		slotHeight.value = slotElement.value.clientHeight + 10;
	}
}
onMounted(() => {
	if(slotElement.value) {
		calculateSlotHeight();
		window.addEventListener('resize', calculateSlotHeight);
	}
})
</script>

<template>

<div class="relative flex flex-col items-center justify-center w-full mb-5">
	
	<div class="slot w-full rounded-lg h-full px-4 overflow-hidden"
		:class="[activeDropdown ? `active` : ``]"
		:style="{maxHeight: activeDropdown ? `${slotHeight}px` : '300px'}"
	>

		<p ref="slotElement" class="mobile-text block mt-2 mobile-text duration-150 pr-4">
			<slot></slot>
		</p>
	</div>
	<div class="flex gap-1 px-4 self-start mt-2" v-if="!activeDropdown">
		<div class="bg-purple w-[4px] h-[4px] rounded-full"></div>
		<div class="bg-purple w-[4px] h-[4px] rounded-full"></div>
		<div class="bg-purple w-[4px] h-[4px] rounded-full"></div>
	</div>

	<div 
		class="flex justify-center items-center gap-2 cursor-pointer absolute -bottom-6 pt-6 left-1/2 -translate-x-1/2 w-full"
		@click="toggleDropdown"
		v-if="!activeDropdown"
	>
		<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M14 8.5L10.0499 12.4295C10.0108 12.4684 9.94746 12.4683 9.90851 12.4291L6 8.5" stroke="#515BE0" stroke-linecap="round"/>
			<rect x="19.5" y="0.5" width="19" height="19" rx="9.5" transform="rotate(90 19.5 0.5)" stroke="#515BE0" stroke-opacity="0.2"/>
		</svg>
	</div>
</div>

</template>


<style lang="scss" scoped>
@use '../styles/_variables.scss' as *;

svg, path {
	transition: .3s ease-in-out;
}

.slot {
	transition: .3s ease-in-out max-height;	
	position: relative;

	&:before {
		@include position(0,0);
		width: 100%;
		height: 100%;
		background: linear-gradient(180deg, rgba(238, 239, 242, 0.00) 50%, rgb(238, 239, 242) 100%);
		transition: .3s ease-in-out;
		opacity: 0;
	}

	&:not(.active) {
		transition: .1s .3s ease-in-out padding, .3s ease-in-out max-height;	

		&:before {
			opacity: 1;
		}
	}

	&.active > p {
		padding-bottom: 10px;
	}
}

svg {
	transform-origin: initial;
	path {
		transform-box: initial;
	}
}

</style>
