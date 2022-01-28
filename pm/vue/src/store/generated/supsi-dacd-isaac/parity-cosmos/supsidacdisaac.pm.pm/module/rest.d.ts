export interface PmAggregator {
    idx?: string;
    address?: string;
    creator?: string;
}
export interface PmDefaultLemPars {
    index?: string;
    pbBAU?: string;
    psBAU?: string;
    pbP2P?: string;
    psP2P?: string;
    beta?: string;
    creator?: string;
}
export interface PmDso {
    idx?: string;
    address?: string;
    creator?: string;
}
export interface PmGridState {
    index?: string;
    grid?: string;
    /** @format int32 */
    timestamp?: number;
    state?: string;
    creator?: string;
}
export interface PmKpi {
    index?: string;
    sla?: string;
    rule?: string;
    limit?: string;
    mu?: string;
    /** @format int32 */
    penalty?: number;
    creator?: string;
}
export interface PmKpiFeatures {
    index?: string;
    sla?: string;
    rule?: string;
    limit?: string;
    mu?: string;
    /** @format int32 */
    penalty?: number;
    players?: string[];
    creator?: string;
}
export interface PmKpiMeasure {
    index?: string;
    kpi?: string;
    player?: string;
    /** @format int32 */
    timestamp?: number;
    value?: string;
    mu?: string;
    creator?: string;
}
export interface PmLem {
    index?: string;
    /** @format int32 */
    start?: number;
    /** @format int32 */
    end?: number;
    params?: string[];
    players?: string[];
    creator?: string;
}
export interface PmLemDataset {
    index?: string;
    player?: string;
    /** @format int32 */
    timestamp?: number;
    pconsMeasure?: string;
    pprodMeasure?: string;
    pconsForecast?: string;
    pprodForecast?: string;
    creator?: string;
}
export interface PmLemMeasure {
    index?: string;
    player?: string;
    signal?: string;
    /** @format int32 */
    timestamp?: number;
    value?: string;
    mu?: string;
    creator?: string;
}
export interface PmMarketOperator {
    idx?: string;
    address?: string;
    creator?: string;
}
export declare type PmMsgCreateAggregatorResponse = object;
export declare type PmMsgCreateDefaultLemParsResponse = object;
export declare type PmMsgCreateDsoResponse = object;
export declare type PmMsgCreateGridStateResponse = object;
export declare type PmMsgCreateKpiFeaturesResponse = object;
export declare type PmMsgCreateKpiMeasureResponse = object;
export declare type PmMsgCreateKpiResponse = object;
export declare type PmMsgCreateLemDatasetResponse = object;
export declare type PmMsgCreateLemMeasureResponse = object;
export declare type PmMsgCreateLemResponse = object;
export declare type PmMsgCreateMarketOperatorResponse = object;
export declare type PmMsgCreatePlayerResponse = object;
export declare type PmMsgCreateSlaResponse = object;
export declare type PmMsgDeleteAggregatorResponse = object;
export declare type PmMsgDeleteDefaultLemParsResponse = object;
export declare type PmMsgDeleteDsoResponse = object;
export declare type PmMsgDeleteGridStateResponse = object;
export declare type PmMsgDeleteKpiFeaturesResponse = object;
export declare type PmMsgDeleteKpiMeasureResponse = object;
export declare type PmMsgDeleteKpiResponse = object;
export declare type PmMsgDeleteLemDatasetResponse = object;
export declare type PmMsgDeleteLemMeasureResponse = object;
export declare type PmMsgDeleteLemResponse = object;
export declare type PmMsgDeleteMarketOperatorResponse = object;
export declare type PmMsgDeletePlayerResponse = object;
export declare type PmMsgDeleteSlaResponse = object;
export declare type PmMsgUpdateAggregatorResponse = object;
export declare type PmMsgUpdateDefaultLemParsResponse = object;
export declare type PmMsgUpdateDsoResponse = object;
export declare type PmMsgUpdateGridStateResponse = object;
export declare type PmMsgUpdateKpiFeaturesResponse = object;
export declare type PmMsgUpdateKpiMeasureResponse = object;
export declare type PmMsgUpdateKpiResponse = object;
export declare type PmMsgUpdateLemDatasetResponse = object;
export declare type PmMsgUpdateLemMeasureResponse = object;
export declare type PmMsgUpdateLemResponse = object;
export declare type PmMsgUpdateMarketOperatorResponse = object;
export declare type PmMsgUpdatePlayerResponse = object;
export declare type PmMsgUpdateSlaResponse = object;
export interface PmPlayer {
    index?: string;
    idx?: string;
    address?: string;
    role?: string;
    creator?: string;
}
export interface PmQueryAllDefaultLemParsResponse {
    defaultLemPars?: PmDefaultLemPars[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface PmQueryAllGridStateResponse {
    gridState?: PmGridState[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface PmQueryAllKpiFeaturesResponse {
    kpiFeatures?: PmKpiFeatures[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface PmQueryAllKpiMeasureResponse {
    kpiMeasure?: PmKpiMeasure[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface PmQueryAllKpiResponse {
    kpi?: PmKpi[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface PmQueryAllLemDatasetResponse {
    lemDataset?: PmLemDataset[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface PmQueryAllLemMeasureResponse {
    lemMeasure?: PmLemMeasure[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface PmQueryAllLemResponse {
    lem?: PmLem[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface PmQueryAllPlayerResponse {
    player?: PmPlayer[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface PmQueryAllSlaResponse {
    sla?: PmSla[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface PmQueryGetAggregatorResponse {
    Aggregator?: PmAggregator;
}
export interface PmQueryGetDefaultLemParsResponse {
    defaultLemPars?: PmDefaultLemPars;
}
export interface PmQueryGetDsoResponse {
    Dso?: PmDso;
}
export interface PmQueryGetGridStateResponse {
    gridState?: PmGridState;
}
export interface PmQueryGetKpiFeaturesResponse {
    kpiFeatures?: PmKpiFeatures;
}
export interface PmQueryGetKpiMeasureResponse {
    kpiMeasure?: PmKpiMeasure;
}
export interface PmQueryGetKpiResponse {
    kpi?: PmKpi;
}
export interface PmQueryGetLemDatasetResponse {
    lemDataset?: PmLemDataset;
}
export interface PmQueryGetLemMeasureResponse {
    lemMeasure?: PmLemMeasure;
}
export interface PmQueryGetLemResponse {
    lem?: PmLem;
}
export interface PmQueryGetMarketOperatorResponse {
    MarketOperator?: PmMarketOperator;
}
export interface PmQueryGetPlayerResponse {
    player?: PmPlayer;
}
export interface PmQueryGetSlaResponse {
    sla?: PmSla;
}
export interface PmSla {
    index?: string;
    /** @format int32 */
    start?: number;
    /** @format int32 */
    end?: number;
    creator?: string;
}
export interface ProtobufAny {
    "@type"?: string;
}
export interface RpcStatus {
    /** @format int32 */
    code?: number;
    message?: string;
    details?: ProtobufAny[];
}
/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
    /**
     * key is a value returned in PageResponse.next_key to begin
     * querying the next page most efficiently. Only one of offset or key
     * should be set.
     * @format byte
     */
    key?: string;
    /**
     * offset is a numeric offset that can be used when key is unavailable.
     * It is less efficient than using key. Only one of offset or key should
     * be set.
     * @format uint64
     */
    offset?: string;
    /**
     * limit is the total number of results to be returned in the result page.
     * If left empty it will default to a value to be set by each app.
     * @format uint64
     */
    limit?: string;
    /**
     * count_total is set to true  to indicate that the result set should include
     * a count of the total number of items available for pagination in UIs.
     * count_total is only respected when offset is used. It is ignored when key
     * is set.
     */
    countTotal?: boolean;
    /** reverse is set to true if results are to be returned in the descending order. */
    reverse?: boolean;
}
/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
    /** @format byte */
    nextKey?: string;
    /** @format uint64 */
    total?: string;
}
export declare type QueryParamsType = Record<string | number, any>;
export declare type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;
export interface FullRequestParams extends Omit<RequestInit, "body"> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: keyof Omit<Body, "body" | "bodyUsed">;
    /** request body */
    body?: unknown;
    /** base url */
    baseUrl?: string;
    /** request cancellation token */
    cancelToken?: CancelToken;
}
export declare type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> {
    baseUrl?: string;
    baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
    securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}
export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
    data: D;
    error: E;
}
declare type CancelToken = Symbol | string | number;
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded"
}
export declare class HttpClient<SecurityDataType = unknown> {
    baseUrl: string;
    private securityData;
    private securityWorker;
    private abortControllers;
    private baseApiParams;
    constructor(apiConfig?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType) => void;
    private addQueryParam;
    protected toQueryString(rawQuery?: QueryParamsType): string;
    protected addQueryParams(rawQuery?: QueryParamsType): string;
    private contentFormatters;
    private mergeRequestParams;
    private createAbortSignal;
    abortRequest: (cancelToken: CancelToken) => void;
    request: <T = any, E = any>({ body, secure, path, type, query, format, baseUrl, cancelToken, ...params }: FullRequestParams) => Promise<HttpResponse<T, E>>;
}
/**
 * @title pm/aggregator.proto
 * @version version not set
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Query
     * @name QueryAggregator
     * @summary Queries a aggregator by index.
     * @request GET:/supsi-dacd-isaac/pm/pm/aggregator
     */
    queryAggregator: (params?: RequestParams) => Promise<HttpResponse<PmQueryGetAggregatorResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryDefaultLemParsAll
     * @summary Queries a list of defaultLemPars items.
     * @request GET:/supsi-dacd-isaac/pm/pm/defaultLemPars
     */
    queryDefaultLemParsAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<PmQueryAllDefaultLemParsResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryDefaultLemPars
     * @summary Queries a defaultLemPars by index.
     * @request GET:/supsi-dacd-isaac/pm/pm/defaultLemPars/{index}
     */
    queryDefaultLemPars: (index: string, params?: RequestParams) => Promise<HttpResponse<PmQueryGetDefaultLemParsResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryDso
     * @summary Queries a dso by index.
     * @request GET:/supsi-dacd-isaac/pm/pm/dso
     */
    queryDso: (params?: RequestParams) => Promise<HttpResponse<PmQueryGetDsoResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryGridStateAll
     * @summary Queries a list of gridState items.
     * @request GET:/supsi-dacd-isaac/pm/pm/gridState
     */
    queryGridStateAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<PmQueryAllGridStateResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryGridState
     * @summary Queries a gridState by index.
     * @request GET:/supsi-dacd-isaac/pm/pm/gridState/{index}
     */
    queryGridState: (index: string, params?: RequestParams) => Promise<HttpResponse<PmQueryGetGridStateResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryKpiAll
     * @summary Queries a list of kpi items.
     * @request GET:/supsi-dacd-isaac/pm/pm/kpi
     */
    queryKpiAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<PmQueryAllKpiResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryKpi
     * @summary Queries a kpi by index.
     * @request GET:/supsi-dacd-isaac/pm/pm/kpi/{index}
     */
    queryKpi: (index: string, params?: RequestParams) => Promise<HttpResponse<PmQueryGetKpiResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryKpiFeaturesAll
     * @summary Queries a list of kpiFeatures items.
     * @request GET:/supsi-dacd-isaac/pm/pm/kpiFeatures
     */
    queryKpiFeaturesAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<PmQueryAllKpiFeaturesResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryKpiFeatures
     * @summary Queries a kpiFeatures by index.
     * @request GET:/supsi-dacd-isaac/pm/pm/kpiFeatures/{index}
     */
    queryKpiFeatures: (index: string, params?: RequestParams) => Promise<HttpResponse<PmQueryGetKpiFeaturesResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryKpiMeasureAll
     * @summary Queries a list of kpiMeasure items.
     * @request GET:/supsi-dacd-isaac/pm/pm/kpiMeasure
     */
    queryKpiMeasureAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<PmQueryAllKpiMeasureResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryKpiMeasure
     * @summary Queries a kpiMeasure by index.
     * @request GET:/supsi-dacd-isaac/pm/pm/kpiMeasure/{index}
     */
    queryKpiMeasure: (index: string, params?: RequestParams) => Promise<HttpResponse<PmQueryGetKpiMeasureResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryLemAll
     * @summary Queries a list of lem items.
     * @request GET:/supsi-dacd-isaac/pm/pm/lem
     */
    queryLemAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<PmQueryAllLemResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryLem
     * @summary Queries a lem by index.
     * @request GET:/supsi-dacd-isaac/pm/pm/lem/{index}
     */
    queryLem: (index: string, params?: RequestParams) => Promise<HttpResponse<PmQueryGetLemResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryLemDatasetAll
     * @summary Queries a list of lemDataset items.
     * @request GET:/supsi-dacd-isaac/pm/pm/lemDataset
     */
    queryLemDatasetAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<PmQueryAllLemDatasetResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryLemDataset
     * @summary Queries a lemDataset by index.
     * @request GET:/supsi-dacd-isaac/pm/pm/lemDataset/{index}
     */
    queryLemDataset: (index: string, params?: RequestParams) => Promise<HttpResponse<PmQueryGetLemDatasetResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryLemMeasureAll
     * @summary Queries a list of lemMeasure items.
     * @request GET:/supsi-dacd-isaac/pm/pm/lemMeasure
     */
    queryLemMeasureAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<PmQueryAllLemMeasureResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryLemMeasure
     * @summary Queries a lemMeasure by index.
     * @request GET:/supsi-dacd-isaac/pm/pm/lemMeasure/{index}
     */
    queryLemMeasure: (index: string, params?: RequestParams) => Promise<HttpResponse<PmQueryGetLemMeasureResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryMarketOperator
     * @summary Queries a marketOperator by index.
     * @request GET:/supsi-dacd-isaac/pm/pm/marketOperator
     */
    queryMarketOperator: (params?: RequestParams) => Promise<HttpResponse<PmQueryGetMarketOperatorResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryPlayerAll
     * @summary Queries a list of player items.
     * @request GET:/supsi-dacd-isaac/pm/pm/player
     */
    queryPlayerAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<PmQueryAllPlayerResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryPlayer
     * @summary Queries a player by index.
     * @request GET:/supsi-dacd-isaac/pm/pm/player/{index}
     */
    queryPlayer: (index: string, params?: RequestParams) => Promise<HttpResponse<PmQueryGetPlayerResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QuerySlaAll
     * @summary Queries a list of sla items.
     * @request GET:/supsi-dacd-isaac/pm/pm/sla
     */
    querySlaAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<PmQueryAllSlaResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QuerySla
     * @summary Queries a sla by index.
     * @request GET:/supsi-dacd-isaac/pm/pm/sla/{index}
     */
    querySla: (index: string, params?: RequestParams) => Promise<HttpResponse<PmQueryGetSlaResponse, RpcStatus>>;
}
export {};
