<template>
  <div class="slider-container">
    <div class="slider" ref="sliderContainer">
      <slot 
        v-if="slot"
        v-for="(item, index) in items"
        :key="index"
        :name="`slide-${index}`"
        :class="[
          itemClass, 
          currentIndex === index ? 'active' : '',  
        ]"
        @click.native="scrollToSlide(index)"
      >
      </slot>
      <div
        v-else
        v-for="(item, defaultIndex) in items"
        :key="defaultIndex"
        :class="[
          itemClass, 
          currentIndex === defaultIndex ? 'active' : '',  
        ]"
        class="slider-item"
        @click="scrollToSlide(defaultIndex)"
        ref="slideRef"
      >
        <p v-html="item.html"></p>
      </div>

    </div>

    <div class="flex gap-6 items-center mt-2">
      <div 
        v-if="showNavBtn" 
        @click="goToSlide(currentIndex - 1)" 
        :class="currentIndex === 0 ? 'pointer-events-none opacity-30' :''" 
        class="flex items-center justify-center cursor-pointer duration-300 bg-transparent hover:bg-light-purple rounded-full"
      >
        <svg class="w-7 h-7 min-w-7 min-h-7 rotate-90" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 8.5L10.0499 12.4295C10.0108 12.4684 9.94746 12.4683 9.90851 12.4291L6 8.5" stroke="#515BE0" stroke-linecap="round"/>
          <rect x="19.5" y="0.5" width="19" height="19" rx="9.5" transform="rotate(90 19.5 0.5)" stroke="#515BE0" stroke-opacity="0.2"/>
        </svg>
      </div>
      <div class="slider-dots">
        <span
          v-for="(item, index) in items"
          :key="index"
          :class="{ 'active-dot': currentIndex === index }"
          class="dot"
          @click="goToSlide(index)"
          ref="dotRef"
        ></span>
      </div>
      <div 
        v-if="showNavBtn" 
        @click="goToSlide(currentIndex + 1)" 
        :class="currentIndex === items.length - 1 ? 'pointer-events-none opacity-30' :''" 
        class="flex items-center justify-center cursor-pointer duration-300 bg-transparent hover:bg-light-purple rounded-full"
      >
        <svg class="w-7 h-7 min-w-7 min-h-7 -rotate-90" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 8.5L10.0499 12.4295C10.0108 12.4684 9.94746 12.4683 9.90851 12.4291L6 8.5" stroke="#515BE0" stroke-linecap="round"/>
          <rect x="19.5" y="0.5" width="19" height="19" rx="9.5" transform="rotate(90 19.5 0.5)" stroke="#515BE0" stroke-opacity="0.2"/>
        </svg>
      </div>
    </div>

</div>
</template>

<script setup lang="ts">
import { ref, onMounted, type PropType} from 'vue';

const currentIndex = ref<number>(0);
//const items = ref<Array<HTMLElement | null>>([]);
const slideRef = ref<Array<HTMLElement | null>>([]);
const dotRef = ref<Array<HTMLElement | null>>([]);
const sliderContainer = ref<HTMLElement | null>(null);
const itemWidth = ref<number>(0);

const props = defineProps({
  items: {
    type: Array as PropType<Array<{ html: string }>>,
    required: true,
  },
  itemClass: {
    type: String,
    default: '',
  },
  slot: {
    type: Boolean,
    default: false,
  },
  showNavBtn: {
    type: Boolean,
    default: false,
  },
});

const goToSlide = (index: number) => {
  currentIndex.value = index;
  scrollToSlide(index);
};


const scrollToSlide = (index: number) => {
  sliderContainer.value.scrollTo({ left: itemWidth.value * index - 20, behavior: 'smooth' });
};


const handleScroll = () => {
  if (sliderContainer?.value) {
    const scrollLeft = sliderContainer.value.scrollLeft;
  
    for (let i = 0; i < props.items.length; i++) {
      const element = slideRef.value[i];
      if (element) {
        const offsetLeft = element.offsetLeft;
        if (scrollLeft === 0) {
          currentIndex.value = 0;
        } 
        else if (scrollLeft === sliderContainer.value.scrollWidth - sliderContainer.value.clientWidth) {
          currentIndex.value = props.items.length - 1;
        } 
        else if (offsetLeft <= scrollLeft && offsetLeft + element.clientWidth >= scrollLeft) {
          currentIndex.value = i + 1;
        }
      }
    }
  }
};

const setItemWidth = () => {
  if(props.slot) {
    itemWidth.value = sliderContainer.value?.children[0].children[0].clientWidth || sliderContainer.value?.children[0].clientWidth;
  }
  else {
    itemWidth.value = slideRef.value[0]?.clientWidth || 0;
  }
}

onMounted(() => {
  if (sliderContainer?.value) {
    sliderContainer.value.addEventListener('scroll', handleScroll);
  }

  setItemWidth()

  window.addEventListener('resize', () => {
    setItemWidth()
  });
});

</script>
  
<style lang="scss" scoped>
@use '../styles/_variables.scss' as *;
  
  .slider-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .slider {
    display: flex;
    flex-wrap: nowrap;
    gap: 20px;
    padding: 0 5vw 20px;
    overflow-x: scroll;
    -ms-overflow-style: none; 
    scrollbar-width: none; 
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    transition: .2s ease-in-out; 
    &::-webkit-scrollbar {
      display: none;
    }
  }
  
  .slider > *, .slider-item, .slider > [name] > * {
    display: flex;
    justify-content: center;
    align-items: center;
    scroll-snap-align: center;
    aspect-ratio: 1.11/1;
    cursor: pointer;
    transition: .2s .1s ease-in-out; 
  }
  
  .active {  }
  
  .slider-dots {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  
  .dot {
    width: 10px;
    height: 10px;
    background-color: $metal;
    border-radius: 50%;
    cursor: pointer;
    transition: .2s .1s ease-in-out; 

    @media screen and (min-width: 768px) {
      width: 14px;
      height: 14px;
    }
  }
  
  .active-dot {
    background-color: $purple;
  }

  svg {
    path, rect {
      transform-origin: revert;
      transform-box: revert;
    }

  }
  </style>
  