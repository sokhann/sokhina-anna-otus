<template>
    <div class="timer">
      {{timeToView}}
    </div>
</template>

<script>
  export default {
    name: "Timer",
    props: {
      currentTime: Number
    },
    computed: {
      timeToView() {
        const
          formatRule = new Intl.DateTimeFormat("en-US", { minute: '2-digit', second: '2-digit' }).format,
          time = new Date(this.currentTime * 1000);

        return formatRule(time)
      }
    }
  }
</script>

<style scoped>
    .timer {
        text-align: center;
        padding: 8px 16px;
        font-size: 16px;
        background: #ECEFF1;
        border: 1px solid #CFD8DC;
        border-radius: 3px;
    }
</style>
