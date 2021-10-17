import { color, TypeOption } from './colors';
import { markdown, TypeOptions } from './md';

export function style(text: string, options: TypeOptions | TypeOption) {
    if (text.length === 0) {
        return text;
    }
    if ('font' in options || 'background' in options || 'effects' in options) {
        return color(text, options);
    }
    if ('bold' in options || 'italic' in options || 'mono' in options || 'link' in options) {
        return markdown(text, options);
    }
    return text;
}
