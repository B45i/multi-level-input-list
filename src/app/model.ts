export class ValueItem {
    constructor(
        public value: string = '',
        public removed: boolean = false,
        public childs: Array<ValueItem> = [],
        public showChilds = false) {
    }
}