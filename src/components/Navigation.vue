<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
    currentPath: string
}>()

const links = [
    {name: 'Particulier', link: '/particuliers', icon: 'house-blue'},
    {name: 'Infrastructure collective', link: '/infrastructures', icon: 'apartement-blue'},
    {name: 'Professionnel', link: '/professionnels', icon: 'building-blue'},
    {
        name: 'Services',
        icon: 'cards',
        sublinks: [
            {name: 'Installation & Maintenance', link: '/installation'},
            {name: 'Produits', link: '/produits'},
            {name: 'Tarifs', link: '/tarifs'},
        ]
    },
    {
        name: 'A savoir', 
        icon: 'bulb-menu',
        sublinks: [
            {name: 'Subventions', link: '/subventions'},
            {name: 'Informations utiles', link: '/informations'},
            {name: 'Qui sommes nous ?', link: '/a-propos'},
        ]
    }
]

const toggleMenu = ref<boolean>(false)
const toggleSubMenu = ref<string>('')

const openSubMenu = (value: string) => {
    toggleSubMenu.value = value;
}

const openMenu = (action: boolean) => {
    toggleMenu.value = action;
    if (action) {
        window.scrollTo(0, 0);
        document.querySelector('html').style.overflow = 'hidden';
        document.querySelector('body').style.overflow = 'hidden';
    } else {
        document.querySelector('html').style.overflow = 'auto';
        document.querySelector('body').style.overflow = 'auto';
    }
}
</script>

<template>
    <header class="wrapper">
        <div class="flex items-center justify-between w-100">
            <a href="/" class="flex justify-center items-center max-w-[80px] lg:max-w-[135px] lg:w-[135px]">
                <slot name="logo"/> 
            </a>
            <nav class="hidden lg:flex items-center gap-7 text-sm 2xl:gap-14" role="navigation" aria-label="Menu principal">
                <ul class="flex items-center gap-2 font-semibold whitespace-nowrap 2xl:gap-6">
                    <li 
                        v-for="(link, linkIndex) in links" :key="linkIndex" 
                        class="nav-link group"
                        :class="[
                            currentPath === link?.link?.split('/')[1] ? 'active' : '',
                            link.sublinks ? 'relative' : ''
                        ]"
                    >
                        <a v-if="!link.sublinks" :href="link.link" class="p-2">{{ link.name }}</a>
                        <p v-else class="p-2">{{ link.name }}</p>

                        <div class="absolute pt-4 min-w-[120px] duration-300 opacity-0 pointer-events-none transition-opacity group-hover:opacity-100 group-hover:pointer-events-auto">
                            <ul v-if="link.sublinks" class="z-50 min-w-fit p-3 pr-5 absolute top-full backdrop-blur-[7.5px] duration-[backdrop-blur] shadow-subLinks rounded-sm left-2 flex flex-col justify-start items-start gap-4 font-semibold whitespace-nowrap bg-[#DFE1F0] w-fit">
                                <li v-for="(sublink, sublinkIndex) in link.sublinks" :key="sublinkIndex"
                                    :class="[
                                        currentPath === sublink.link?.split('/')[1] ? 'active' : '',
                                    ]"
                                >
                                    <a class="flex hover:text-purple" :href="sublink.link">{{ sublink.name }}</a>
                                </li>
                            </ul>
                        </div>
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
                class="burger-nav flex lg:hidden items-center gap-7 text-sm 2xl:gap-14" 
                role="navigation"
                aria-label="Menu principal"
            >
                <ul 
                    class="main-nav"
                >
                    <li 
                        v-for="(link, linkIndex) in links" :key="linkIndex" 
                        :class="currentPath === link?.link?.split('/')[1] ? 'active' : ''"
                    >
                        <template v-if="!link.sublinks">
                            <a :href="link.link">
                                <img 
                                    :src="`/img/icons/${link.icon}.svg`"
                                    :alt="`Icon ${link.icon}`"
                                >
                                <p>{{ link.name }}</p>
                            </a>
                        </template>

                        <template v-else>
                            <div 
                                class="overlay" 
                                :class="toggleSubMenu === link.name ? 'active' : ''" 
                                @click="openSubMenu(link.name)"
                            >
                                <div>
                                    <img 
                                        :src="`/img/icons/${link.icon}.svg`"
                                        :alt="`Icon ${link.icon}`"
                                    >
                                    <p>{{ link.name }}</p>
                                </div>

                                <ul class="sub-nav">
                                    <li 
                                        v-for="(subLink, subLinkIndex) in link.sublinks" :key="subLinkIndex" 
                                        :class="currentPath === subLink?.link?.split('/')[1] ? 'active' : ''"
                                    >
                                        <a :href="subLink.link">{{ subLink.name }}</a>
                                    </li>
                                </ul>
                            </div>

                            
                        </template>
                       
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style lang="scss">
@use '../styles/_variables.scss' as *;

.nav-link {
    position: relative;

    &:after {
        @include position(calc(90%), 10px);
        background-color: $purple;
        height: 2px;
        width: 0;
        transition: .1s linear;
    }

    &:hover:after {
        transition: .3s ease-in-out;
        width: 40px;
    }
}

li.active {
    color: $purple;
    pointer-events: none;

    * {
        color: $purple;
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
    background-color: $deep-blue;
    transition: .3s;

    &.open {
        pointer-events: all;
        translate: 0;
    }

    &.close {
        pointer-events: none;
        translate: 100%;
    }
    
    ul.main-nav {
        @include flex(center, stretch, row, wrap, $gap: 10px);
        max-width: 320px;
        text-align: center;
        font-weight: 600;

        @media screen and (min-width: 500px) {
            max-width: 400px;
        }

        @media screen and (min-width: 600px) {
            max-width: 500px;
        }

        & > li {
            aspect-ratio: 60/58;
            flex: calc(50% - 10px);
            max-width: calc(50% - 10px);
            border-radius: 5px;
            border: solid 1px var(--purple);
            color: var(--blue);

            & > a {
                @include flex(center, center, column, $gap: 10px);
                padding: 20px;
                height: 100%;
                width: 100%;
                font-size: 12px;
                &:hover {
                    color: var(--yellow);
                }
            }

            svg path {
                stroke: var(--purple);
            }
        }

    }

    .overlay {
        position: relative;
        height: 100%;
        cursor: pointer;


        & > div {
            @include flex(center, center, column, $gap: 10px);
            padding: 20px;
            height: 100%;
            width: 100%;
            font-size: 12px;
            position: relative;
            z-index: 2;
            transition: .3s;

            &:hover {
                color: var(--yellow);
            }
        }

        &.active {
            .sub-nav {
                opacity: 1;
                pointer-events: all;
            }
        }

        .sub-nav {
            @include flex(center, flex-start, column);
            @include position(0,0);
            width: 100%;
            height: 100%;
            padding: 10px;
            font-size: 12px;
            opacity: 0;
            text-align: left;
            border-radius: 5px;
            background-color: var(--deep-blue);
            pointer-events: none;
            transition: .2s ease-in-out;
            z-index: 3;

            li {
                width: 100%;

                a {
                    width: 100%;
                    padding: 10px 0;
                    transition: .3s;

                    &:hover {
                        color: var(--yellow);
                    }
                }
            }
        }
    }


}

</style>
  
