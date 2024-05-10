/**
 * @api {OBJECT} IDriver IDriver
 * @apiGroup Interfaces
 * @apiVersion 1.0.0
 * @apiParam {Number} ID_Conductor Driver unique ID.
 * @apiParam {String} Nombre Driver's name.
 * @apiParam {Number} [Solicitudes_Finalizadas] Number of finished requests.
 * @apiParam {Boolean} [Disponible] Availability status.
 */

/**
 * @api {OBJECT} IGasUnit IGasUnit
 * @apiGroup Interfaces
 * @apiVersion 1.0.0
 * @apiParam {Number} ID_Unidad_Combustible Fuel unit unique ID.
 * @apiParam {String} Unidad Fuel unit.
 */

/**
 * @api {OBJECT} IVehicle IVehicle
 * @apiGroup Interfaces
 * @apiVersion 1.0.0
 * @apiParam {Number} ID_Vehiculo Vehicle unique ID.
 * @apiParam {String} Placa Vehicle license plate.
 * @apiParam {Number} Kilometraje Vehicle mileage.
 * @apiParam {String} Chasis Vehicle chassis number.
 * @apiParam {String} Motor Vehicle engine number.
 * @apiParam {Number} KPG Kilometers per gallon.
 * @apiParam {String} Imagen_URL Vehicle image URL.
 * @apiParam {Number} Anio Vehicle year.
 * @apiParam {String} Color Vehicle color.
 * @apiParam {Number} ID_Estado_Vehiculo Vehicle state unique ID.
 * @apiParam {Number} ID_Modelo Vehicle model unique ID.
 */

/**
 * @api {OBJECT} IMaintenance IMaintenance
 * @apiGroup Interfaces
 * @apiVersion 1.0.0
 * @apiParam {Number} ID_Mantenimiento Maintenance unique ID.
 * @apiParam {Number} ID_Vehiculo Vehicle unique ID.
 * @apiParam {Number} Kilometraje Mileage.
 * @apiParam {String} Tipo_Mantenimiento Maintenance type.
 * @apiParam {Date} Fecha Maintenance date.
 */

/**
 * @api {OBJECT} IModel IModel
 * @apiGroup Interfaces
 * @apiVersion 1.0.0
 * @apiParam {Number} ID_Modelo Model unique ID.
 * @apiParam {String} Modelo Model name.
 * @apiParam {Number} ID_Marca_Vehiculo Brand unique ID.
 * @apiParam {Number} ID_Tipo_Vehiculo Vehicle type unique ID.
 */

/**
 * @api {OBJECT} IBrand IBrand
 * @apiGroup Interfaces
 * @apiVersion 1.0.0
 * @apiParam {Number} ID_Marca_Vehiculo Brand unique ID.
 * @apiParam {String} Marca Brand name.
 */

/**
 * @api {OBJECT} IVehicleState IVehicleState
 * @apiGroup Interfaces
 * @apiVersion 1.0.0
 * @apiParam {Number} ID_Estado_Vehiculo Vehicle state unique ID.
 * @apiParam {String} Estado_Vehiculo Vehicle state.
 */

/**
 * @api {OBJECT} ICity ICity
 * @apiGroup Interfaces
 * @apiVersion 1.0.0
 * @apiParam {Number} ID_Ciudad City unique ID.
 * @apiParam {String} Nombre City name.
 * @apiParam {Number} Kms Distance.
 * @apiParam {String} Coordenadas Coordinates.
 */

/**
 * @api {OBJECT} IRequest IRequest
 * @apiGroup Interfaces
 * @apiVersion 1.0.0
 * @apiParam {Number} ID_Solicitud Request unique ID.
 * @apiParam {Number} ID_Empleado Employee unique ID.
 * @apiParam {String} [Nombre_Empleado] Employee's name.
 * @apiParam {String} Destino Destination.
 * @apiParam {String} Motivo Reason.
 * @apiParam {Date} Fecha Date.
 * @apiParam {Date} Hora_Salida Departure time.
 * @apiParam {Date} Hora_Regreso Return time.
 * @apiParam {Number} ID_Ciudad City unique ID.
 * @apiParam {String} Pasajeros Passengers.
 * @apiParam {Number} [ID_Vehiculo] Vehicle unique ID.
 * @apiParam {Number} ID_Estado_Solicitud Request state unique ID.
 * @apiParam {Number} ID_Tipo_Solicitud Request type unique ID.
 * @apiParam {Number} [ID_Conductor] Driver unique ID.
 */

