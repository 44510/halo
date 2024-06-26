/* tslint:disable */
/* eslint-disable */
/**
 * Halo Next API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import { MarkSpecifiedRequest } from '../models';
// @ts-ignore
import { Notification } from '../models';
// @ts-ignore
import { NotificationList } from '../models';
// @ts-ignore
import { ReasonTypeNotifierCollectionRequest } from '../models';
// @ts-ignore
import { ReasonTypeNotifierMatrix } from '../models';
/**
 * ApiNotificationHaloRunV1alpha1NotificationApi - axios parameter creator
 * @export
 */
export const ApiNotificationHaloRunV1alpha1NotificationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Delete the specified notification.
         * @param {string} username Username
         * @param {string} name Notification name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSpecifiedNotification: async (username: string, name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'username' is not null or undefined
            assertParamExists('deleteSpecifiedNotification', 'username', username)
            // verify required parameter 'name' is not null or undefined
            assertParamExists('deleteSpecifiedNotification', 'name', name)
            const localVarPath = `/apis/api.notification.halo.run/v1alpha1/userspaces/{username}/notifications/{name}`
                .replace(`{${"username"}}`, encodeURIComponent(String(username)))
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List notification preferences for the authenticated user.
         * @param {string} username Username
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listUserNotificationPreferences: async (username: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'username' is not null or undefined
            assertParamExists('listUserNotificationPreferences', 'username', username)
            const localVarPath = `/apis/api.notification.halo.run/v1alpha1/userspaces/{username}/notification-preferences`
                .replace(`{${"username"}}`, encodeURIComponent(String(username)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List notifications for the authenticated user.
         * @param {string} username Username
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {string} [keyword] Keyword
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listUserNotifications: async (username: string, page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, keyword?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'username' is not null or undefined
            assertParamExists('listUserNotifications', 'username', username)
            const localVarPath = `/apis/api.notification.halo.run/v1alpha1/userspaces/{username}/notifications`
                .replace(`{${"username"}}`, encodeURIComponent(String(username)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            if (labelSelector) {
                localVarQueryParameter['labelSelector'] = labelSelector;
            }

            if (fieldSelector) {
                localVarQueryParameter['fieldSelector'] = fieldSelector;
            }

            if (sort) {
                localVarQueryParameter['sort'] = sort;
            }

            if (keyword !== undefined) {
                localVarQueryParameter['keyword'] = keyword;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Mark the specified notification as read.
         * @param {string} username Username
         * @param {string} name Notification name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        markNotificationAsRead: async (username: string, name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'username' is not null or undefined
            assertParamExists('markNotificationAsRead', 'username', username)
            // verify required parameter 'name' is not null or undefined
            assertParamExists('markNotificationAsRead', 'name', name)
            const localVarPath = `/apis/api.notification.halo.run/v1alpha1/userspaces/{username}/notifications/{name}/mark-as-read`
                .replace(`{${"username"}}`, encodeURIComponent(String(username)))
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Mark the specified notifications as read.
         * @param {string} username Username
         * @param {MarkSpecifiedRequest} markSpecifiedRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        markNotificationsAsRead: async (username: string, markSpecifiedRequest: MarkSpecifiedRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'username' is not null or undefined
            assertParamExists('markNotificationsAsRead', 'username', username)
            // verify required parameter 'markSpecifiedRequest' is not null or undefined
            assertParamExists('markNotificationsAsRead', 'markSpecifiedRequest', markSpecifiedRequest)
            const localVarPath = `/apis/api.notification.halo.run/v1alpha1/userspaces/{username}/notifications/-/mark-specified-as-read`
                .replace(`{${"username"}}`, encodeURIComponent(String(username)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(markSpecifiedRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Save notification preferences for the authenticated user.
         * @param {string} username Username
         * @param {ReasonTypeNotifierCollectionRequest} [reasonTypeNotifierCollectionRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        saveUserNotificationPreferences: async (username: string, reasonTypeNotifierCollectionRequest?: ReasonTypeNotifierCollectionRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'username' is not null or undefined
            assertParamExists('saveUserNotificationPreferences', 'username', username)
            const localVarPath = `/apis/api.notification.halo.run/v1alpha1/userspaces/{username}/notification-preferences`
                .replace(`{${"username"}}`, encodeURIComponent(String(username)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(reasonTypeNotifierCollectionRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ApiNotificationHaloRunV1alpha1NotificationApi - functional programming interface
 * @export
 */
export const ApiNotificationHaloRunV1alpha1NotificationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ApiNotificationHaloRunV1alpha1NotificationApiAxiosParamCreator(configuration)
    return {
        /**
         * Delete the specified notification.
         * @param {string} username Username
         * @param {string} name Notification name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteSpecifiedNotification(username: string, name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Notification>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteSpecifiedNotification(username, name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ApiNotificationHaloRunV1alpha1NotificationApi.deleteSpecifiedNotification']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * List notification preferences for the authenticated user.
         * @param {string} username Username
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listUserNotificationPreferences(username: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReasonTypeNotifierMatrix>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listUserNotificationPreferences(username, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ApiNotificationHaloRunV1alpha1NotificationApi.listUserNotificationPreferences']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * List notifications for the authenticated user.
         * @param {string} username Username
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {string} [keyword] Keyword
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listUserNotifications(username: string, page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, keyword?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NotificationList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listUserNotifications(username, page, size, labelSelector, fieldSelector, sort, keyword, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ApiNotificationHaloRunV1alpha1NotificationApi.listUserNotifications']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Mark the specified notification as read.
         * @param {string} username Username
         * @param {string} name Notification name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async markNotificationAsRead(username: string, name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Notification>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.markNotificationAsRead(username, name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ApiNotificationHaloRunV1alpha1NotificationApi.markNotificationAsRead']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Mark the specified notifications as read.
         * @param {string} username Username
         * @param {MarkSpecifiedRequest} markSpecifiedRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async markNotificationsAsRead(username: string, markSpecifiedRequest: MarkSpecifiedRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<string>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.markNotificationsAsRead(username, markSpecifiedRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ApiNotificationHaloRunV1alpha1NotificationApi.markNotificationsAsRead']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Save notification preferences for the authenticated user.
         * @param {string} username Username
         * @param {ReasonTypeNotifierCollectionRequest} [reasonTypeNotifierCollectionRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async saveUserNotificationPreferences(username: string, reasonTypeNotifierCollectionRequest?: ReasonTypeNotifierCollectionRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReasonTypeNotifierMatrix>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.saveUserNotificationPreferences(username, reasonTypeNotifierCollectionRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ApiNotificationHaloRunV1alpha1NotificationApi.saveUserNotificationPreferences']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ApiNotificationHaloRunV1alpha1NotificationApi - factory interface
 * @export
 */
export const ApiNotificationHaloRunV1alpha1NotificationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ApiNotificationHaloRunV1alpha1NotificationApiFp(configuration)
    return {
        /**
         * Delete the specified notification.
         * @param {ApiNotificationHaloRunV1alpha1NotificationApiDeleteSpecifiedNotificationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSpecifiedNotification(requestParameters: ApiNotificationHaloRunV1alpha1NotificationApiDeleteSpecifiedNotificationRequest, options?: RawAxiosRequestConfig): AxiosPromise<Notification> {
            return localVarFp.deleteSpecifiedNotification(requestParameters.username, requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * List notification preferences for the authenticated user.
         * @param {ApiNotificationHaloRunV1alpha1NotificationApiListUserNotificationPreferencesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listUserNotificationPreferences(requestParameters: ApiNotificationHaloRunV1alpha1NotificationApiListUserNotificationPreferencesRequest, options?: RawAxiosRequestConfig): AxiosPromise<ReasonTypeNotifierMatrix> {
            return localVarFp.listUserNotificationPreferences(requestParameters.username, options).then((request) => request(axios, basePath));
        },
        /**
         * List notifications for the authenticated user.
         * @param {ApiNotificationHaloRunV1alpha1NotificationApiListUserNotificationsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listUserNotifications(requestParameters: ApiNotificationHaloRunV1alpha1NotificationApiListUserNotificationsRequest, options?: RawAxiosRequestConfig): AxiosPromise<NotificationList> {
            return localVarFp.listUserNotifications(requestParameters.username, requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, requestParameters.keyword, options).then((request) => request(axios, basePath));
        },
        /**
         * Mark the specified notification as read.
         * @param {ApiNotificationHaloRunV1alpha1NotificationApiMarkNotificationAsReadRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        markNotificationAsRead(requestParameters: ApiNotificationHaloRunV1alpha1NotificationApiMarkNotificationAsReadRequest, options?: RawAxiosRequestConfig): AxiosPromise<Notification> {
            return localVarFp.markNotificationAsRead(requestParameters.username, requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * Mark the specified notifications as read.
         * @param {ApiNotificationHaloRunV1alpha1NotificationApiMarkNotificationsAsReadRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        markNotificationsAsRead(requestParameters: ApiNotificationHaloRunV1alpha1NotificationApiMarkNotificationsAsReadRequest, options?: RawAxiosRequestConfig): AxiosPromise<Array<string>> {
            return localVarFp.markNotificationsAsRead(requestParameters.username, requestParameters.markSpecifiedRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Save notification preferences for the authenticated user.
         * @param {ApiNotificationHaloRunV1alpha1NotificationApiSaveUserNotificationPreferencesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        saveUserNotificationPreferences(requestParameters: ApiNotificationHaloRunV1alpha1NotificationApiSaveUserNotificationPreferencesRequest, options?: RawAxiosRequestConfig): AxiosPromise<ReasonTypeNotifierMatrix> {
            return localVarFp.saveUserNotificationPreferences(requestParameters.username, requestParameters.reasonTypeNotifierCollectionRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for deleteSpecifiedNotification operation in ApiNotificationHaloRunV1alpha1NotificationApi.
 * @export
 * @interface ApiNotificationHaloRunV1alpha1NotificationApiDeleteSpecifiedNotificationRequest
 */
export interface ApiNotificationHaloRunV1alpha1NotificationApiDeleteSpecifiedNotificationRequest {
    /**
     * Username
     * @type {string}
     * @memberof ApiNotificationHaloRunV1alpha1NotificationApiDeleteSpecifiedNotification
     */
    readonly username: string

    /**
     * Notification name
     * @type {string}
     * @memberof ApiNotificationHaloRunV1alpha1NotificationApiDeleteSpecifiedNotification
     */
    readonly name: string
}

/**
 * Request parameters for listUserNotificationPreferences operation in ApiNotificationHaloRunV1alpha1NotificationApi.
 * @export
 * @interface ApiNotificationHaloRunV1alpha1NotificationApiListUserNotificationPreferencesRequest
 */
export interface ApiNotificationHaloRunV1alpha1NotificationApiListUserNotificationPreferencesRequest {
    /**
     * Username
     * @type {string}
     * @memberof ApiNotificationHaloRunV1alpha1NotificationApiListUserNotificationPreferences
     */
    readonly username: string
}

/**
 * Request parameters for listUserNotifications operation in ApiNotificationHaloRunV1alpha1NotificationApi.
 * @export
 * @interface ApiNotificationHaloRunV1alpha1NotificationApiListUserNotificationsRequest
 */
export interface ApiNotificationHaloRunV1alpha1NotificationApiListUserNotificationsRequest {
    /**
     * Username
     * @type {string}
     * @memberof ApiNotificationHaloRunV1alpha1NotificationApiListUserNotifications
     */
    readonly username: string

    /**
     * Page number. Default is 0.
     * @type {number}
     * @memberof ApiNotificationHaloRunV1alpha1NotificationApiListUserNotifications
     */
    readonly page?: number

    /**
     * Size number. Default is 0.
     * @type {number}
     * @memberof ApiNotificationHaloRunV1alpha1NotificationApiListUserNotifications
     */
    readonly size?: number

    /**
     * Label selector. e.g.: hidden!&#x3D;true
     * @type {Array<string>}
     * @memberof ApiNotificationHaloRunV1alpha1NotificationApiListUserNotifications
     */
    readonly labelSelector?: Array<string>

    /**
     * Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @type {Array<string>}
     * @memberof ApiNotificationHaloRunV1alpha1NotificationApiListUserNotifications
     */
    readonly fieldSelector?: Array<string>

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @type {Array<string>}
     * @memberof ApiNotificationHaloRunV1alpha1NotificationApiListUserNotifications
     */
    readonly sort?: Array<string>

    /**
     * Keyword
     * @type {string}
     * @memberof ApiNotificationHaloRunV1alpha1NotificationApiListUserNotifications
     */
    readonly keyword?: string
}

/**
 * Request parameters for markNotificationAsRead operation in ApiNotificationHaloRunV1alpha1NotificationApi.
 * @export
 * @interface ApiNotificationHaloRunV1alpha1NotificationApiMarkNotificationAsReadRequest
 */
export interface ApiNotificationHaloRunV1alpha1NotificationApiMarkNotificationAsReadRequest {
    /**
     * Username
     * @type {string}
     * @memberof ApiNotificationHaloRunV1alpha1NotificationApiMarkNotificationAsRead
     */
    readonly username: string

    /**
     * Notification name
     * @type {string}
     * @memberof ApiNotificationHaloRunV1alpha1NotificationApiMarkNotificationAsRead
     */
    readonly name: string
}

/**
 * Request parameters for markNotificationsAsRead operation in ApiNotificationHaloRunV1alpha1NotificationApi.
 * @export
 * @interface ApiNotificationHaloRunV1alpha1NotificationApiMarkNotificationsAsReadRequest
 */
export interface ApiNotificationHaloRunV1alpha1NotificationApiMarkNotificationsAsReadRequest {
    /**
     * Username
     * @type {string}
     * @memberof ApiNotificationHaloRunV1alpha1NotificationApiMarkNotificationsAsRead
     */
    readonly username: string

    /**
     * 
     * @type {MarkSpecifiedRequest}
     * @memberof ApiNotificationHaloRunV1alpha1NotificationApiMarkNotificationsAsRead
     */
    readonly markSpecifiedRequest: MarkSpecifiedRequest
}

/**
 * Request parameters for saveUserNotificationPreferences operation in ApiNotificationHaloRunV1alpha1NotificationApi.
 * @export
 * @interface ApiNotificationHaloRunV1alpha1NotificationApiSaveUserNotificationPreferencesRequest
 */
export interface ApiNotificationHaloRunV1alpha1NotificationApiSaveUserNotificationPreferencesRequest {
    /**
     * Username
     * @type {string}
     * @memberof ApiNotificationHaloRunV1alpha1NotificationApiSaveUserNotificationPreferences
     */
    readonly username: string

    /**
     * 
     * @type {ReasonTypeNotifierCollectionRequest}
     * @memberof ApiNotificationHaloRunV1alpha1NotificationApiSaveUserNotificationPreferences
     */
    readonly reasonTypeNotifierCollectionRequest?: ReasonTypeNotifierCollectionRequest
}

/**
 * ApiNotificationHaloRunV1alpha1NotificationApi - object-oriented interface
 * @export
 * @class ApiNotificationHaloRunV1alpha1NotificationApi
 * @extends {BaseAPI}
 */
export class ApiNotificationHaloRunV1alpha1NotificationApi extends BaseAPI {
    /**
     * Delete the specified notification.
     * @param {ApiNotificationHaloRunV1alpha1NotificationApiDeleteSpecifiedNotificationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiNotificationHaloRunV1alpha1NotificationApi
     */
    public deleteSpecifiedNotification(requestParameters: ApiNotificationHaloRunV1alpha1NotificationApiDeleteSpecifiedNotificationRequest, options?: RawAxiosRequestConfig) {
        return ApiNotificationHaloRunV1alpha1NotificationApiFp(this.configuration).deleteSpecifiedNotification(requestParameters.username, requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List notification preferences for the authenticated user.
     * @param {ApiNotificationHaloRunV1alpha1NotificationApiListUserNotificationPreferencesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiNotificationHaloRunV1alpha1NotificationApi
     */
    public listUserNotificationPreferences(requestParameters: ApiNotificationHaloRunV1alpha1NotificationApiListUserNotificationPreferencesRequest, options?: RawAxiosRequestConfig) {
        return ApiNotificationHaloRunV1alpha1NotificationApiFp(this.configuration).listUserNotificationPreferences(requestParameters.username, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List notifications for the authenticated user.
     * @param {ApiNotificationHaloRunV1alpha1NotificationApiListUserNotificationsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiNotificationHaloRunV1alpha1NotificationApi
     */
    public listUserNotifications(requestParameters: ApiNotificationHaloRunV1alpha1NotificationApiListUserNotificationsRequest, options?: RawAxiosRequestConfig) {
        return ApiNotificationHaloRunV1alpha1NotificationApiFp(this.configuration).listUserNotifications(requestParameters.username, requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, requestParameters.keyword, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Mark the specified notification as read.
     * @param {ApiNotificationHaloRunV1alpha1NotificationApiMarkNotificationAsReadRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiNotificationHaloRunV1alpha1NotificationApi
     */
    public markNotificationAsRead(requestParameters: ApiNotificationHaloRunV1alpha1NotificationApiMarkNotificationAsReadRequest, options?: RawAxiosRequestConfig) {
        return ApiNotificationHaloRunV1alpha1NotificationApiFp(this.configuration).markNotificationAsRead(requestParameters.username, requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Mark the specified notifications as read.
     * @param {ApiNotificationHaloRunV1alpha1NotificationApiMarkNotificationsAsReadRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiNotificationHaloRunV1alpha1NotificationApi
     */
    public markNotificationsAsRead(requestParameters: ApiNotificationHaloRunV1alpha1NotificationApiMarkNotificationsAsReadRequest, options?: RawAxiosRequestConfig) {
        return ApiNotificationHaloRunV1alpha1NotificationApiFp(this.configuration).markNotificationsAsRead(requestParameters.username, requestParameters.markSpecifiedRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Save notification preferences for the authenticated user.
     * @param {ApiNotificationHaloRunV1alpha1NotificationApiSaveUserNotificationPreferencesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiNotificationHaloRunV1alpha1NotificationApi
     */
    public saveUserNotificationPreferences(requestParameters: ApiNotificationHaloRunV1alpha1NotificationApiSaveUserNotificationPreferencesRequest, options?: RawAxiosRequestConfig) {
        return ApiNotificationHaloRunV1alpha1NotificationApiFp(this.configuration).saveUserNotificationPreferences(requestParameters.username, requestParameters.reasonTypeNotifierCollectionRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

