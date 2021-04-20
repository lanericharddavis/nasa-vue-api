<!--<template>
  <div class="pictures-component">
    <img src="//placehold.it/100x100" alt="outer space">
    <h3>Image Title Filler</h3>
    <p>Image Explanation Filler Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, nam iste. Vel cupiditate pariatur at sunt sequi accusantium aliquid magnam.</p>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'

export default {
  name: 'PicturesComponent',
  setup () {
    const state = reactive({
      picture: computed(() => AppState.activePicture)
    })
    return {
      state
    }
  },
  components: {}
}
</script>

<style>

</style>
