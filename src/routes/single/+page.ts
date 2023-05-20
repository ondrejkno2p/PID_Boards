/** @type {import('./$types').PageLoad} */
export function load({url, route }) {
    const ids= url.searchParams.get('ids');
    return {ids:ids};
}