async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
        throw new Error('Неуспешно зареждане на данни');
    }
    return await response.json();
}

async function getAllIds() {
    const posts = await fetchPosts();
    return posts.map(post => post.id);
}

async function getPostsByTitleSubstring(substring) {
    const posts = await fetchPosts();
    return posts.filter(post => post.title.includes(substring));
}

async function getIdAndTitle() {
    const posts = await fetchPosts();
    return posts.map(post => ({
        id: post.id,
        title: post.title
    }));
}

async function getTotalIdsSum() {
    const posts = await fetchPosts();
    return posts.reduce((sum, post) => sum + post.id, 0);
}

(async function runExamples() {
    try {
        console.log("Всички ID-та в едно:", await getAllIds());
        console.log("Постове с 'nam' в заглавието им:", await getPostsByTitleSubstring('nam'));
        console.log("ID-та и заглавия:", await getIdAndTitle());
        console.log("Общ сбор на стойността ID-та:", await getTotalIdsSum());
    } catch (error) {
        console.error(error);
    }
})();