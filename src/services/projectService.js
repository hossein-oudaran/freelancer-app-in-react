import http from "./httpService";

export function getOwnerProjectsApi() {
  return http.get("/project/list").then(({ data }) => data.data);
}

export function removeProjectApi(id) {
  return http.delete(`project/${id}`).then(({ data }) => data.data);
}
