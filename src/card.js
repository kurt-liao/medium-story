import { style } from "./style";

const card = ({
  title,
  description,
  date,
  url,
  thumbnail,
  categories = [],
  hide = [],
}) => {
  const isHideDate = hide.includes("date");
  const isHideCategory = hide.includes("category");
  const isHideImg = hide.includes("img");
  const isHideDesc = hide.includes("desc");

  return `<svg fill="none" width="600" height="200" xmlns="http://www.w3.org/2000/svg">
	<foreignObject width="100%" height="100%">
		<div xmlns="http://www.w3.org/1999/xhtml"> 
			${style}
            <div class="wrapper flex">
                <a class="container flex" href="${url}" target="__blank">
                    <div>
                        ${!isHideDate ? `<div class="date">${date}</div>` : ""}
                        <div class="title-wrapper">
                            <h3>${title}</h3>
                        </div>
                        ${!isHideDesc ? `<p>${description}</p>` : ""}
                        ${
                          !isHideCategory &&
                          categories &&
                          Array.isArray(categories) &&
                          categories.length > 0
                            ? `<div class="categories-wrapper flex">
                                    ${categories
                                      .map((category) => {
                                        return `<div class="category">${category}</div>`;
                                      })
                                      .join("")}
                                </div>`
                            : ""
                        }
                    </div>
                    ${
                      !isHideImg && thumbnail
                        ? `<img src="${thumbnail}" />`
                        : ""
                    }
                </a>
            </div>
        </div>
	</foreignObject>
</svg>
    `;
};

export default card;
