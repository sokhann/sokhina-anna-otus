<template>
    <form @submit.prevent="$emit('submit', $event.target)">
        <h2>Настройки</h2>
        <ul>
            <li>
                <Range :label-text="`Длительность: ${time} мин.`"
                       id="time"
                       max="5"
                       v-model="time"/>
            </li>
            <li>
                <Range :label-text="`Сложность: ${level}`"
                       id="level"
                       max="3"
                       v-model="level"/>
            </li>
        </ul>
        <ul>
            <li v-for="operation of operations" :key="operation.id">
                <Checkbox :id="operation.id"
                          :label-text="operation.title"
                          :is-checked="checkOperations.indexOf(operation.id) > -1"/>
            </li>
        </ul>
        <button type="submit">Play!</button>
    </form>
</template>

<style scoped>
  form {
    margin-top: 40px;
  }

  button {
    display: block;
    margin-left: auto;
    margin-top: 30px;
    padding: 8px 16px;
    color: #fff;
    background: #1976D2;
    border: 1px solid #42A5F5;
    border-radius: 3px;
    font-size: 16px;
    cursor: pointer;
  }
</style>

<script>
  import Checkbox from './Checkbox'
  import Range from './Range'
  import {OPERATIONS} from '../constants';

  export default {
    id: 'Settings',

    components: {
      Checkbox,
      Range,
    },

    data() {
      return {
        time: this.$store.state.time,
        level: this.$store.state.level,
        operations: OPERATIONS,
        checkOperations: this.$store.state.operations
      }
    }
  }
</script>
