import type { Metadata, ResolvingMetadata } from "next";
import type { FC, ReactNode } from "react";

type SearchParams = { [key: string]: string | string[] | undefined };
export interface AppParams {
    [key: string]: string;
}

export type PageType<Params extends AppParams = AppParams> = FC<{
    params: Promise<Params>;
    searchParams: Promise<SearchParams>;
}>;

export type LayoutType<Params extends AppParams = AppParams> = FC<{
    params: Params;
    children: ReactNode;
}>;

export type ErrorRouteComponent = FC<{
    error: Error;
    reset: () => void;
}>;

export type DynamicMetadata<
    Params extends AppParams = AppParams,
    SearchParams extends object = object
> = (
    params: {
        params: Promise<Params>;
        searchParams: Promise<SearchParams>;
    },
    parent: ResolvingMetadata
) => Promise<Metadata> | Metadata;
