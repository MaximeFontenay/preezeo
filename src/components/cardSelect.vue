<script setup lang="ts">
import { ref } from 'vue';

interface Item {
	text: string,
	icon: string,
	active: boolean,
}

defineProps<{
    items: Array<Item>
}>()

defineEmits(['update'])

</script>

<template>

<article 
	v-for="(item, itemIndex) in items"
	:key="itemIndex"
	:class="[
		'card-select flex flex-1 gap-3 items-center relative flex-col rounded-lg bg-t border-2 border-dashed border-purple cursor-pointer',
		item.active ? 'active border-solid' : '',
	]"
	@click="item.active = true"
>
	<img 
		:src="item.icon"
		alt=""
		class="icon"
		loading="lazy"
		draggable="false"
		decoding="async"
	>
	<h3>{{ item.text }}</h3>
	{{  item.active }}
</article>

</template>


<style lang="scss">
@use '../styles/_variables.scss' as *;


article {
	padding: 50px 30px;
	cursor: pointer;
	transition: .2s ease-in-out;

	&:hover {
		border-style: solid;
	}

	&.active {
		background-color: rgba(81, 91, 224, 0.10);
		border-style: solid;
		cursor: initial;

		h3 {
			color: $purple;
		}
	}

	h3 {
		text-align: center;
		font-size: 14px;
		font-style: normal;
		font-weight: 600;
		white-space: nowrap;
	}
}

</style>
