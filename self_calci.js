// people=["rofjvfkvm","mkfmk","kjfd","kvm","kcjkcmj"];

// for (let index = 0; index < people.length; index++) {
//     const element = people[index];

//     console.log(element);
    
// }

// myst="Akshata is a very very good girl and i love her so muchhhhh";

// for (let index = 0; index < myst.length; index++) {
//     const element = myst[index];

//     console.log(element);
    
// }

// let p2=["akshu","zingu","mummu","didu"];

// for(let l of p2)
// {
//     console.log(l);
// }


/**************************** Calculator program *******************/
let but_arr=document.querySelectorAll("button");
let res=document.getElementById("res");

for(let i of but_arr)
{
   // let x=i.innerText;
   // console.log(x);

   i.addEventListener("click",()=>
   {

    //console.log(i.innerHTML);

    let bt_clk=i.innerText;
   // console.log(bt_clk);

   
   if(bt_clk=="clr")
   {
       res.value="";
   }

   if(bt_clk=='=')
   {
      res.value= eval(res.value);
   }

   if(bt_clk=='bk')
   {
       let st=res.value;
       st=st.substring(0,st.length-1);
       res.value=st;
   }

   else{
    res.value+=bt_clk;
   }
  
   });
}