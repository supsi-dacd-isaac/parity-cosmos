/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */
export var ContentType;
(function (ContentType) {
    ContentType["Json"] = "application/json";
    ContentType["FormData"] = "multipart/form-data";
    ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
})(ContentType || (ContentType = {}));
export class HttpClient {
    constructor(apiConfig = {}) {
        this.baseUrl = "";
        this.securityData = null;
        this.securityWorker = null;
        this.abortControllers = new Map();
        this.baseApiParams = {
            credentials: "same-origin",
            headers: {},
            redirect: "follow",
            referrerPolicy: "no-referrer",
        };
        this.setSecurityData = (data) => {
            this.securityData = data;
        };
        this.contentFormatters = {
            [ContentType.Json]: (input) => input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
            [ContentType.FormData]: (input) => Object.keys(input || {}).reduce((data, key) => {
                data.append(key, input[key]);
                return data;
            }, new FormData()),
            [ContentType.UrlEncoded]: (input) => this.toQueryString(input),
        };
        this.createAbortSignal = (cancelToken) => {
            if (this.abortControllers.has(cancelToken)) {
                const abortController = this.abortControllers.get(cancelToken);
                if (abortController) {
                    return abortController.signal;
                }
                return void 0;
            }
            const abortController = new AbortController();
            this.abortControllers.set(cancelToken, abortController);
            return abortController.signal;
        };
        this.abortRequest = (cancelToken) => {
            const abortController = this.abortControllers.get(cancelToken);
            if (abortController) {
                abortController.abort();
                this.abortControllers.delete(cancelToken);
            }
        };
        this.request = ({ body, secure, path, type, query, format = "json", baseUrl, cancelToken, ...params }) => {
            const secureParams = (secure && this.securityWorker && this.securityWorker(this.securityData)) || {};
            const requestParams = this.mergeRequestParams(params, secureParams);
            const queryString = query && this.toQueryString(query);
            const payloadFormatter = this.contentFormatters[type || ContentType.Json];
            return fetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
                ...requestParams,
                headers: {
                    ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
                    ...(requestParams.headers || {}),
                },
                signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
                body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
            }).then(async (response) => {
                const r = response;
                r.data = null;
                r.error = null;
                const data = await response[format]()
                    .then((data) => {
                    if (r.ok) {
                        r.data = data;
                    }
                    else {
                        r.error = data;
                    }
                    return r;
                })
                    .catch((e) => {
                    r.error = e;
                    return r;
                });
                if (cancelToken) {
                    this.abortControllers.delete(cancelToken);
                }
                if (!response.ok)
                    throw data;
                return data;
            });
        };
        Object.assign(this, apiConfig);
    }
    addQueryParam(query, key) {
        const value = query[key];
        return (encodeURIComponent(key) +
            "=" +
            encodeURIComponent(Array.isArray(value) ? value.join(",") : typeof value === "number" ? value : `${value}`));
    }
    toQueryString(rawQuery) {
        const query = rawQuery || {};
        const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
        return keys
            .map((key) => typeof query[key] === "object" && !Array.isArray(query[key])
            ? this.toQueryString(query[key])
            : this.addQueryParam(query, key))
            .join("&");
    }
    addQueryParams(rawQuery) {
        const queryString = this.toQueryString(rawQuery);
        return queryString ? `?${queryString}` : "";
    }
    mergeRequestParams(params1, params2) {
        return {
            ...this.baseApiParams,
            ...params1,
            ...(params2 || {}),
            headers: {
                ...(this.baseApiParams.headers || {}),
                ...(params1.headers || {}),
                ...((params2 && params2.headers) || {}),
            },
        };
    }
}
/**
 * @title pm/aggregator.proto
 * @version version not set
 */
