import { HospitalsI } from "@/network/hospitals/types";

export type UseHospitalListingReturnI = {
    hospitals: HospitalsI[];
    loading: boolean;
    loadingMore: boolean;
    error: string | null;
    hasMore: boolean;
    currentPage: number;
    totalPages: number;
    totalItems: number;
    loadMore: () => void;
    refresh: () => void;
    search: (query: string) => void;
    filterByLocation: (location: string) => void;
    filterByDistrict: (districtId: string | null) => void;
    clearFilters: () => void;
}

export type UseHospitalListingOptionsI = {
    initialLimit?: number;
    autoFetch?: boolean;
}

export interface UseHospitalDetailReturn {
    hospital: HospitalsI | null;
    loading: boolean;
    error: string | null;
    refresh: () => void;
}