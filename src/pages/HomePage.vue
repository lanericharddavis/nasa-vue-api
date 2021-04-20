<template>
  <div class="component container-fluid">
    <div class="row">
      <div class="col">
        <!--insert selector-->
        <!-- <Dates /> -->
        <button type="button" class="btn btn-primary" @click="getPictures">Click Me</button>
      </div>
      <div class="col">
        <!--insert full picture display-->
        <!-- <Pictures /> -->
      </div>
    </div>

  </div>
</template>

<script>
import { reactive } from 'vue'
import { picturesService } from '../services/PicturesService'
// import Dates from '../components/DatesComponent'

export default {
  name: 'HomePage',
  setup () {
    const state = reactive({
    })
    return {
      state,
      async getPictures () {
        try {
          await picturesService.getPictures()
        } catch (error) {
          console.error(error)
        }
      }
    }
  },
  components: {
    // Dates
  }
}
</script>

<style>

</style>
