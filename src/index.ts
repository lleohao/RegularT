let RegularJs: any;

export type WatchId = number;

export interface Refs {
    [key: string]: RegularT
}

export abstract class RegularT<Props = any, State = any, Data = Props & State> {
    name?: string;
    template?: string;
    data?: Data;

    $refs: Refs;

    static setRegular(regular: any) {
        RegularJs = regular;
    }

    static extend(regularT: {new(): RegularT}) {
        const regularTInstance = new regularT();
        const regularObject = Object.create({});

        let prototype = regularTInstance;

        while (prototype) {
            if (prototype.constructor === RegularT) {
                break;
            }

            Object.keys(prototype).forEach(key => {
                regularObject[key] = prototype[key];
            });
        }

        delete regularObject.constructor;

        return RegularJs.extend(regularObject);
    }

    config(data?: Data): void {

    }

    init(data?: Data): void {

    }

    destroy(): void {

    }

    $watch<T extends keyof Data>(key: T | Partial<Data>, value?: Data[T]): WatchId {
        return 0;
    }

    $unwatch(watchId: WatchId): void {

    }

    $on(name: string, handle?: Function): void {

    }

    $off(name: string, handle?: Function): void {

    }

    $emit(name: string, params?: any): void {

    }

    $ref(name: string): RegularT {
        return this.$refs[name];
    }
}