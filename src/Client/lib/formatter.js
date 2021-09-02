
const localeTimeFormatConfig =  { hour: '2-digit', minute: '2-digit' }
const localeTimeFormat = new Intl.DateTimeFormat([], localeTimeFormatConfig)

const localeDayFormatConfig = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}
const localeDayFormat = new Intl.DateTimeFormat([], localeDayFormatConfig)

const getLocaleDayDisplay = (date) => {
    let localeDateDisplay = ''
    if (date && !isNaN(date.valueOf())) {
        try {
            localeDateDisplay = localeDayFormat.format(date)
        } catch (e) {
            console.error(`failed to format date: ${date}`)
        }
    } else {
        console.log('date is not valid')
    }
    return localeDateDisplay
}

const getLocaleTimeDisplay = (date) => {
    let localeTimeDisplay = ''
    if (date && !isNaN(date.valueOf())) {
        try {
            localeTimeDisplay = localeTimeFormat.format(date)
        } catch (e) {
            console.error(`failed to format date: ${date}`)
        }
    } else {
        console.log('date is not valid')
    }
    return localeTimeDisplay
}

export {
    getLocaleDayDisplay,
    getLocaleTimeDisplay
}
