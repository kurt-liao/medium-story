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
    border: 1px solid rgba(0,0,0,.2);
    padding: 10px 20px;
    background: rgb(255,255,255);
    background-size: 600% 400%;
    box-shadow: rgb(0 0 0 / 25%) 0px 2px 4px;
    overflow: hidden;
    text-overflow: ellipsis;
}

.title-wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
}

img {
    width: 200px;
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
    color: #333;
    font-size: 1.2rem;
}

.date{
    color: #888;
    display: block;
    margin-top: 5px;
    margin-bottom: 8px;
    font-size: 14px;
}

.categories-wrapper {
    flex-wrap: wrap;
    margin-top: 10px;
}

.category {
    background: #f3f6f4;
    padding: 0.2rem;
    border-radius: 5px;
    color: #7E7D7B;
}

.category:not(:last-child) {
    margin-right: 5px;
}

</style>`;
