import { useEffect, useState } from 'react';

export interface TooltipItem {
  text?: string;
  colorDef: PromiseLike<string>;
  startDate: string;
  endDate: string;
}

function AppointmentsInfo({ data }: { data: TooltipItem }): JSX.Element {
  const {
    text, colorDef, startDate, endDate,
  } = data;
  const [color, setColor] = useState<string>();

  useEffect(() => {
    colorDef.then((value) => setColor(value));
  }, [colorDef]);

  return (
    <div className="tooltip">
      <div className="marker" style={{ background: color }} />
      <div>
        <p>{text}</p>
        <p>{`${startDate} - ${endDate}`}</p>
      </div>
    </div>
  );
}

export default AppointmentsInfo;
