<template>
    <div>
        <div class="header">
          <button @click="stop">Отмена</button>
          <Timer :current-time="currentTime"/>
        </div>
        <div class="calc">
          <Task :operation="currentOperation"
                       :highlight-color="highlightColor"
                       :user-answer="getUserAnswer"
                       :first-number="firstNumber"
                       :result-number="resultNumber"/>
          <Keyboard :handle-key-click="handleKeyClick"
                    :pause="pause"/>
        </div>
    </div>
</template>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
  }

  .calc {
    margin-top: 60px;
  }

  button {
    padding: 8px 16px;
    background: #ECEFF1;
    border: 1px solid #CFD8DC;
    border-radius: 3px;
    font-size: 16px;
    cursor: pointer;
  }
</style>

<script>
  import {mapMutations} from 'vuex';
  import {DIF, DIV, MUL, SUM, PAUSE, EXP} from "../constants";
  import Timer from '../components/Timer'
  import Keyboard from '../components/Keyboard'
  import Task from "../components/Task";

  export default {
    name: 'GamePage',

    components: {
      Task,
      Timer,
      Keyboard
    },

    data() {
      return {
        roundTime: this.$store.getters.roundTime,
        level: this.$store.state.level,
        operations: this.$store.state.operations,
        currentOperation: SUM,
        currentTime: 0,
        timer: null,
        userInput: [],
        firstNumber: 0,
        secondNumber: 0,
        resultNumber: 0,
        totalTasksCount: 0,
        rightAnswersCount: 0,
        pause: false,
        highlightColor: 'lightgray'
      }
    },

    computed: {
      getUserAnswer() {
        const underscoreCount = this.level - this.userInput.length;

        return ('_'.repeat(underscoreCount) + this.userInput.join(''))
          .substring(0, this.level)
      }
    },

    methods: {
      ...mapMutations([
        'setTotalTasksCount',
        'setRightAnswersCount'
      ]),

      start() {
        if (!this.timer) {
          this.timer = setInterval(() => {
            if (this.currentTime > 0) {
              if (!this.pause) {
                this.currentTime--
              }

            } else {
              this.pause = true;

              this.setTotalTasksCount({amount: this.totalTasksCount});
              this.setRightAnswersCount({amount: this.rightAnswersCount});

              setTimeout(this.stop(), PAUSE)
            }
          }, 1000)
        }
      },

      stop() {
        clearInterval(this.timer);
        this.$router.push('/')
      },

      handleKeyClick(value) {
        if (this.userInput.length < this.level && /^\d/.test(value)) {
          this.userInput.push(value)
        }

        if (value === '<' && this.userInput.length) {
          this.userInput.pop()
        }

        if (value === '?') {
          this.userInput = this.secondNumber.toFixed().split('');
          this.highlightColor = 'blue';
          this.pause = true;
          setTimeout(this.generateTask, PAUSE)
        }

        if (value === '=' && this.userInput.length > 0) {
          if (this.checkAnswer()) {
            this.rightAnswersCount++;
            this.highlightColor = 'green';
          } else {
            this.highlightColor = 'red';
          }

          this.pause = true;
          setTimeout(this.generateTask, PAUSE)
        }
      },

      generateTask() {
        this.pause = false;
        this.totalTasksCount++;

        const operationIndex = Math.floor(Math.random() * this.operations.length);
        this.currentOperation = this.operations[operationIndex];

        this.userInput = [];
        this.highlightColor = 'lightgray';

        const levelRange = Math.pow(10, this.level) - 2;
        this.prepareTask(levelRange);
      },

      prepareTask(levelRange) {
        let tempVar;

        this.firstNumber = Math.floor(Math.random() * levelRange) + 1;
        this.secondNumber = Math.floor(Math.random() * levelRange) + 1;

        switch (this.currentOperation) {
          case SUM:
            this.resultNumber = this.firstNumber + this.secondNumber;
            return;

          case DIF:
            tempVar = this.firstNumber;
            this.resultNumber = this.firstNumber + this.secondNumber;
            this.firstNumber = this.resultNumber;
            this.resultNumber = tempVar;
            return;

          case MUL:
            this.resultNumber = this.firstNumber * this.secondNumber;
            return;

          case DIV:
            tempVar = this.firstNumber;
            this.resultNumber = this.firstNumber * this.secondNumber;
            this.firstNumber = this.resultNumber;
            this.resultNumber = tempVar;
            return;

          case EXP:
            this.resultNumber = Math.pow(this.firstNumber, this.secondNumber);
            return;
        }
      },

      checkAnswer() {
        return parseInt(this.userInput.join('')) === this.secondNumber
      }
    },

    mounted() {
      this.currentTime = this.roundTime;
      this.generateTask();
      this.start();
    }
  }
</script>

<style scoped>
    button {
        text-transform: uppercase;
    }
</style>
