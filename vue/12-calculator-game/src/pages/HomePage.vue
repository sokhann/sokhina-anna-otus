<template>
  <div>
    <h1>Привет!</h1>
    <p>Добро пожаловать на {{getTrainingDay}} тренировочный день.</p>
    <p>Ваш последний результат - решено {{rightAnswersCount}} из {{totalTasksCount}}.</p>
    <p>Общая точность {{getAccuracyPercent}} %.</p>
    <Settings @submit="handleSubmit"/>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex';
  import {OPERATIONS, MILLISECONDS_IN_DAY} from "../constants";
  import Settings from "../components/Settings";

  export default {
    id: 'HomePage',

    components: {
      Settings
    },

    data() {
      return {
        totalTasksCount: this.$store.state.totalTasksCount,
        rightAnswersCount: this.$store.state.rightAnswersCount,
        lastGameDate: this.$store.state.lastGameDate
      }
    },

    computed: {
      getTrainingDay() {
        return Math.floor((Date.now() - this.lastGameDate) / MILLISECONDS_IN_DAY) + 1
      },

      getAccuracyPercent() {
        if (!this.totalTasksCount || !this.rightAnswersCount) {
          return 0
        }

        return Math.floor(this.rightAnswersCount / this.totalTasksCount * 100)
      }
    },

    methods: {
      ...mapMutations([
        'setTime',
        'setLevel',
        'setOperations',
      ]),

      handleSubmit(form) {
        const data = new FormData(form);

        const
          time = data.get('time'),
          level = data.get('level'),
          operations = OPERATIONS
            .map(({id}) => {
              if (data.get(id) !== null) {
                return id
              }
            })
            .filter(item => item);

        this.setTime({amount: time});
        this.setLevel({amount: level});
        this.setOperations({amount: operations});

        if (operations.length > 0) {
          this.$router.push('/game')
        }
      }
    }
  }
</script>
