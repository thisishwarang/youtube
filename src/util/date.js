import { format, register } from 'timeago.js';
import koLocale from 'timeago.js/lib/lang/ko';

register('ko', koLocale); //한국어로 바꾸는 법

export function formatAgo(date, lang = 'en_US') {
    return format(date, lang);
}