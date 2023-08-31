const load=async()=>{
    const response=await fetch('');
   const navField=document.getElementById('nav-container');
   navField.innerHTML=
   `
        <div class="navbar bg-white">
        <div class="navbar-start">             
            <img src="Logo.png" alt="">
        </div>
        <div class="navbar-center">
            <button class="bg-[#25252533] font-semibold text-3xl p-3 rounded-md text-[#252525]">Sort by view</button>
        </div>
        <div class="navbar-end">
            <a class="btn text-white bg-[#FF1F3D] rounded-md p-3 mr-5">Blog</a>
        </div>
        </div>
   `
   const itemField=document.getElementById('item-container');
   itemField.innerHTML=
   `      
        <div class="tabs tabs-boxed flex my-4 p-4 justify-center">
            <a class="tab">Tab 1</a> 
            <a class="tab tab-active">Tab 2</a> 
            <a class="tab">Tab 3</a>
            </div>
        </div>
   
   `
}
load();