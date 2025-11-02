async function my_request(link: string) {
    const response = await fetch(link);
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
}
export default my_request;