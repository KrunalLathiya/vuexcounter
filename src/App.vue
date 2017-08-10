<template>
  <div class="container">
    <Counter></Counter><br />
    <div class="columns">
      <div class="column is-11">
        <AddCounter></AddCounter>
      </div>
      <div class="column auto">
        <RemoveCounter></RemoveCounter>
      </div>
    </div>
 </div>
</template>
<script>

import Counter from './components/Counter.vue';
import AddCounter from './components/AddCounter.vue';
import RemoveCounter from './components/RemoveCounter.vue';

  export default {
    components : {
      Counter,
      AddCounter,
      RemoveCounter
    }
  }
</script>
