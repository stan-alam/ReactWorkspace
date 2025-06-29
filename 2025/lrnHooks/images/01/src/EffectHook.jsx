function MyComponent( { name }) {
    useEffect(() => {
        fetch(`https://github.com/${name}`)
        .then(response => response.json())
    },[name])
    // The above code will not work as expected because the URL is incorrect for fetching user data from GitHub.
}