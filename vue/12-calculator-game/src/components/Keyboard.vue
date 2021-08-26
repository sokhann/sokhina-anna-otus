<template>
    <div class="keyboard">
        <div class="key"
             v-for="(calcKey, index) of calcKeys"
             :key="index">
            <RoundKey :calc-key="calcKey"
                      :disabled="pause"
                      @handleKeyClick="handleKeyClick"/>
        </div>
    </div>
</template>

<script>
  import RoundKey from './RoundKey'

  export default {
    name: 'Keyboard',
    components: { RoundKey },
    props: {
      handleKeyClick: Function,
      pause: Boolean
    },
    data() {
      return {
        calcKeys: [
          '1', '2', '3', '<',
          '4', '5', '6', '',
          '7', '8', '9', '?',
          '', '0', '', '='
        ]
      }
    },
    methods: {}
  }
</script>

<style scoped>
    .keyboard {
        margin: 64px 32px 32px;
        display: grid;
        grid-template-columns: repeat(4, 50px);
        grid-template-rows: repeat(4, 50px);
        grid-gap: 30px;
        justify-content: center;
    }

    .key {
        text-align: center;
        vertical-align: center;
    }
</style>
