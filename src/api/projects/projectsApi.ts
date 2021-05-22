import Axios from "services/axios";
import { IFilterQuery, IPaginationMeta } from "./types";

export default class ProjectsApi {
    public static async get(filterQuery: IFilterQuery) {
        const url = `projects?limit=${filterQuery.limit}&skip=${filterQuery.skip}${filterQuery.name ? '&name=' + filterQuery.name : ''}${filterQuery.area ? '&area=' + filterQuery.name : ''}${filterQuery.location ? '&location=' + filterQuery.location : ''}`;
        return await Axios.Instance.get(url);
    }

    public static async getById(id: string) {
        return await Axios.Instance.get(`/projects/${id}`);
    }

    public static async getLastWeek() {
        return await Axios.Instance.get(`/projects/lastweek`);
    }
}