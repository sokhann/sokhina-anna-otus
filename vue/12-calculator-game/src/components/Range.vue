<template>
    <div>
        <input :id="id"
               type="range"
               :name="id"
               min="1"
               :max="max"
               step="1"
               :value="value"
               @change="$emit('change', $event.target.value)"/>
        <label :for="id">{{ labelText }}</label>
    </div>
</template>

<style scoped>
  label {
    display: block;
    margin-top: 5px;
  }

  input {
    width: 50%;
  }
</style>

<script>
  export default {
    name: "Range",

    model: {
      event: 'change'
    },

    props: {
      id: String,
      labelText: String,
      max: String,
      value: String
    }
  }

</script>
