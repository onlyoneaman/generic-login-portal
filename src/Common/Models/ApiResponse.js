class ApiResponse {
    constructor(body, status, error) {
        this.body = body;
        this.status = status;
        this.error = error;
    }

    isValid() {
        return !(this.status < 200 || this.status > 300)
    }
}

export default ApiResponse;