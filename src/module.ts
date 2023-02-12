// MOST Web Framework Codename Zero Gravity Copyright (c) 2017-2022, THEMOST LP All rights reserved
import {ModuleWithProviders, NgModule} from '@angular/core';
import {DataComponent} from './components';
import {AngularDataContext, ClientDataContextConfig, DATA_CONTEXT_CONFIG} from './client';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    imports: [
        HttpClientModule
    ],
    declarations: [
        DataComponent
    ],
    exports: [
        DataComponent
    ]
})
export class MostModule {
    constructor() {
        //
    }
    static forRoot(configuration: ClientDataContextConfig): ModuleWithProviders<MostModule> {
        const useConfiguration = configuration || {
            base: '/'
        } as ClientDataContextConfig;
        // set default options
        useConfiguration.options = Object.assign({
            useMediaTypeExtensions: false,
            useResponseConversion: true
        }, useConfiguration.options);
        return {
            ngModule: MostModule,
            providers: [
                {
                    provide: DATA_CONTEXT_CONFIG,
                    useValue: useConfiguration
                },
                AngularDataContext
            ]
        };
    }
}
