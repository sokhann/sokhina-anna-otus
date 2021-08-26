<template>
    <div>
        <input :id="id" type="checkbox" :name="id" :checked="isChecked">
        <label :for="id">{{labelText}}</label>
    </div>
</template>

<style scoped>
  label {
    margin-left: 8px;
  }
</style>

<script>
  export default {
    name: "Checkbox",
    props: {
      id: String,
      labelText: String,
      isChecked: Boolean,
    }
  }
</script>

