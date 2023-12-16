import { IInjectorModule, IInjector } from "@paperbits/common/injection";
import { VueComponentBinder } from "./bindings";
import { ComponentFactoryBrowser } from "./bindings/componentFactory.browser";


export class VueModule implements IInjectorModule {
    public register(injector: IInjector): void {
        injector.bindSingleton("componentFactory", ComponentFactoryBrowser);
        injector.bindSingleton("vueComponentBinder", VueComponentBinder);
    }
}