export interface IFilterInput {
    name?: string;
    area?: string;
    location?: string;
}

export interface IPaginationQuery {
    skip: string;
    limit: string;
}

export interface IFilterQuery extends IFilterInput, IPaginationQuery {}

export interface IProjectsView {
    id: string;
    name: string;
    area: string;
    shortDescription: string;
    availablePositions: string[];
    location: string;
}

export interface IPaginationMeta {
    skip: string;
    limit: string;
    total: string;
}

