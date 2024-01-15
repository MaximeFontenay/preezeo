<script setup lang="ts">
import { ref } from 'vue';

interface Item {
	title: string,
	active: boolean,
}

defineProps<{
    items: Array<Item>
}>()

defineEmits(['close'])

</script>

<template>

<article 
	v-for="(item, itemIndex) in items"
	:key="itemIndex"
	@click="item.active = true"
>
	<div class="flex items-center justify-between gap-6">
		<h3>{{ item.title }}</h3>
		<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M17.5 0C12.8253 0 8.43062 1.82 5.12641 5.12641C1.82109 8.43062 0 12.8264 0 17.5C0 22.1736 1.82109 26.5694 5.12641 29.8736C8.43062 33.18 12.8253 35 17.5 35C22.1747 35 26.5694 33.18 29.8736 29.8736C33.1789 26.5694 35 22.1736 35 17.5C35 12.8264 33.1789 8.43062 29.8736 5.12641C26.5694 1.82 22.1747 0 17.5 0ZM29.1003 29.1003C26.0017 32.1989 21.8827 33.9062 17.5 33.9062C13.1173 33.9062 8.99828 32.1989 5.89969 29.1003C2.80109 26.0017 1.09375 21.8827 1.09375 17.5C1.09375 13.1173 2.80109 8.99828 5.89969 5.89969C8.99828 2.80109 13.1173 1.09375 17.5 1.09375C21.8827 1.09375 26.0017 2.80109 29.1003 5.89969C32.1989 8.99828 33.9062 13.1173 33.9062 17.5C33.9062 21.8827 32.1989 26.0017 29.1003 29.1003Z" fill="#E1FFF9"/>
			<path d="M24.0734 10.9256C23.8602 10.7123 23.5134 10.7123 23.3002 10.9256L17.5 16.7268L11.6998 10.9256C11.4866 10.7123 11.1398 10.7123 10.9266 10.9256C10.7133 11.1389 10.7133 11.4856 10.9266 11.6989L16.7267 17.5001L10.9266 23.3014C10.7133 23.5147 10.7133 23.8614 10.9266 24.0746C11.0337 24.1818 11.1738 24.2343 11.3138 24.2343C11.4538 24.2343 11.5938 24.1807 11.7009 24.0746L17.5 18.2734L23.3002 24.0746C23.4073 24.1818 23.5473 24.2343 23.6873 24.2343C23.8273 24.2343 23.9673 24.1807 24.0745 24.0746C24.2878 23.8614 24.2878 23.5147 24.0745 23.3014L18.2733 17.5001L24.0734 11.6989C24.2878 11.4856 24.2878 11.14 24.0734 10.9256Z" fill="#E1FFF9"/>
		</svg>
	</div>
	<slot name="content"></slot>
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
		font-size: 30px;
		font-style: normal;
		font-weight: 500;
		white-space: nowrap;
	}
}

</style>
