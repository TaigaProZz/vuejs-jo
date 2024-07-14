<template>
<div class="flex flex-col h-[65px] w-full px-3 py-1 bg-graySecondary rounded-lg dark drop-shadow-[0_4px_8px_rgba(0,0,0,0.45)] ">
  <label :for="placeholder" class="text-sm">{{ label }}<span class="text-red-500 text-lg">*</span></label>

  <input :id="placeholder" :type="type" :placeholder="placeholder" class="bg-transparent text-sm" v-model="inputValue">
</div>



</template>

<script>
export default {
  name: "InputForm",
  props: {
    type: String,
    label: String,
    placeholder: String,
    modelValue: String
  },
  computed: {
    inputValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      }
    }
  }
}
</script>

<!-- <script>
export default {
  name: 'InputForm',
  props: {
    type: String,
    label: String,
    placeholder: String,
    modelValue: String
  },
  computed: {
    inputValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      }
    }
  }
}
</script> -->