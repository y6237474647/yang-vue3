declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslinconst component: DefineComponent<[],[}，any>
    const component: DefineComponent<{},{},any>
    export default component
}
