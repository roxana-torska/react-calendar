import React, { useCallback, useMemo, useState }       from 'react';
import PropTypes                                       from 'prop-types';
import { useSelector }                                 from 'react-redux';
import { format, getDay, getMonth, getYear, parseISO } from 'date-fns';

import Modal                          from '../../../Modal';
import { useFormInput, useTimeInput } from '../../../../hooks';

import { Button,
         Notification,
         HorisontalField,
         GroupedField,
         FieldLabel,
         Label,
         Field,
         FieldBody,
         Input,
         Control } from '../StyledComponents/AddReminder';

const defaultHour = '12:00';
const defaultHourArray = defaultHour.split(':');

const AddReminder = (props) => {
  const { addReminder } = props;
  const selectedDay = useSelector(({ calendar }) => calendar.selectedDay);
  const [on, toggle] = useState(false);
  const onToggle = useCallback(() => toggle((value) => !value), []);

  const initialDate = useMemo(
    () => format(selectedDay, 'yyyy-MM-dd')
      .toString(),
    [selectedDay],
  );

  const text = useFormInput('Public Holidays');
  const countries = useFormInput('Ukraine');
  const date = useFormInput(initialDate);
  const { valueAsDate, ...hour } = useTimeInput(defaultHour);
  const color = useFormInput('#A4A4A4');

  const onSubmit = useCallback(() => {
      if (date.value && text.value) {
        const dateValue = parseISO(date.value);
        const hourValue = hour.value === defaultHour
          ? new Date(
            getYear(dateValue),
            getMonth(dateValue),
            getDay(dateValue),
            Number(defaultHourArray[0]),
            Number(defaultHourArray[1]),
          )
          : valueAsDate;

        addReminder({
          text: text.value,
          countries: countries.value,
          date: dateValue,
          hour: hourValue,
          color: color.value,
        });
      }
      onToggle();
    },
    [
      addReminder,
      countries.value,
      color.value,
      date.value,
      hour.value,
      onToggle,
      text.value,
      valueAsDate,
    ]);

  return (
    <>
      <Button onClick={onToggle}>
        <span className="icon has-text-white is-large">
          <i className="fas fa-plus" />
        </span>
        <span>Add holidays</span>
      </Button>
      <Modal on={on}>
        <Notification>
          <HorisontalField>
            <FieldLabel>
              <Label>Public Holidays</Label>
            </FieldLabel>
            <FieldBody>
            </FieldBody>
          </HorisontalField>

          <HorisontalField>
            <FieldLabel>
              <Label>Countries</Label>
            </FieldLabel>
            <FieldBody>
              <Field>
                <div className="control">
                  <input className="input" type="countries" {...countries} />
                </div>
              </Field>
            </FieldBody>
          </HorisontalField>

          <HorisontalField>
            <FieldLabel>
              <Label>Color</Label>
            </FieldLabel>
            <div className="field-body is-narrow">
              <div className="field">
                <div className="control">
                  <input className="input" type="color" {...color} />
                </div>
              </div>
            </div>
          </HorisontalField>

          <div className="field is-grouped is-grouped-right">
            <div className="control">
              <button
                onClick={onSubmit}
                className="button is-success"
              >
                Add
              </button>
            </div>
            <div className="control">
              <button
                onClick={onToggle}
                className="button is-warning"
              >
                Cancel
              </button>
            </div>
          </div>
        </Notification>
      </Modal>
    </>
  );
};

AddReminder.propTypes = {
  addReminder: PropTypes.func.isRequired,
};

export default AddReminder;
