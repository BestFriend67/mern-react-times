import {
    FETCH_FOREX_SUCCESS,
    FETCH_CHART_ERROR,
    CHANGE_MARKET_TYPE,
    SET_MARKET_DETAIL,
    SET_CHART_DATA,
    SET_CHART_TIME_FRAME,
    SET_RATING,
    SET_HOME_CHART_DATA,
    CLEAN_STATE,
    SET_LOADING,
    GET_SEARCH_RESULTS,
} from '../actions/chart';

const initialState = {
    loadingChart: true,
    forex: [],
    error: null,
    // Indexes are first to load.
    marketType: '%5EGSPC,%5ERUA,%5EDJI,%5ENDX,%5EN225,%5EFTSE',
    marketDetail: {},
    chartData: [],
    chartTimeFrame: '1hour',
    rating: [],
    homeChartData: [],
    searchResults: [],
};

const chartReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FOREX_SUCCESS:
            return {
                ...state,
                forex: action.payload,
            };
        case FETCH_CHART_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case CHANGE_MARKET_TYPE:
            return {
                ...state,
                marketType: action.payload,
            };
        case SET_MARKET_DETAIL:
            return {
                ...state,
                marketDetail: action.payload.data,
            };
        case SET_CHART_DATA:
            return {
                ...state,
                chartData: action.payload,
            };
        case SET_CHART_TIME_FRAME:
            return {
                ...state,
                chartTimeFrame: action.payload,
            };
        case SET_RATING:
            return {
                ...state,
                rating: action.payload,
            };
        case SET_HOME_CHART_DATA:
            return {
                ...state,
                homeChartData: [...state.homeChartData, action.payload],
            };
        case CLEAN_STATE:
            return {
                ...state,
                homeChartData: [],
            };
        case SET_LOADING:
            return {
                ...state,
                loadingChart: false,
            };
        case GET_SEARCH_RESULTS:
            return {
                ...state,
                searchResults: action.payload,
            };
        default:
            return state;
    }
};

export default chartReducer;