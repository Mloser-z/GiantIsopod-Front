import http from "./http.js";

export function getLabels(url) {
    return http.get(url);
}

export function getLabel(url, label) {
    return http.get(url+'/'+label)
}

export function getLabelFromText(url, query) {
    return http.get(url, undefined, { query });
}

export function postImage(url, file) {
    let headers = { "Content-Type": "multipart/form-data" }
    let formData = new FormData();
    formData.append("file", file);
    return http.post(url, headers, formData);

}
