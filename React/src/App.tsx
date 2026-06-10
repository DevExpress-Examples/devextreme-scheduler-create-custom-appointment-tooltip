import { useCallback, useState } from 'react';
import './App.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import Scheduler from 'devextreme-react/scheduler';
import List from 'devextreme-react/list';
import type { SchedulerTypes } from 'devextreme-react/scheduler';
import AppointmentsInfo from './AppointmentsInfo.tsx';
import type { TooltipItem } from './AppointmentsInfo.tsx';
import { data, resources } from './data';
import { formatDate } from './utils';

const currentDate = new Date(2021, 5, 2);

function App(): JSX.Element {
  const [tooltipItems, setTooltipItems] = useState<TooltipItem[]>([]);

  const onAppointmentTooltipShowing = useCallback(
    (e: SchedulerTypes.AppointmentTooltipShowingEvent) => {
      e.cancel = true;
      const { appointments } = e;
      setTooltipItems((appointments ?? []).map((item) => ({
        text: item.appointmentData.text,
        colorDef: item.color,
        startDate: formatDate(item.appointmentData.startDate as Date),
        endDate: formatDate(item.appointmentData.endDate as Date),
      })));
    },
    [],
  );

  return (
    <div className="main container">
      <List width="33%" dataSource={tooltipItems} itemComponent={AppointmentsInfo} />
      <Scheduler
        dataSource={data}
        currentView="week"
        currentDate={currentDate}
        firstDayOfWeek={1}
        startDayHour={15}
        endDayHour={20}
        showAllDayPanel={false}
        height={600}
        width="66%"
        resources={resources}
        onAppointmentTooltipShowing={onAppointmentTooltipShowing}
      />
    </div>
  );
}

export default App;
