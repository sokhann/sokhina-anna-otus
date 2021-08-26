<template>
    <button :class="[roundKeyClass, getColor]"
            :disabled="disabled"
            @click="$emit('handleKeyClick', calcKey)">
        {{calcKey}}
    </button>
</template>

<script>
  export default {
    name: "RoundKey",
    props: {
      calcKey: String,
      disabled: Boolean
    },
    data() {
      return {
        numberColorClass: 'number',
        stringColorClass: 'string',
        roundKeyClass: 'rounded'
      }
    },
    computed: {
      getColor() {
        if (this.calcKey === '') {
          return 'empty'
        } else if (parseInt(this.calcKey)) {
          return 'number'
        }
        return 'string'
      }
    }
  }
</script>

<style scoped>
  .rounded {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 0;
    border-radius: 50%;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    border: none;
  }

  .number {
    color: #FFF;
    background-color: #1976D2;
  }

  .string {
    color: #1976D2;
    background-color: #CCC;
  }

  .empty {
    opacity: 0;
  }
</style>