/**
 * @api {OBJECT} ILog ILog
 * @apiGroup Interfaces
 * @apiVersion 1.0.0
 * @apiParam {Number} ID_Bitacora Log unique ID.
 * @apiParam {Number} ID_Vehiculo Vehicle unique ID.
 * @apiParam {Number} ID_Conductor Driver unique ID.
 * @apiParam {Number} [ID_Ciudad] City unique ID.
 * @apiParam {String} Destino Destination.
 * @apiParam {Number} Kilometraje_Entrada Initial mileage.
 * @apiParam {Number} Kilometraje_Salida Final mileage.
 * @apiParam {Date} Hora_Salida Departure time.
 * @apiParam {Date} Hora_Entrada Return time.
 * @apiParam {Date} Fecha Date.
 * @apiParam {String} Observaciones Observations.
 * @apiParam {String} Pasajeros Passengers.
 * @apiParam {IFuelRefill[]{<a href="#api-Interfaces-ObjectIfuelrefill">IFuelRefill</a>}} [Llenados_Combustible] Fuel refills.
 */

/**
 * @api {OBJECT} IFuelRefill IFuelRefill
 * @apiGroup Interfaces
 * @apiVersion 1.0.0
 * @apiParam {Number} ID_Llenado_Combustible Fuel refill unique ID.
 * @apiParam {Number} ID_Bitacora Log unique ID.
 * @apiParam {Number} Cantidad Quantity.
 * @apiParam {String} Estacion_Combustible Gas station.
 * @apiParam {Number} Kilometraje_Recarga Mileage.
 * @apiParam {Date} Fecha Date.
 * @apiParam {Number} Precio Price.
 * @apiParam {Number} ID_Unidad_Combustible Fuel unit unique ID.
 */

/**
 * @api {OBJECT} IFuelUnit IFuelUnit
 * @apiGroup Interfaces
 * @apiVersion 1.0.0
 * @apiParam {Number} ID_Unidad_Combustible Fuel unit unique ID.
 * @apiParam {String} Unidad Fuel unit.
 */

/**
 * @api {OBJECT} IRequestState IRequestState
 * @apiGroup Interfaces
 * @apiVersion 1.0.0
 * @apiParam {Number} ID_Estado_Solicitud Request state unique ID.
 * @apiParam {String} Estado Request state.
 */

/**
 * @api {OBJECT} IPassenger IPassenger
 * @apiGroup Interfaces
 * @apiVersion 1.0.0
 * @apiParam {Number} ID_Pasajero Passenger unique ID.
 * @apiParam {Number} ID_Solicitud Request unique ID.
 * @apiParam {Number} ID_Empleado Employee unique ID.
 */

/**
 * @api {OBJECT} IRequestType IRequestType
 * @apiGroup Interfaces
 * @apiVersion 1.0.0
 * @apiParam {Number} ID_Tipo_Solicitud Request type unique ID.
 * @apiParam {String} Tipo_Solicitud Request type.
 */

/**
 * @api {OBJECT} IVehicleType IVehicleType
 * @apiGroup Interfaces
 * @apiVersion 1.0.0
 * @apiParam {Number} ID_Tipo_Vehiculo Vehicle type unique ID.
 * @apiParam {String} Tipo_Vehiculo Vehicle type.
 */

/**
 * @api {OBJECT} IUser IUser
 * @apiGroup Interfaces
 * @apiVersion 1.0.0
 * @apiParam {Number} ID_Empleado Employee unique ID.
 * @apiParam {String} Nombres Employee's name.
 * @apiParam {String} Apellidos Employee's last name.
 * @apiParam {Number} ID_Estado Employee state unique ID.
 */

/**
 * @api {OBJECT} IVehicleInfo IVehicleInfo
 * @apiGroup Interfaces
 * @apiVersion 1.0.0
 * @apiParam {Number} kms Vehicle kilometers.
 * @apiParam {Number} gas Vehicle gas.
 * @apiParam {Number} cost Vehicle cost.
 * @apiParam {Number} kpg Vehicle kilometers per gallon.
 * @apiParam {Number} cpk Vehicle cost per kilometer.
 * 
 */

/**
 * @api {OBJECT} IVehicleInfo IVehicleInfo
 * @apiGroup Interfaces
 * @apiVersion 1.0.0
 * @apiParam {IVehicleInfo} current Current vehicle info.
 * @apiParam {IVehicleInfo} last Last vehicle info.
 * @apiParam {Object} maintenance Maintenance info.
 * @apiParam {String} maintenance.date Maintenance date.
 * @apiParam {Number} maintenance.kms Maintenance kms.
 */

