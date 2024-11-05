import dayjs from "dayjs";
import type { formatCaption as defFormatCaption } from "react-day-picker";

const seasonEmojis: Record<string, string> = {
    winter: '🏂',
    summer: '🏄‍♂️',
    spring: '🌱',
    fall: '🍂',
};

const getSeasonEmoji = (date: Date): keyof typeof seasonEmojis  => {
    const month = date.getMonth() + 1;

    if (month >= 3 && month <= 5) {
        return 'spring';
    } else if (month >= 6 && month <= 8) {
        return 'summer';
    } else if (month >= 9 && month <= 11) {
        return 'autumn';
    } else {
        return 'winter';
    }
}


export const formatCaption = (month: Date) => {
    const season = getSeasonEmoji(month);

    return (
        <>
            <span
                role="img"
                aria-label={`${season} emoji`}
                className="inline-block mr-1"
            >
                {seasonEmojis[season]}
            </span>
            {dayjs(month).format('MMMM YYYY')}
        </>
    )
}