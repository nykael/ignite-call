import { useState } from 'react'
import { CalendarStep } from './CalendarStep'
import { ConfirmStep } from './ConfirmStep'

export function ScheduleForm() {
  const [selectedDateTime, setSelectedDate] = useState<Date | null>()

  function handleClearSelectedDateTime() {
    setSelectedDate(null)
  }

  if (selectedDateTime) {
    return (
      <ConfirmStep
        onCancelConfirmation={handleClearSelectedDateTime}
        schedulingDate={selectedDateTime}
      />
    )
  }

  return <CalendarStep onSelectDateTime={setSelectedDate} />
}
