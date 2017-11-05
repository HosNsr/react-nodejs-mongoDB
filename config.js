const env = process.env

export default {
    mongodbUrl : '',
    port : env.PORT || '8182',
    host : env.HOST || 'localhost',
    getServerURL() {
        return `http://${this.host}:${this.port}`;
    }
}