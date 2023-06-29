import service from "./request";

const http = {
    get(url, headers, params) {
        const config = {
            method: 'GET',
            url: url,
            headers: headers ? headers : {},
            params: params ? params : {}
        }
        return service(config);
    },
    post(url, headers, data) {
        const config = {
            method: 'POST',
            url: url,
            headers: headers ? headers : {},
            data: data ? data : {}
        }
        return service(config);

    },
    put(url, headers, params) {
        const config = {
            method: 'PUT',
            url: url,
            headers: headers ? headers : {},
            params: params ? params : {}
        }
        return service(config);
    },
    delete(url, headers, params) {
        const config = {
            method: 'DELETE',
            url: url,
            headers: headers ? headers : {},
            params: params ? params : {}
        }
        return service(config);

    }
}

export default http;