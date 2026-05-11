const jsonPath = document.body.dataset.content;

/* when there are multiple json files need to be loaded

const files = document.body.dataset.content.split(",");

Promise.all(files.map(file => fetch(file).then(r => r.json())))
  .then(jsonFiles => Object.assign({}, ...jsonFiles))
  .then(content => {
    document.querySelectorAll("[data-key]").forEach(el => {
      const key = el.dataset.key;
      if (content[key]) el.textContent = content[key];
    });
  });

*/

fetch(jsonPath)
  .then(res => res.json())
  .then(content => {
    document.querySelectorAll("[data-key]").forEach(el => {
      const key = el.getAttribute("data-key");
      if (content[key]) {
        el.textContent = content[key];
      }
    });
  })
  .catch(err => console.error("Error loading content:", err));
