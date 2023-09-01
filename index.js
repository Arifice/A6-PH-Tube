const load=async()=>{
    const response=await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data=await response.json();
    const category=data.data;
    console.log(category);  
    
    const tabContainer=document.getElementById('tab-container');
    tabContainer.classList='flex justify-center my-12';
    category.forEach(category=>{
        // console.log(category);        
       
       const tab=document.createElement("div");
       tab.innerHTML=
        `  <a onclick="callCategory(${category.category_id})" class=" tab text-green-600   px-1  py-1 lg:px-3 m-1 lg:m-3 text-2xl lg:text-4xl rounded-md font-semibold">${category.category}</a>
        `  
        tabContainer.appendChild(tab);      
    })  
}
const callCategory=async(categoryId)=>{
    // console.log(categoryId);
    const response=await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data=await response.json();
    console.log(data);
    const itemField=document.getElementById('item-container'); 
    const sowModalField=document.getElementById('show-modal');
    let length=data.data.length;
     

    // console.log(data.data.length);
    console.log(data.data);

    itemField.textContent='';
    sowModalField.textContent='';
    if(length===0){
        
        const div=document.createElement('div');
        
        div.innerHTML=
        `   
            <div class="flex flex-col gap-2 items-center py-16">
                <div>
                    <img src="./Icon.png" alt="">
                </div>
                <div>
                    <p class="py-4 text-4xl font-semibold">Oops!! Sorry, There is no <br> content here</p>
                </div>
            </div>    
        `
        sowModalField.appendChild(div);  
        
    
     }  
     else{
        data.data.forEach(element=>{
            console.log(element); 
            const time=element?.others?.posted_date;                 
            console.log(parseFloat(element.others.views));         
            const div=document.createElement('div');
            console.log('date:',element?.others?.posted_date);
            
            div.innerHTML=
            `   
                <div class="card h-full w-full  shadow-xl">
                    <figure><img class="w-[312px] h-[200px]" src="${element?.thumbnail}" alt="" /></figure>
                    <div class="card-body">
                        <div  class="flex gap-4  items-center">
                            <div> 
                                <img class="w-10 h-10 rounded-full" src="${element?.authors[0]?.profile_picture}"/> 
                            </div>
                            <div>
                                <h1 class="text-2xl font-bold">${element?.title} </h1>
                            </div>
                            <div id="time-div" class="absolute  right-10 top-40">                        
                                
                            <p><span>${time?displayTime(parseFloat(time)):""}</span></p>
                            </div>
                        </div>
                        <div class="flex">
                            <div>
                                <p class="ml-14">${element?.authors[0]?.profile_name} </p>
                            </div>
                            <div>
                                ${element?.authors[0]?.verified ? verified():""} 
                            </div>
                        </div>                        
                        <p class="ml-14">${element?.others?.views} views</p>                        
                        
                    </div>
                </div>
           `
            itemField.appendChild(div);
        })
    }
} 

const displayTime=(time)=>{
    const h=Math.floor(time/3600);
    const m=Math.floor((time%3600)/60);
    const s=Math.floor((time%3600)%60);
    return `<span class="bg-[#171717] text-white text-xl rounded-md p-2">${h} hours ${m} min ${s} sec ago</span>`
}

const verified=()=>{
    return `<img class="h-8 w-8" src="./bluetic.png" >`    
}
const nav=()=>{
    const navField=document.getElementById('nav-container');
    navField.innerHTML=
   `
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <img src="./Logo.png" alt="">                  
            </div>
            <div class="navbar-center hidden md:flex lg:flex">
                <button onclick="sortByView()" class="btn rounded-md text-2xl bg-[#25252533]">Sort by view</button>
            </div>
            <div class="navbar-end">
                <div class="hidden md:flex lg:flex">
                    <a class="btn text-white rounded-md text-2xl  bg-[#FF1F3D]">Blog</a>
                </div>
                <div class="dropdown dropdown-end md:hidden lg:hidden">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-sm dropdown-content z-[1] shadow  bg-secondary text-white rounded-lg w-40">
                        <button onclick="sortByView()" class="text-2xl font-bold">Sort by view</button>
                        <button class="text-2xl font-bold">Blog</button>
                    </ul>
                </div>
            </div>
        </div>
   `
}


callCategory('1000')
nav();
load();
