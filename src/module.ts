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
        return {
            ngModule: MostModule,
            providers: [
                {
                    provide: DATA_CONTEXT_CONFIG,
                    useValue: configuration || {
                        base: '/',
                        options: {
                            useMediaTypeExtensions: true
                        }
                    }
                },
                AngularDataContext
            ]
        };
    }
}
