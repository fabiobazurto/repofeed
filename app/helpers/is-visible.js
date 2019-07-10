import { helper } from '@ember/component/helper';

export function isVisible(params, namedArgs) {
    return (namedArgs.currentLng==namedArgs.currentFilter||namedArgs.currentFilter=='ALL')?'visible':'hidden';
}

export default helper(isVisible);
