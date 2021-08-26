<template>
  <div class="task">
    <span>{{firstNumber}}</span>
    <span> {{getOperator}} </span>
    <span :style="`color: ${highlightColor}`">{{userAnswer}}</span>
    <span> = </span>
    <span>{{resultNumber}} </span>
    <span>? </span>
  </div>
</template>

<script>
  import { OPERATIONS } from "../constants";

  export default {
    name: "Task",

    props: {
      operation: String,
      userAnswer: String,
      firstNumber: Number,
      resultNumber: Number,
      highlightColor: String
    },

    computed: {
      getOperator() {
        return OPERATIONS
          .filter(({id}) => id === this.operation)[0]
          .operator
      },
    }
  }
</script>

<style scoped>
    .task {
        width: 100%;
        margin: auto 0 0;
        text-align: center;
        font-size: 30px;
        font-weight: 500;
    }
</style>
