import React, { useMemo } from 'react';
import { useSelector }    from 'react-redux';

import { useActions }                                 from '../../hooks';
import { getPrettyMonthTitle, getWeekDays, getWeeks } from '../../utils';
import { calendarActions }                            from '../../state/ducks/calendar';
import { remindersActions }                           from '../../state/ducks/reminders';

import { AddReminder, Week } from './components';
import { CalendarContainer,
         Container,
         Section,
         CalendarHeader,
         TopRow,
         Icon,
         Link,
         Days } from './components/StyledComponents/Calendar';
import Holidays from '../Holidays';

const Calendar = () => {
  const date = useSelector(({ calendar }) => calendar.date);
  const { nextMonth, previousMonth } = useActions(calendarActions);
  const { addReminder } = useActions(remindersActions);

  const weekDays = useMemo(() => getWeekDays(), []);
  const weeks = useMemo(() => getWeeks(date), [date]);

  return (
    <>
      <CalendarContainer>
        <Section>
          <CalendarHeader>
            <TopRow>
              <Link onClick={() => previousMonth()}>
                <Icon>
                  <i className="fas fa-arrow-left" />
                </Icon>
                <span>Previous</span>
              </Link>
              {getPrettyMonthTitle(date)}
              <Link onClick={() => nextMonth()}>
                <span>Next</span>
                <Icon>
                <i className="fas fa-arrow-right" />
              </Icon>
              </Link>
            </TopRow>
            <Days>
              {weekDays.map((day) => (
                <div key={day}>{day}</div>
              ))}
            </Days>
          </CalendarHeader>
          <div>
            {weeks.map((week) => (
              <Week key={week} date={date} week={week} />
            ))}
          </div>
        </Section>
      </CalendarContainer>
      <Container>
        <Holidays />
        <AddReminder addReminder={addReminder} />
      </Container>
    </>
  );
};

Calendar.propTypes = {};

export default Calendar;
