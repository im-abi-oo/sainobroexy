const saionoHTML = `
<!DOCTYPE html>
<html lang="fa">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Saino</title>
<style>
body {
    display: flex;
    justify-content: center;
    font-family: 'Vazir', sans-serif;
    color: #a1c4ff;
    background-color: #0f0f0f;
    transition: background-color 0.3s, color 0.3s;
}

body.dark-mode {
    color: #ffffff;
    background-color: #121212;
}

.container {
    width: 80%;
    text-align: center;
}

h1 {
    margin: 100px 0 20px 0;
    color: #a1c4ff;
}

.dark-mode h1 {
    color: #ffffff;
}

.search-box {
    width: 80%;
    padding: 12px;
    font-size: 20px;
    border: 2px solid #a1c4ff;
    border-radius: 10px;
    background-color: #1a1a1a;
    color: #a1c4ff;
    outline: none;
    box-sizing: border-box;
}

.dark-mode .search-box {
    border-color: #5a7dff;
    background-color: #222;
    color: #ffffff;
}

.theme-toggle {
    position: fixed;
    top: 20px;
    right: 20px;
    cursor: pointer;
}

.websites {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;
}

.website {
    margin: 5px;
    padding: 6px 12px;
    border-radius: 5px;
    border: 1px solid #a1c4ff;
    text-decoration: none;
    color: #a1c4ff;
    background-color: #111;
    transition: 0.3s;
}

.website:hover {
    background-color: #1f1f1f;
}

.dark-mode .website {
    border-color: #5a7dff;
    color: #ffffff;
    background-color: #222;
}

.footer {
    margin-top: 60px;
    font-size: 14px;
    color: #a1c4ff;
    text-align: center;
}

.dark-mode .footer {
    color: #ffffff;
}
</style>
</head>
<body>
<div class="theme-toggle">🌓</div>
<div class="container">
<h1>Saino سرج</h1>
<input type="text" class="search-box" placeholder="آدرس سایت یا کلمه را وارد کنید..." />
<div class="websites">
    <a class="website" href="https://www.google.com" target="_blank">گوگل</a>
    <a class="website" href="https://duckduckgo.com" target="_blank">داک داک گو</a>
    <a class="website" href="https://www.bing.com" target="_blank">بینگ</a>
</div>
<div class="footer">
    <p>قدرت گرفته از Saino Inc. | © 2020-2025 برای همیشه محفوظ است</p>
</div>
</div>
<script>
const themeToggle = document.querySelector('.theme-toggle');
const searchBox = document.querySelector('.search-box');

// Theme toggle
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Enter to search
searchBox.addEventListener('keyup', event => {
    if(event.key === 'Enter') {
        let url = searchBox.value.trim();
        if(!url.startsWith('http')) {
            url = 'https://' + url;
        }
        window.open(url, '_blank');
    }
});
</script>
</body>
</html>
`;

async function rawHtmlResponse(html) {
    const init = { headers: { 'content-type': 'text/html;charset=UTF-8' } };
    return new Response(html, init);
}

addEventListener('fetch', event => {
    event.respondWith(rawHtmlResponse(saionoHTML));
});
