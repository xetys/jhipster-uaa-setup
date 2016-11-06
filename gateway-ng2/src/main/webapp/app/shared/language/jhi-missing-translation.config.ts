import {MissingTranslationHandler} from 'ng2-translate/ng2-translate';

export class JhiMissingTranslationHandler implements MissingTranslationHandler {
    handle(key: string) {
        return `translation-not-found[${key}]`;
    }
}
