import { createAppSlice } from "@/lib/redux/createAppSlice";
import type { AppThunk } from "@/lib/redux/store";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ReactNode } from "react";
import { RouteType, getFilteredRoutes } from "@/lib/routing/routing";

export interface DashboardSliceState {
}

const initialState: DashboardSliceState = {
};

export const dashboardSlice = createAppSlice({
    name: "dashboard",
    initialState,
    reducers: (create) => ({})
});

export const { } = dashboardSlice.actions;

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { } = dashboardSlice.selectors;

