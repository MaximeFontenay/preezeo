<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
    currentPath: string
}>()

const links = [
    {name: 'Particulier', link: '/particuliers'},
    {name: 'Infrastructure collective', link: '/infrastructures'},
    {name: 'Professionnel', link: '/professionnels'},
    {name: 'Services', link: '/services'},
    {name: 'A savoir', link: '/more'},
]

const toggleMenu = ref<boolean>(false)

const openMenu = (action: boolean) => {
    toggleMenu.value = action;
}
</script>

<template>
    <header class="container">
        <div class="flex items-center justify-between w-100">
            <a href="/" class="flex justify-center items-center w-[135px]">
                <slot name="logo"/> 
            </a>
            <nav class="hidden lg:flex items-center gap-7 text-sm 2xl:gap-14" role="navigation" aria-label="Menu principal">
                <ul class="flex items-center gap-4 font-semibold whitespace-nowrap 2xl:gap-8">
                    <li 
                        v-for="(link, linkIndex) in links" :key="linkIndex" 
                        class="nav-link"
                        :class="currentPath === link.link.split('/')[1] ? 'active' : ''"
                    >
                        <a :href="link.link">{{ link.name }}</a>
                    </li>
                </ul>
                <slot name="button"/> 
            </nav>

            <!-- Mobile burger menu -->
            <button
                class="burger-button flex lg:hidden" 
                type="button" 
                role="navigation" 
                :aria-labelledby="toggleMenu ? 'Close burger menu' : 'Open burger menu'"
                @click="openMenu(!toggleMenu)"
            >
                <svg v-if="!toggleMenu" aria-hidden="true" width="29" height="15" viewBox="0 0 29 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" width="21" height="1.66667" rx="0.833333" fill="#515BE0"/>
                    <rect y="6.66699" width="29" height="1.66667" rx="0.833333" fill="#515BE0"/>
                    <rect x="6" y="13.333" width="17" height="1.66667" rx="0.833333" fill="#515BE0"/>
                </svg>
                <svg v-else aria-hidden="true" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.8083 11.8078C12.2102 11.4059 12.2102 10.7544 11.8083 10.3525L8.14853 6.69268C8.08122 6.62537 8.08122 6.51624 8.14853 6.44893L11.8083 2.78913C12.228 2.36943 12.228 1.68897 11.8083 1.26927V1.26927C11.3886 0.849572 10.7082 0.849571 10.2885 1.26927L6.62954 4.9282C6.56175 4.99599 6.45184 4.99599 6.38405 4.9282L2.72512 1.26927C2.32324 0.867394 1.67167 0.867393 1.26979 1.26927V1.26927C0.867917 1.67115 0.867917 2.32272 1.26979 2.72459L4.87469 6.32949C4.97233 6.42712 4.97233 6.58542 4.87469 6.68305L1.26979 10.2879C0.850095 10.7076 0.850095 11.3881 1.26979 11.8078V11.8078C1.68949 12.2275 2.36996 12.2275 2.78965 11.8078L6.44946 8.148C6.51677 8.0807 6.6259 8.0807 6.69321 8.148L10.353 11.8078C10.7549 12.2097 11.4065 12.2097 11.8083 11.8078V11.8078Z" fill="#515BE0"/>
                </svg>
            </button>
            <nav 
                :class="toggleMenu ? 'open' : 'close'" 
                class="burger-nav flex lg:hidden relative items-center gap-7 text-sm 2xl:gap-14" 
                role="navigation"
                aria-label="Menu principal"
            >
                <ul 
                    class="flex flex-col justify-start items-center gap-4 font-semibold whitespace-nowrap"
                >
                    <li 
                        v-for="(link, linkIndex) in links" :key="linkIndex" 
                        :class="currentPath === link.link.split('/')[1] ? 'active' : ''"
                    >
                        <a href="link.link">{{ link.name }}</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style lang="scss">
@use '../styles/_variables.scss' as *;

.nav-link {

    &.active {
        color: $purple
    }
}

.burger-button {
    @include fixed-size(35px);
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1000;

    svg {
        @include fixed-size(20px);
    }
}

.burger-nav {
    @include flex();
    @include position(0,0,0,0, fixed);
    width: 100%;
    height: 100%;
    z-index: 999;
    background-color: white;
    transition: .3s;

    &.open {
        pointer-events: all;
        translate: 10%;
    }

    &.close {
        pointer-events: none;
        translate: 100%;
    }
}

</style>
  