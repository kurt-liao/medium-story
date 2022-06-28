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

.wrapper {
    height: 200px;
}

.container{
    height: 100%;
    border: 1px solid rgba(0,0,0,.2);
    padding: 10px 20px;
    background: rgb(255,255,255);
    background-size: 600% 400%;
    box-shadow: rgb(0 0 0 / 25%) 0px 2px 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    text-shadow: -1px -1px white, 1px 1px #333;
}

.title-wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
}

img {
    width: 200px;
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
    margin: 10px 0;
}

.category {
    background: #f3f6f4;
    padding: 0.2rem 0.5rem;
    border-radius: 5px;
    color: #7E7D7B;
    border: 1px solid rgba(0,0,0,.2);
    box-shadow: rgb(0 0 0 / 25%) 0px 6px 3px;
}

.category:not(:last-child) {
    margin-right: 5px;
}

</style>`;
