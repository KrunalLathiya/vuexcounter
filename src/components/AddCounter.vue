<template>
  <div class="container">
    <div class="field is-grouped">
      <div class="control">
        <button class="button is-primary" v-on:click="addCounter()">Add</button>
      </div>
  </div>
  </div>
</template>

<script>
import store from '../store/store';
import * as type from '../store/mutationTypes/types';

  export default {
    methods: {
        addCounter(){
          store.dispatch({
            type: type.Increment,
            amount: 20
          })
        }
    }
  }
</script>