export class Api extends HttpClient {
    constructor() {
        super(...arguments);
        /**
         * No description
         *
         * @tags Query
         * @name QueryAggregator
         * @summary Queries a aggregator by index.
         * @request GET:/supsi-dacd-isaac/pm/pm/aggregator
         */
        this.queryAggregator = (params = {}) => this.request({
            path: `/supsi-dacd-isaac/pm/pm/aggregator`,
            method: "GET",
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryDefaultLemParsAll
         * @summary Queries a list of defaultLemPars items.
         * @request GET:/supsi-dacd-isaac/pm/pm/defaultLemPars
         */
        this.queryDefaultLemParsAll = (query, params = {}) => this.request({
            path: `/supsi-dacd-isaac/pm/pm/defaultLemPars`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryDefaultLemPars
         * @summary Queries a defaultLemPars by index.
         * @request GET:/supsi-dacd-isaac/pm/pm/defaultLemPars/{index}
         */
        this.queryDefaultLemPars = (index, params = {}) => this.request({
            path: `/supsi-dacd-isaac/pm/pm/defaultLemPars/${index}`,
            method: "GET",
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryDso
         * @summary Queries a dso by index.
         * @request GET:/supsi-dacd-isaac/pm/pm/dso
         */
        this.queryDso = (params = {}) => this.request({
            path: `/supsi-dacd-isaac/pm/pm/dso`,
            method: "GET",
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryGridStateAll
         * @summary Queries a list of gridState items.
         * @request GET:/supsi-dacd-isaac/pm/pm/gridState
         */
        this.queryGridStateAll = (query, params = {}) => this.request({
            path: `/supsi-dacd-isaac/pm/pm/gridState`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryGridState
         * @summary Queries a gridState by index.
         * @request GET:/supsi-dacd-isaac/pm/pm/gridState/{index}
         */
        this.queryGridState = (index, params = {}) => this.request({
            path: `/supsi-dacd-isaac/pm/pm/gridState/${index}`,
            method: "GET",
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryKpiAll
         * @summary Queries a list of kpi items.
         * @request GET:/supsi-dacd-isaac/pm/pm/kpi
         */
        this.queryKpiAll = (query, params = {}) => this.request({
            path: `/supsi-dacd-isaac/pm/pm/kpi`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryKpi
         * @summary Queries a kpi by index.
         * @request GET:/supsi-dacd-isaac/pm/pm/kpi/{index}
         */
        this.queryKpi = (index, params = {}) => this.request({
            path: `/supsi-dacd-isaac/pm/pm/kpi/${index}`,
            method: "GET",
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryKpiFeaturesAll
         * @summary Queries a list of kpiFeatures items.
         * @request GET:/supsi-dacd-isaac/pm/pm/kpiFeatures
         */
        this.queryKpiFeaturesAll = (query, params = {}) => this.request({
            path: `/supsi-dacd-isaac/pm/pm/kpiFeatures`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryKpiFeatures
         * @summary Queries a kpiFeatures by index.
         * @request GET:/supsi-dacd-isaac/pm/pm/kpiFeatures/{index}
         */
        this.queryKpiFeatures = (index, params = {}) => this.request({
            path: `/supsi-dacd-isaac/pm/pm/kpiFeatures/${index}`,
            method: "GET",
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryKpiMeasureAll
         * @summary Queries a list of kpiMeasure items.
         * @request GET:/supsi-dacd-isaac/pm/pm/kpiMeasure
         */
        this.queryKpiMeasureAll = (query, params = {}) => this.request({
            path: `/supsi-dacd-isaac/pm/pm/kpiMeasure`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryKpiMeasure
         * @summary Queries a kpiMeasure by index.
         * @request GET:/supsi-dacd-isaac/pm/pm/kpiMeasure/{index}
         */
        this.queryKpiMeasure = (index, params = {}) => this.request({
            path: `/supsi-dacd-isaac/pm/pm/kpiMeasure/${index}`,
            method: "GET",
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryLemAll
         * @summary Queries a list of lem items.
         * @request GET:/supsi-dacd-isaac/pm/pm/lem
         */
        this.queryLemAll = (query, params = {}) => this.request({
            path: `/supsi-dacd-isaac/pm/pm/lem`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryLem
         * @summary Queries a lem by index.
         * @request GET:/supsi-dacd-isaac/pm/pm/lem/{index}
         */
        this.queryLem = (index, params = {}) => this.request({
            path: `/supsi-dacd-isaac/pm/pm/lem/${index}`,
            method: "GET",
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryLemDatasetAll
         * @summary Queries a list of lemDataset items.
         * @request GET:/supsi-dacd-isaac/pm/pm/lemDataset
         */
        this.queryLemDatasetAll = (query, params = {}) => this.request({
            path: `/supsi-dacd-isaac/pm/pm/lemDataset`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryLemDataset
         * @summary Queries a lemDataset by index.
         * @request GET:/supsi-dacd-isaac/pm/pm/lemDataset/{index}
         */
        this.queryLemDataset = (index, params = {}) => this.request({
            path: `/supsi-dacd-isaac/pm/pm/lemDataset/${index}`,
            method: "GET",
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryLemMeasureAll
         * @summary Queries a list of lemMeasure items.
         * @request GET:/supsi-dacd-isaac/pm/pm/lemMeasure
         */
        this.queryLemMeasureAll = (query, params = {}) => this.request({
            path: `/supsi-dacd-isaac/pm/pm/lemMeasure`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryLemMeasure
         * @summary Queries a lemMeasure by index.
         * @request GET:/supsi-dacd-isaac/pm/pm/lemMeasure/{index}
         */
        this.queryLemMeasure = (index, params = {}) => this.request({
            path: `/supsi-dacd-isaac/pm/pm/lemMeasure/${index}`,
            method: "GET",
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryMarketOperator
         * @summary Queries a marketOperator by index.
         * @request GET:/supsi-dacd-isaac/pm/pm/marketOperator
         */
        this.queryMarketOperator = (params = {}) => this.request({
            path: `/supsi-dacd-isaac/pm/pm/marketOperator`,
            method: "GET",
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryPlayerAll
         * @summary Queries a list of player items.
         * @request GET:/supsi-dacd-isaac/pm/pm/player
         */
        this.queryPlayerAll = (query, params = {}) => this.request({
            path: `/supsi-dacd-isaac/pm/pm/player`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryPlayer
         * @summary Queries a player by index.
         * @request GET:/supsi-dacd-isaac/pm/pm/player/{index}
         */
        this.queryPlayer = (index, params = {}) => this.request({
            path: `/supsi-dacd-isaac/pm/pm/player/${index}`,
            method: "GET",
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QuerySlaAll
         * @summary Queries a list of sla items.
         * @request GET:/supsi-dacd-isaac/pm/pm/sla
         */
        this.querySlaAll = (query, params = {}) => this.request({
            path: `/supsi-dacd-isaac/pm/pm/sla`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QuerySla
         * @summary Queries a sla by index.
         * @request GET:/supsi-dacd-isaac/pm/pm/sla/{index}
         */
        this.querySla = (index, params = {}) => this.request({
            path: `/supsi-dacd-isaac/pm/pm/sla/${index}`,
            method: "GET",
            format: "json",
            ...params,
        });
    }
}
