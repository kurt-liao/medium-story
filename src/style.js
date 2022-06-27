export const style = `<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif
}
.flex {
    display: flex;
    align-items:center;
}
.container{
    height: 120px;
    border: 1px solid rgba(0,0,0,.2);
    padding: 10px 20px;
    border-radius: 10px;
    background: rgb(255,255,255);
    background: linear-gradient(60deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 47%, rgba(246,246,246,1) 50%, rgba(255,255,255,1) 53%, rgba(255,255,255,1) 100%);
    background-size: 600% 400%;
    animation: gradientBackground 3s ease infinite;
    overflow: hidden;
    text-overflow: ellipsis;
}

.title-wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
}

img {
    margin-right: 10px;
    width: 170px;
    height: 100%;
    object-fit: cover;
}
a{
    text-decoration: none;
    color: inherit
}
p {
    line-height: 1.5;
    color: #555;
    display: -webkit-box;
    max-width: 500px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
h3{
    color: #333
}
.date{
    color: #888;
    display: block;
    margin-top: 5px;
    margin-bottom: 8px;
    font-size: 14px;
}
</style>`;
