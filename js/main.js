// nicescroll
$(function() {  
    $("body").niceScroll({
        cursorcolor:"rgb(255, 136, 0)",
    });
})
// input valid
var email=document.getElementById("email");

    email.addEventListener("input",function(){
        if(email.validity.valuemissing){
            email.setcustomvalidity("Not found any information")
        }
        else if(email.validity.typemissing){
                email.setcustomvalidity("Erroe in type");
        }else{
            email.setcustomvalidity(" ");
            return true;
        };
    });
    // focus input
    var Name=document.getElementById("name"),
        textemail=document.getElementById("text-email"),
        emailadd=document.getElementById("email-add"),
        email=document.getElementById("email"),
        subject=document.getElementById("subject"),
        Subject=document.getElementById("sub-ject"),
        Message=document.getElementById("Message"),
        text=document.getElementById("text");

        Name.addEventListener("click",function(){
            textemail.focus();
        });
        emailadd.addEventListener("click",function(){
           email.focus();
        });
        subject.addEventListener("click",function(){
           Subject.focus();
        });
        Message.addEventListener("click",function(){
           text.focus();
        });
        
        // loader
        window.addEventListener("load",function(){
            var Loader=document.getElementById("loader");
            Loader.classList.add("loader-hidden");
             Loader.addEventListener("transitionend",function(){
            document.body.removeChild("loader");
            });
        });
        // bar
        var Hambouger=document.querySelector(".Hambouger"),
            nav=document.querySelector(".nav-items");
            Hambouger.addEventListener("click",function(){
                Hambouger.classList.toggle("active");
                nav.classList.toggle("active");
            })
            document.querySelectorAll(".list-link").forEach(n =>
                n.addEventListener("click",function(){
                    Hambouger.classList.remove("active");
                    nav.classList.remove("active");
                }));
                
            
        

       
       
        

