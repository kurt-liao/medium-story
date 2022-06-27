import { style } from "./style";

const card = ({ title, description, date, url, thumbnail }) => {
  return `<svg fill="none" width="800" height="120" xmlns="http://www.w3.org/2000/svg">
	<foreignObject width="100%" height="100%">
		<div xmlns="http://www.w3.org/1999/xhtml">
            
			${style}
            <div class="wrapper flex">
                <a class="container flex" href="${url}" target="__blank">
                    <img src="${thumbnail}"/>
                    <div>
                        <div class="title-wrapper">
                            <h3>${title}</h3><span class="date">${date}</span>
                        </div>
                        <p>${description}</p>
                    </div>
                </a>
            </div>
        </div>
	</foreignObject>
</svg>
    `;
};

export default card;
