import { FunctionComponent, useRef } from 'react';
import { BryntumCalendar } from '@bryntum/calendar-react';
import { calendarProps } from './CalendarConfig';
import './App.scss';

const App: FunctionComponent = () => {

    const calendar = useRef<BryntumCalendar>(null);

    return (
        <BryntumCalendar
            ref = {calendar}
            {...calendarProps}
        />
    );
};

// If you plan to use stateful React collections for data binding please check this guide
// https://bryntum.com/products/calendar/docs/guide/Calendar/integration/react/data-binding

export default App;