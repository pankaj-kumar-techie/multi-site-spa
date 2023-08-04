export function convertUtcToLocal(utcTimestamp: number): string {
    const localDate = new Date(utcTimestamp);

    const offset = localDate.getTimezoneOffset();
    const hoursOffset = Math.floor(Math.abs(offset / 60));
    const minutesOffset = Math.abs(offset % 60);

    const localHours = localDate.getHours() + hoursOffset;
    const localMinutes = localDate.getMinutes() + minutesOffset;

    const localYear = localDate.getFullYear();
    const localMonth = localDate.getMonth() + 1;
    const localDay = localDate.getDate();

    const formattedDate = `${localYear}-${localMonth < 10 ? '0' : ''}${localMonth}-${localDay < 10 ? '0' : ''}${localDay}`;
    const formattedTime = `${localHours < 10 ? '0' : ''}${localHours}:${localMinutes < 10 ? '0' : ''}${localMinutes}`;

    return `${formattedDate} ${formattedTime}`;
}
