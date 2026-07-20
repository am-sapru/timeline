export const MLEvent = {
    "events_list": [],
    "new_event": (name, start_time, end_time, eventareaelement) => {
        MLEvent.events_list.push(`<div class="scheditem">${name}<div class="timeline-times">${start_time} - ${end_time}</div></div>`)
        eventareaelement.innerHTML = MLEvent.events_list.join("")
    },
    "reset_all_events": (eventareaelement) => {
        MLEvent.events_list = []
        eventareaelement.innerHTML = `<div class="noevents"><i>You don't have any events...</i><div>`;
    }
}