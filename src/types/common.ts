import { AxiosResponse } from 'axios';

export type Nullable<GenericType> = GenericType | null;
export type Undefinable<GenericType> = GenericType | undefined;
export type Promised<GenericType> = Promise<AxiosResponse<GenericType>>;

export enum Language {
    RU = 'ru',
    EN = 'en',
    ZH = 'zh',
    KO = 'ko',
    ES = 'es',
    FR = 'fr',
    PT = 'pt',
    TR = 'tr',
}

export const LANGUAGES_OPTIONS = [
    { value: Language.EN, title: 'English' },
    { value: Language.RU, title: 'Русский' },
    { value: Language.ZH, title: '中文' },
    { value: Language.KO, title: 'Korean' },
    { value: Language.ES, title: 'Español' },
    { value: Language.FR, title: 'Français' },
    { value: Language.PT, title: 'Português' },
    { value: Language.TR, title: 'Türkçe' },
];

export interface IAsset {
    id: string;
    title: string;
    icon: string;
}

export interface IFile {
    filename: string;
    size: number;
    mimetype: string;
    blob: any;
}
