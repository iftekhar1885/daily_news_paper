const loadCategory = async () =>{
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
  const data = await res.json();
  // console.log(data.data.news_category);
  return data.data.news_category;
}

const loadAllCategory = async () =>{

  const data = await loadCategory();

  const categoryField = document.getElementById('categoryList')

  data.forEach(catagoryName => {
      const li = document.createElement('li')
      li.innerHTML = `
      <a onclick="loadAllMan()">${catagoryName.category_name}</a>
      `;
      categoryField.appendChild(li);
  });

  // console.log(data);
}


loadAllCategory();



const loadAllProducts = async () =>{
  const res = await fetch('https://openapi.programming-hero.com/api/news/category/01')
  const peoples = await res.json();
  return peoples.data;
  
}


const loadAllMan = async () =>{

  const peoples = await loadAllProducts();

  const manField = document.getElementById('manField')

  peoples.forEach(people => {
       console.log(people);
      
      const {details, image_url, total_view, title, thumbnail_url} = people;
      const {img, name, published_date,} = people.author;

      const div = document.createElement('div')
      div.classList.add("card", "lg:card-side", "bg-base-100", "shadow-xl", "mb-5");

      div.innerHTML = `
      <figure><img width="600px" src="${image_url}" alt="Album"></figure>
              <div class="card-body">
                <h2 class="card-title">${title}</h2>
                <p>${details.lenth > 30 ? title.slice(0,30) + '...' : title}</p>

                <div class="grid grid-cols-4 gap-4">
                <div class="flex">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                <div class="w-10 rounded-full">
                    <img src="${img}" />
                    </div>
                    </label>
                    <div>
                    <p class="pl-2 block">${name}</p>
                    <p class="pl-2 block">${published_date}</p>
                    </div>
              </div>
              <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
              <p class="pl-2 font-bold text-xl">${total_view}</p>
              </div>
              <div class="rating items-center">
                  <input type="radio" name="rating-1" class="mask mask-star" />
                  <input type="radio" name="rating-1" class="mask mask-star" checked />
                  <input type="radio" name="rating-1" class="mask mask-star" />
                  <input type="radio" name="rating-1" class="mask mask-star" />
                  <input type="radio" name="rating-1" class="mask mask-star" />
                  </div>
                  <div class="card-actions justify-end">
                  <label for="my-modal-3" onclick="showModal('${details}','${thumbnail_url}')" class="btn modal-button">Details</label>
                  </div>
              </div>
              </div>
              `;
      manField.appendChild(div);
  });
}
loadAllMan();

const showModal = (details, thumbnail_url)=>{
  console.log(details, thumbnail_url)
  const modalBody = document.getElementById("modal-body");
  modalBody.textContent = "";
  modalBody.innerHTML = `
   <p class="py-4">
   ${details}
   </p>
   <img src="${thumbnail_url}"/>
   `;
}

cdn.jsdelivr.net