declare module '*.vue' {
    import Vue from 'vue';
    export default Vue;
}
declare module 'jz-utils' {
    interface option {
        url: string;
        param?: object;
        contentType?: string;
        isStringify?: boolean;
        connectTimeout?: number;
        method?: 'get' | 'post';
        isCodeAutoHandle?: boolean;
        showToast?: (selector: string) => any;
    }
    namespace cookie {
        function get(val: string): string;
    }
    interface httpSet {
        gitGroup: string;
        projectName: string;
    }
    interface httpLog {
        level: string;
        url: string;
        param: any;
        code?: number;
        response?: any;
        message?: string;
        method: string;
        stack: string;
        href: string;
        clientDate: string;
    }
    namespace http {
        function set(val: httpSet): void;
        function log(param: httpLog): void;
    }
    function login(url?: string): any;
    function http(option: option): any;
    function openAPPShare(val: any): void;
    function trackClick(obj?: any): void;
}
// 扩展Function
interface Function {
    _around(beforefn: Function, afterfn: Function): Function;
}