/** 
 * 
 * @api {Get} url/cities Get Cities
 * @apiDescription Get all cities information
 * @apiVersion 1.0.0
 * @apiGroup Queries
 * @apiSuccess {ICity[]{<a href="#api-Interfaces-ObjectIcity">ICity</a>}} data All cities.
*/

/**
 * @api {OBJECT} monthData monthData
 * @apiGroup Interfaces
 * @apiVersion 1.0.0
 * @apiParam {Number} gas Gas consumed.
 * @apiParam {Number} cost Cost of gas.
 * @apiParam {Number} kms Kilometers traveled.
 * @apiParam {Number} request Number of requests.
 * @apiParam {Number} trips Number of trips.
 * 
 */

/**
 * @api {GET} url/dashboard Get Dashboard
 * @apiDescription Get dashboard information
 * @apiVersion 1.0.0
 * @apiGroup Queries
 * @apiSuccess {monthData{<a href="#api-Interfaces-ObjectMonthdata">monthData</a>}} current_month Current month data.
 * @apiSuccess {monthData{<a href="#api-Interfaces-ObjectMonthdata">monthData</a>}} last_month Last month data.
 * @apiSuccess {month/kms} kms Kilometers traveled.
 * @apiSuccess {city/trips} cities Cities traveled.
 * @apiSuccess {IVehicle} vehicle Vehicle with most kilometers traveled.
 * @apiSuccess {month/cost} cost Cost of gas.
 * 
 */

/**
 * @api {DELETE} url/driver/:id Delete driver
 * @apiGroup Mutations
 * @apiVersion 1.0.0
 * @apiParam {Number} id Driver ID.
 * @apiSuccess {Boolean} Success
 * @apiDescription This function deletes a driver.
 */

/**
 * 
 * @api {POST} url/create-driver Create driver
 * @apiGroup Mutations
 * @apiVersion 1.0.0
 * @apiParam {IDriver{<a href="#api-Interfaces-ObjectIdriver">IDriver</a>}} data Driver data.
 * @apiSuccess {Boolean} Success
 * @apiDescription This function creates a new driver.
 */

/**
 * 
 * @api {Get} url/driver/:id Get Driver
 * @apiDescription Get driver information by ID.
 * @apiVersion 1.0.0
 * @apiGroup Queries
 * @apiParam {Integer} id Driver unique ID.
 * @apiSuccess {IDriver{<a href="#api-Interfaces-ObjectIdriver">IDriver</a>}} data The requested driver.
 */

/** 
 * 
 * @api {Get} url/drivers Get Drivers
 * @apiDescription Get all drivers information
 * @apiVersion 1.0.0
 * @apiGroup Queries
 * @apiSuccess {IDriver[]{<a href="#api-Interfaces-ObjectIdriver">IDriver</a>}} data All active drivers.
*/

/**
 * @api {OBJECT} FuesWithLog FuesWithLog
 * @apiGroup Interfaces
 * @apiVersion 1.0.0
 * @apiParam {Number} ID_Vehiculo Vehicle ID.
 * @apiParam {Number} Kilometraje_Vehiculo Vehicle mileage.
 * @apiParam {Number} Cantidad Fuel quantity.
 * @apiParam {String} Estacion_Combustible Fuel station.
 * @apiParam {Number} Kilometraje_Recarga Refill mileage.                                                                                                                                                 
 */

/**
 * @api {OBJECT} Data Data
 * @apiGroup Interfaces
 * @apiVersion 1.0.0
 * @apiParam {ILog[]} logs Logs.
 * @apiParam {FuesWithLog[]} refills Refills.
 */

/**
 * @api {POST} url/create-logs Create logs
 * @apiGroup Mutations
 * @apiVersion 1.0.0
 * @apiParam {Data{<a href="#api-Interfaces-Data">Idata</a>}} data Logs data.
 * @apiSuccess {Boolean} Success
 * @apiDescription This function creates logs.
 */

/**
 * @api {Get} url/logs/:id Get Vehicle Logs
 * @apiDescription Get vehicle logs by vehicle id.
 * @apiVersion 1.0.0
 * @apiGroup Queries
 * @apiParam {String} id Vehicle id.
 * @apiSuccess {ILog[]{<a href="#api-Interfaces-ObjectIlog">ILog</a>}} data Vehicle logs.
 */

/**
 * @api {Get} url/users Get Users
 * @apiDescription Get all users.
 * @apiVersion 1.0.0
 * @apiGroup Queries
 * @apiSuccess {IUser[]{<a href="#api-Interfaces-ObjectIuser">IUser</a>}} data Users.
 */

