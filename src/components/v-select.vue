<template>
  <div class="v-select">
    <p
      class="title"
      @click="areOptionsVisible = !areOptionsVisible"
    >{{ selected }}</p>
    <div
      class="options"
      v-if="areOptionsVisible"
    >
      <p
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
      >
        {{ option.title }}
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "v-select",
    props: {
      options: {
        type: Array,
        default() {
          return []
        }
      },
      selected: {
        type: String,
        default() {
          return '';
        }
      },
    },
    data() {
      return {
        areOptionsVisible: false
      }
    },
    computed: {},
    methods: {
      selectOption(option) {
        this.$emit('select', option)
        this.areOptionsVisible = false;
      },
      hideSelect() {
        this.areOptionsVisible = false;
      }
    },
    mounted() {
      document.addEventListener('click', this.hideSelect.bind(this), true)
    },
    beforeDestroy() {
      document.removeEventListener('click', this.hideSelect)
    }
  }
</script>

<style scoped lang="scss">
  .v-select {
    font-family: Intro-light, sans-serif;
    width: 200px;
    left: 20%;
    top: 10px;
    text-align: center;
    cursor: pointer;
    position: absolute;
    
    .title {
      border: 1px solid #aeaeae;
    }
    
    .options {
      border: 1px solid #aeaeae;
      top: 30px;
      width: 99%;
      
      p:hover {
        background: #e7e7e7;
      }
    }
  }
</style>