<script setup lang="ts">
import { onMounted, ref } from 'vue';

export interface TooltipItem {
  text?: string;
  colorDef: PromiseLike<string>;
  startDate: string;
  endDate: string;
}

const props = defineProps<{ data: TooltipItem }>();

const color = ref('');

onMounted(() => {
  props.data.colorDef.then((value) => {
    color.value = value;
  });
});
</script>
<template>
  <div class="tooltip">
    <div
      class="marker"
      :style="`background: ${color}`"
    />
    <div>
      <p>{{ props.data.text }}</p>
      <p>{{ `${props.data.startDate} - ${props.data.endDate}` }}</p>
    </div>
  </div>
</template>
<style scoped>
.tooltip {
  display: flex;
  align-items: baseline;
}

.marker {
  width: 10px;
  height: 10px;
  margin-right: 10px;
  border-radius: 50%;
}
</style>