/**
 * @api {Get} url/gas-units Get Gas Units
 * @apiDescription Get all gas units.
 * @apiVersion 1.0.0
 * @apiGroup Queries
 * @apiSuccess {IGasUnit[]{<a href="#api-Interfaces-ObjectIgasunit">IGasUnit</a>}} data Gas units.
 */

/** 
 * @api {POST} url/create-maintenance Create maintenance
 * @apiGroup Mutations
 * @apiVersion 1.0.0
 * @apiParam {IMaintenance{<a href="#api-Interfaces-ObjectImaintenance">IMaintenance</a>}} data Maintenance data.
 * @apiSuccess {Boolean} Success
 * @apiDescription This function creates a maintenance.
*/

/**
 * 
 * @api {Get} url/maintenances Get Maintenances
 * @apiDescription Get all maintenances.
 * @apiVersion 1.0.0
 * @apiGroup Queries
 * @apiSuccess {IMaintenance[]{<a href="#api-Interfaces-ObjectImaintenance">IMaintenance</a>}} data Maintenances.
 * 
 */

/**
 *
 * @api {POST} url/create-request Create request
 * @apiGroup Mutations
 * @apiVersion 1.0.0
 * @apiParam {String} id Request data.
 * @apiSuccess {Boolean} Success
 * @apiDescription This function finishes a request.
*/

/**
 * @api {POST} url/cancel-request Cancel request
 * @apiGroup Mutations
 * @apiVersion 1.0.0
 * @apiParam {String} id Request ID.
 * @apiSuccess {Boolean} Success
 * @apiDescription This function cancels a request.
 */

/**
 * @api {POST} url/create-request Create request
 * @apiGroup Mutations
 * @apiVersion 1.0.0
 * @apiParam {String} data Request data.
 * @apiSuccess {Boolean} Success
 * @apiDescription This function creates a new request.
 */

/** 
 * @api {PUT} url/update-request Update request
 * @apiGroup Mutations
 * @apiVersion 1.0.0
 * @apiParam {String} data Request data.
*/

/**
 * @api {POST} url/accept-request Accept request
 * @apiGroup Mutations
 * @apiVersion 1.0.0
 * @apiParam {String} id Request ID.
 * @apiSuccess {Boolean} Success
 * @apiDescription This function accepts a request.
 *
 */

/**
 * @api {Get} url/requests Get Requests
 * @apiDescription Get all requests.
 * @apiVersion 1.0.0
 * @apiGroup Queries
 * @apiSuccess {IRequest[]{<a href="#api-Interfaces-ObjectIrequest">IRequest</a>}} data Requests.
 * 
 */

/**
 * @api {Get} url/requests/:id Get Vehicle Requests
 * @apiDescription Get vehicle requests by vehicle id.
 * @apiVersion 1.0.0
 * @apiGroup Queries
 * @apiParam {String} id Vehicle id.
 * @apiSuccess {IRequest[]{<a href="#api-Interfaces-ObjectIrequest">IRequest</a>}} data Vehicle requests.
 */

/**
 * @api {Get} url/request/:id Get Request
 * @apiDescription Get request by id.
 * @apiVersion 1.0.0
 * @apiGroup Queries
 * @apiParam {String} id Request id.
 * @apiSuccess {IRequest{<a href="#api-Interfaces-ObjectIrequest">IRequest</a>}} data Request.
 */

/**
 * @api {Get} url/request-types Get Request Types
 * @apiDescription Get all request types.
 * @apiVersion 1.0.0
 * @apiGroup Queries
 * @apiSuccess {IRequestType[]{<a href="#api-Interfaces-ObjectIrequesttype">IRequestType</a>}} data Request types.
 * 
 */

/**
 * 
 * @api {Get} url//available-request/:id Get Available For Request
 * @apiDescription Get available drivers and vehicles for a request.
 * @apiVersion 1.0.0
 * @apiGroup Queries
 * @apiParam {String} id Request id.
 * @apiSuccess {IDriver[]{<a href="#api-Interfaces-ObjectIdriver">IDrivers</a>}} drivers Available drivers and vehicles.
 * @apiSuccess {IVehicle[]{<a href="#api-Interfaces-ObjectIvehicle">IVehicle</a>}} vehicles Available vehicles.
 * @apiSuccess {IUser[]{<a href="#api-Interfaces-ObjectIuser">IUser</a>}} employees Available employees.
 */

