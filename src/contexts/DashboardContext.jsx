import { createContext, useContext, useReducer } from "react";

// Create the context
const DashboardContext = createContext();

// Initial state
const initialState = {
  theme: "light",
  dataRange: "7d",
  selectedMetrics: ["revenue", "users", "conversion"],
  chartData: {
    revenue: [],
    users: [],
    conversion: [],
    traffic: [],
  },
  loading: {
    revenue: false,
    users: false,
    conversion: false,
    traffic: false,
  },
  errors: {},
  userPreferences: {
    autoRefresh: true,
    refreshInterval: 30000,
    layout: "grid",
  },
};

// Action types
const ACTIONS = {
  SET_THEME: "SET_THEME",
  SET_DATE_RANGE: "SET_DATE_RANGE",
  TOGGLE_METRIC: "TOGGLE_METRIC",
  SET_CHART_DATA: "SET_CHART_DATA",
  SET_LOADING: "SET_LOADING",
  SET_ERROR: "SET_ERROR",
  UPDATE_PREFERENCES: "UPDATE_PREFERENCES",
  RESET_DASHBOARD: "RESET_DASHBOARD",
};

// Reducer function
const dashboardReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };

    case ACTIONS.SET_DATE_RANGE:
      return {
        ...state,
        dateRange: action.payload,
      };

    case ACTIONS.TOGGLE_METRIC:
      const { selectedMetrics } = state;
      const metric = action.payload;
      const newMetrics = selectedMetrics.includes(metric)
        ? selectedMetrics.filter((m) => m !== metric)
        : [...selectedMetrics, metric];
      return {
        ...state,
        selectedMetrics: newMetrics,
      };

    case ACTIONS.SET_CHART_DATA:
      return {
        ...state,
        chartData: {
          ...state.chartData,
          [action.payload.key]: action.payload.data,
        },
      };

    case ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.payload.key]: action.payload.isLoading,
        },
      };

    case ACTIONS.SET_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.payload.key]: action.payload.error,
        },
      };

    case ACTIONS.UPDATE_PREFERENCES:
      return {
        ...state,
        userPreferences: {
          ...state.userPreferences,
          ...action.payload,
        },
      };

    case ACTIONS.RESET_DASHBOARD:
      return initialState;

    default:
      return state;
  }
};

//Provider component
export const DashboardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dashboardReducer, initialState);

  //Action creates to make dispatching easy
  const actions = {
    setTheme: (theme) => dispatch({ type: ACTIONS.SET_THEME, payload: theme }),
    setDateRange: (range) =>
      dispatch({ type: ACTIONS.SET_DATE_RANGE, payload: range }),
    toggleMetric: (metric) =>
      dispatch({ type: ACTIONS.TOGGLE_METRIC, payload: metric }),
    setChartData: (key, data) =>
      dispatch({ type: ACTIONS.SET_CHART_DATA, payload: { key, data } }),
    setLoading: (key, isLoading) =>
      dispatch({ type: ACTIONS.SET_LOADING, payload: { key, isLoading } }),
    setError: (key, error) =>
      dispatch({ type: ACTIONS.SET_ERROR, payload: { key, error } }),
    updatePreference: (preferences) =>
      dispatch({ type: ACTIONS.UPDATE_PREFERENCES, payload: preferences }),
    resetDashboard: () => dispatch({ type: ACTIONS.RESET_DASHBOARD }),
  };

  return (
    <DashboardContext.Provider value={{ state, actions, dispatch }}>
      {children}
    </DashboardContext.Provider>
  );
};

// Custom hook to use the context
export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
};
