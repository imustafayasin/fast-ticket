export default defineEventHandler((event) => {
    const query = getRouterParams(event)
    return query
});