<script setup lang="ts">
import { ref } from 'vue';

import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import { DxScheduler } from 'devextreme-vue/scheduler';
import { DxList } from 'devextreme-vue/list';
import type { AppointmentTooltipShowingEvent } from 'devextreme/ui/scheduler';
import AppointmentInfo from './AppointmentInfo.vue';
import type { TooltipItem } from './AppointmentInfo.vue';
import { data, resources } from '../data';
import { formatDate } from '../utils';

const currentDate = new Date(2021, 5, 2);
const tooltipItems = ref<TooltipItem[]>([]);

function onAppointmentTooltipShowing(e: AppointmentTooltipShowingEvent) {
  e.cancel = true;
  const { appointments } = e;
  tooltipItems.value = (appointments ?? []).map((item) => ({
    text: item.appointmentData.text,
    colorDef: item.color,
    startDate: formatDate(item.appointmentData.startDate as Date),
    endDate: formatDate(item.appointmentData.endDate as Date),
  }));
}
</script>
<template>
  <div class="container">
    <DxList
      width="33%"
      :data-source="tooltipItems"
      item-template="AppointmentInfo"
    >
      <template #AppointmentInfo="{ data: itemData }">
        <AppointmentInfo :data="itemData"/>
      </template>
    </DxList>
    <DxScheduler
      current-view="week"
      width="66%"
      :data-source="data"
      :current-date="currentDate"
      :resources="resources"
      :height="600"
      :first-day-of-week="1"
      :start-day-hour="15"
      :end-day-hour="20"
      :show-all-day-panel="false"
      @appointment-tooltip-showing="onAppointmentTooltipShowing"
    />
  </div>
</template>
<style scoped>
.container {
  display: flex;
}
</style>