/**
 * @api {Get} url/request-status Get Request Status
 * @apiDescription Get all request status.
 * @apiVersion 1.0.0
 * @apiGroup Queries
 * @apiSuccess {IRequestState[]{<a href="#api-Interfaces-ObjectIrequeststate">IRequestState</a>}} data Request status.
 */

/**
 * @api {DELETE} url/vehicle/:id Delete vehicle
 * @apiGroup Mutations
 * @apiVersion 1.0.0
 * @apiParam {Number} id Vehicle ID.
 * @apiSuccess {Boolean} Success
 * @apiDescription This function deletes a vehicle.
 */


/**
 * 
 * @api {POST} url/create-vehicle Create vehicle
 * @apiGroup Mutations
 * @apiVersion 1.0.0
 * @apiParam {IVehicle{<a href="#api-Interfaces-Objectvehicle">IVehicle</a>}} data Vehicle data.
 * @apiSuccess {Boolean} Success
 * @apiDescription This function creates a new vehicle.
 */

/**
 * 
 * @api {PUT} url/update-vehicle Update vehicle
 * @apiGroup Mutations
 * @apiVersion 1.0.0
 * @apiParam {IVehicle{<a href="#api-Interfaces-Objectvehicle">IVehicle</a>}} data Vehicle data.
 * @apiSuccess {Boolean} Success
 * @apiDescription This function updates a vehicle.
 */

/**
 * 
 * @api {POST} url/create-vehicle-model Create vehicle model
 * @apiGroup Mutations
 * @apiVersion 1.0.0
 * @apiParam {IModel{<a href="#api-Interfaces-Objectmodel">IModel</a>}} data Model data.
 * @apiSuccess {Boolean} Success
 * @apiDescription This function creates a new vehicle model.
 */

/**
 * 
 * @api {POST} url/create-vehicle-brand Create vehicle brand
 * @apiGroup Mutations
 * @apiVersion 1.0.0
 * @apiParam {String} data Brand data.
 * @apiSuccess {Boolean} Success
 * @apiDescription This function creates a new vehicle brand.
 */

/**
 * 
 * @api {Get} url/vehicle/:id Get Vehicle
 * @apiDescription Get vehicle by id.
 * @apiVersion 1.0.0
 * @apiGroup Queries
 * @apiParam {String} id Vehicle id.
 * @apiSuccess {IVehicle{<a href="#api-Interfaces-ObjectIvehicle">IVehicle</a>}} data Vehicle.
 */

/**
 * 
 * @api {Get} url/vehicles Get Vehicles
 * @apiDescription Get all vehicles.
 * @apiVersion 1.0.0
 * @apiGroup Queries
 * @apiSuccess {IVehicle[]{<a href="#api-Interfaces-ObjectIvehicle">IVehicle</a>}} data Vehicles.
 */

/**
 * 
 * @api {Get} url/vehicle-models Get Vehicle Models
 * @apiDescription Get all vehicle models.
 * @apiVersion 1.0.0
 * @apiGroup Queries
 * @apiSuccess {IModel[]{<a href="#api-Interfaces-ObjectImodel">IModel</a>}} data Vehicle models.
 */

/**
 * 
 * @api {Get} url/vehicle-states Get Vehicle Statuses
 * @apiDescription Get all vehicle statuses.
 * @apiVersion 1.0.0
 * @apiGroup Queries
 * @apiSuccess {IVehicleState[]{<a href="#api-Interfaces-ObjectIvehiclestate">IVehicleState</a>}} data Vehicle statuses.
 */

/**
 * 
 * @api {Get} url/vehicle-types Get Vehicle Types
 * @apiDescription Get all vehicle types.
 * @apiVersion 1.0.0
 * @apiGroup Queries
 * @apiSuccess {IVehicleType[]{<a href="#api-Interfaces-ObjectIvehicletype">IVehicleType</a>}} data Vehicle types.
 */

/**
 * 
 * @api {Get} url/vehicle-brands Get Vehicle Brands
 * @apiDescription Get all vehicle brands.
 * @apiVersion 1.0.0
 * @apiGroup Queries
 * @apiSuccess {IBrand[]{<a href="#api-Interfaces-ObjectIbrand">IBrand</a>}} data Vehicle brands.
 */

/**
 *
 * @api {Get} url/vehicle-info/:id Get Vehicle Info
 * @apiDescription Get vehicle info.
 * @apiVersion 1.0.0
 * @apiGroup Queries
 * @apiParam {String} id Vehicle id.
 * @apiSuccess {IVehicleInfo{<a href="#api-Interfaces-ObjectIvehicleinfo">IVehicleInfo</a>}} data Vehicle info.
 */
