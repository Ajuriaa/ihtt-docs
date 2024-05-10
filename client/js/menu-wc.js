'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">vehicle-fleet-system documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AddLogComponent.html" data-type="entity-link" >AddLogComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AdminRouterComponent.html" data-type="entity-link" >AdminRouterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AppComponent.html" data-type="entity-link" >AppComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ConfirmComponentComponent.html" data-type="entity-link" >ConfirmComponentComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CreateBrandComponent.html" data-type="entity-link" >CreateBrandComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CreateLogComponent.html" data-type="entity-link" >CreateLogComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CreateMaintenanceComponent.html" data-type="entity-link" >CreateMaintenanceComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CreateModelComponent.html" data-type="entity-link" >CreateModelComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CreateUpdateDriverComponent.html" data-type="entity-link" >CreateUpdateDriverComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CreateUpdateVehicleComponent.html" data-type="entity-link" >CreateUpdateVehicleComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DashboardComponent.html" data-type="entity-link" >DashboardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DeleteDriverComponent.html" data-type="entity-link" >DeleteDriverComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DeleteVehicleComponent.html" data-type="entity-link" >DeleteVehicleComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DriverComponent.html" data-type="entity-link" >DriverComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DriversComponent.html" data-type="entity-link" >DriversComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FileDropComponent.html" data-type="entity-link" >FileDropComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FuelCardComponent.html" data-type="entity-link" >FuelCardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GasComponent.html" data-type="entity-link" >GasComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GasInfoComponent.html" data-type="entity-link" >GasInfoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GenerateRequestsComponent.html" data-type="entity-link" >GenerateRequestsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HeaderComponent.html" data-type="entity-link" >HeaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoadingComponent.html" data-type="entity-link" >LoadingComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LogComponent.html" data-type="entity-link" >LogComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoginComponent.html" data-type="entity-link" >LoginComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LogsComponent.html" data-type="entity-link" >LogsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MaintenanceComponent.html" data-type="entity-link" >MaintenanceComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NoResultComponent.html" data-type="entity-link" >NoResultComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PrimaryButtonComponent.html" data-type="entity-link" >PrimaryButtonComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RequestComponent.html" data-type="entity-link" >RequestComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RequestsComponent.html" data-type="entity-link" >RequestsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ShowAddPassengersComponent.html" data-type="entity-link" >ShowAddPassengersComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SideBarComponent.html" data-type="entity-link" >SideBarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SideNavButtonComponent.html" data-type="entity-link" >SideNavButtonComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UpdateRequestComponent.html" data-type="entity-link" >UpdateRequestComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/VehicleCardComponent.html" data-type="entity-link" >VehicleCardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/VehicleComponent.html" data-type="entity-link" >VehicleComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/VehiclesComponent.html" data-type="entity-link" >VehiclesComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/cookieHelper.html" data-type="entity-link" >cookieHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/FileNameHelper.html" data-type="entity-link" >FileNameHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/NameHelper.html" data-type="entity-link" >NameHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/NameHelper-1.html" data-type="entity-link" >NameHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/vehicleInfoHelper.html" data-type="entity-link" >vehicleInfoHelper</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DashboardQueries.html" data-type="entity-link" >DashboardQueries</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DriverMutations.html" data-type="entity-link" >DriverMutations</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DriverQueries.html" data-type="entity-link" >DriverQueries</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LogsMutations.html" data-type="entity-link" >LogsMutations</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LogsQueries.html" data-type="entity-link" >LogsQueries</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MaintenanceMutations.html" data-type="entity-link" >MaintenanceMutations</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MapsService.html" data-type="entity-link" >MapsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PDFHelper.html" data-type="entity-link" >PDFHelper</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PublicMutations.html" data-type="entity-link" >PublicMutations</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PublicQueries.html" data-type="entity-link" >PublicQueries</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RequestMutations.html" data-type="entity-link" >RequestMutations</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RequestQueries.html" data-type="entity-link" >RequestQueries</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SearchService.html" data-type="entity-link" >SearchService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SharedDataService.html" data-type="entity-link" >SharedDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UploaderService.html" data-type="entity-link" >UploaderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VehicleMutations.html" data-type="entity-link" >VehicleMutations</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VehicleQueries.html" data-type="entity-link" >VehicleQueries</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/exportData.html" data-type="entity-link" >exportData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FuesWithLog.html" data-type="entity-link" >FuesWithLog</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAvaliableForRequestResponse.html" data-type="entity-link" >IAvaliableForRequestResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBrand.html" data-type="entity-link" >IBrand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBrandsResponse.html" data-type="entity-link" >IBrandsResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICitiesResponse.html" data-type="entity-link" >ICitiesResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICity.html" data-type="entity-link" >ICity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICity-1.html" data-type="entity-link" >ICity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICoordinate.html" data-type="entity-link" >ICoordinate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDashboardQuery.html" data-type="entity-link" >IDashboardQuery</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDriver.html" data-type="entity-link" >IDriver</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDriverResponse.html" data-type="entity-link" >IDriverResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDriversResponse.html" data-type="entity-link" >IDriversResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IGasRefill.html" data-type="entity-link" >IGasRefill</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IGasUnit.html" data-type="entity-link" >IGasUnit</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IGasUnitsResponse.html" data-type="entity-link" >IGasUnitsResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILog.html" data-type="entity-link" >ILog</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILogResponse.html" data-type="entity-link" >ILogResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMaintenance.html" data-type="entity-link" >IMaintenance</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IModel.html" data-type="entity-link" >IModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IModelResponse.html" data-type="entity-link" >IModelResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRequest.html" data-type="entity-link" >IRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRequest-1.html" data-type="entity-link" >IRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRequestResponse.html" data-type="entity-link" >IRequestResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRequestsResponse.html" data-type="entity-link" >IRequestsResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRequestStatus.html" data-type="entity-link" >IRequestStatus</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRequestStatusResponse.html" data-type="entity-link" >IRequestStatusResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRequestType.html" data-type="entity-link" >IRequestType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRequestType-1.html" data-type="entity-link" >IRequestType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRequestTypeResponse.html" data-type="entity-link" >IRequestTypeResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IStatusesReponse.html" data-type="entity-link" >IStatusesReponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITypeResponse.html" data-type="entity-link" >ITypeResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUser.html" data-type="entity-link" >IUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUser-1.html" data-type="entity-link" >IUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUsersResponse.html" data-type="entity-link" >IUsersResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUsersResponse-1.html" data-type="entity-link" >IUsersResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IVehicle.html" data-type="entity-link" >IVehicle</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IVehicleInfo.html" data-type="entity-link" >IVehicleInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IVehicleInfoResponse.html" data-type="entity-link" >IVehicleInfoResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IVehicleResponse.html" data-type="entity-link" >IVehicleResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IVehiclesResponse.html" data-type="entity-link" >IVehiclesResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IVehicleStatus.html" data-type="entity-link" >IVehicleStatus</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IVehicleType.html" data-type="entity-link" >IVehicleType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/monthData.html" data-type="entity-link" >monthData</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});