// After submiting the form stay in the page
// window.addEventListener("load", function() {
    const submitAlert = (x) => {
        x.addEventListener("submit", function(e) {
            e.preventDefault();
            const data = new FormData(x);
            const action = e.target.action;
            fetch(action, {
                method: 'POST',
                body: data,
                })
            .then(() => {
                alert("Bid Submitted! Thank you for bidding!");
            })
        });
    }

    // item 1
    const form = document.getElementById('my-form');
    submitAlert(form);
    const form1 = document.getElementById('my-form2');
    submitAlert(form1);
    const form2 = document.getElementById('my-form3');
    submitAlert(form2);
    const form3 = document.getElementById('my-form4');
    submitAlert(form3);
    const form4 = document.getElementById('my-form5');
    submitAlert(form4);
    const form5 = document.getElementById('my-form6');
    submitAlert(form5);
    const form6 = document.getElementById('my-form7');
    submitAlert(form6);
    const form7 = document.getElementById('my-form8');
    submitAlert(form7);
    const form8 = document.getElementById('my-form9');
    submitAlert(form8);
    const form9 = document.getElementById('my-form10');
    submitAlert(form9);
    const form10 = document.getElementById('my-form11');
    submitAlert(form10);
    const form11 = document.getElementById('my-form12');
    submitAlert(form11);
    const form12 = document.getElementById('my-form13');
    submitAlert(form12);
    const form13 = document.getElementById('my-form14');
    submitAlert(form13);
    const form14 = document.getElementById('my-form15');
    submitAlert(form14);
    const form15 = document.getElementById('my-form16');
    submitAlert(form15);
    const form16 = document.getElementById('my-form17');
    submitAlert(form16);
    const form17 = document.getElementById('my-form18');
    submitAlert(form17);
    const form18 = document.getElementById('my-form19');
    submitAlert(form18);
    const form19 = document.getElementById('my-form20');
    submitAlert(form19);
    const form20 = document.getElementById('my-form21');
    submitAlert(form20);
    const form21 = document.getElementById('my-form22');
    submitAlert(form21);
//   });


// Image Popup Modal

    // Get the modal
    var modal = document.getElementById("myModal");
    var img = document.getElementById("myImg");
    var modalImg = document.getElementById("img01");
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
    }
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
        modal.style.display = "none";
    }

// Get the <span> element that closes the modal
    var modal1 = document.getElementById("myModal2");
    var modal2 = document.getElementById("myModal3");
    var modal3 = document.getElementById("myModal4");
    var modal4 = document.getElementById("myModal5");
    var modal5 = document.getElementById("myModal6");
    var modal6 = document.getElementById("myModal7");
    var modal7 = document.getElementById("myModal8");
    var modal8 = document.getElementById("myModal9");
    var modal9 = document.getElementById("myModal10");
    var modal10 = document.getElementById("myModal11");
    var modal11 = document.getElementById("myModal12");
    
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img2 = document.getElementById("myImg2");
    var img3 = document.getElementById("myImg3");
    var img4 = document.getElementById("myImg4");
    var img5 = document.getElementById("myImg5");
    var img6 = document.getElementById("myImg6");
    var img7 = document.getElementById("myImg7");
    var img8 = document.getElementById("myImg8");
    var img9 = document.getElementById("myImg9");
    var img10 = document.getElementById("myImg10");
    var img11 = document.getElementById("myImg11");
    var img12 = document.getElementById("myImg12");
    var img13 = document.getElementById("myImg13");
    var img14 = document.getElementById("myImg14");
    var img15 = document.getElementById("myImg15");
    var img16 = document.getElementById("myImg16");
    var img17 = document.getElementById("myImg17");
    var img18 = document.getElementById("myImg18");
    var img19 = document.getElementById("myImg19");
    var img20 = document.getElementById("myImg20");
    var img21 = document.getElementById("myImg21");
    var img22 = document.getElementById("myImg22");

const openImg = (x) => {
    x.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
}
    
openImg(img2);
openImg(img3);
openImg(img4);
openImg(img5);
openImg(img6);
openImg(img7);
openImg(img8);
openImg(img9);
openImg(img10);
openImg(img11);
openImg(img12);
openImg(img13);
openImg(img14);
openImg(img15);
openImg(img16);
openImg(img17);
openImg(img18);
openImg(img19);
openImg(img20);
openImg(img21);
openImg(img22);


// Popup View Bid Modal
// 1st Get Modal 
// 2nd Get the button that opens the modal
// 3rd Get the <span> element that closes the modal
// 4th When the user clicks the button, open the modal 
// 5th When the user clicks on <span> (x), close the modal   
// 6th When the user clicks anywhere outside of the modal, close it

// get Modal: item 1
    var viewBids = document.getElementById("view-bids");
    var btn = document.getElementById("btn");
    var closeBids = document.getElementsByClassName("close-bids")[0];
    btn.onclick = function() {
        viewBids.style.display = "block";
    }
    closeBids.onclick = function() {
        viewBids.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == viewBids) {
            viewBids.style.display = "none";
            }
        }

// get Modal: item 2
    var viewBids2 = document.getElementById("view-bids2");
    var btn2 = document.getElementById("btn2");
    var closeBids2 = document.getElementsByClassName("close-bids")[1];
    btn2.onclick = function() {
        viewBids2.style.display = "block";
    }
    closeBids2.onclick = function() {
        viewBids2.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == viewBids2) {
        viewBids2.style.display = "none";
        }
    }

// get Modal: item 3
    var viewBids3 = document.getElementById("view-bids3");
    var btn3 = document.getElementById("btn3");
    var closeBids3 = document.getElementsByClassName("close-bids")[2];
    btn3.onclick = function() {
        viewBids3.style.display = "block";
    }
    closeBids3.onclick = function() {
        viewBids3.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == viewBids3) {
        viewBids3.style.display = "none";
        }
    }

// get Modal: item 4
    var viewBids4 = document.getElementById("view-bids4");
    var btn4 = document.getElementById("btn4");
    var closeBids4 = document.getElementsByClassName("close-bids")[3];
    btn4.onclick = function() {
        viewBids4.style.display = "block";
    }
    closeBids4.onclick = function() {
        viewBids4.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == viewBids4) {
        viewBids4.style.display = "none";
        }
    }

// get Modal: item 5
    var viewBids5 = document.getElementById("view-bids5");
    var btn5 = document.getElementById("btn5");
    var closeBids5 = document.getElementsByClassName("close-bids")[4];
    btn5.onclick = function() {
        viewBids5.style.display = "block";
    }
    closeBids5.onclick = function() {
        viewBids5.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == viewBids5) {
        viewBids5.style.display = "none";
        }
    }

// get Modal: item 6
    var viewBids6 = document.getElementById("view-bids6");
    var btn6 = document.getElementById("btn6");
    var closeBids6 = document.getElementsByClassName("close-bids")[5];
    btn6.onclick = function() {
        viewBids6.style.display = "block";
    }
    closeBids6.onclick = function() {
        viewBids6.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == viewBids6) {
        viewBids6.style.display = "none";
        }
    }

// get Modal: item 7
    var viewBids7 = document.getElementById("view-bids7");
    var btn7 = document.getElementById("btn7");
    var closeBids7 = document.getElementsByClassName("close-bids")[6];
    btn7.onclick = function() {
        viewBids7.style.display = "block";
    }
    closeBids7.onclick = function() {
        viewBids7.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == viewBids7) {
        viewBids7.style.display = "none";
        }
    }

// get Modal: item 8
    var viewBids8 = document.getElementById("view-bids8");
    var btn8 = document.getElementById("btn8");
    var closeBids8 = document.getElementsByClassName("close-bids")[7];
    btn8.onclick = function() {
        viewBids8.style.display = "block";
    }
    closeBids8.onclick = function() {
        viewBids8.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == viewBids8) {
        viewBids8.style.display = "none";
        }
    }

// get Modal: item 9
    var viewBids9 = document.getElementById("view-bids9");
    var btn9 = document.getElementById("btn9");
    var closeBids9 = document.getElementsByClassName("close-bids")[8];
    btn9.onclick = function() {
        viewBids9.style.display = "block";
    }
    closeBids9.onclick = function() {
        viewBids9.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == viewBids9) {
        viewBids9.style.display = "none";
        }
    }

// get Modal: item 10
    var viewBids10 = document.getElementById("view-bids10");
    var btn10 = document.getElementById("btn10");
    var closeBids10 = document.getElementsByClassName("close-bids")[9];
    btn10.onclick = function() {
        viewBids10.style.display = "block";
    }
    closeBids10.onclick = function() {
        viewBids10.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == viewBids10) {
        viewBids10.style.display = "none";
        }
    }

// get Modal: item 11
    var viewBids11 = document.getElementById("view-bids11");
    var btn11 = document.getElementById("btn11");
    var closeBids11 = document.getElementsByClassName("close-bids")[10];
    btn11.onclick = function() {
        viewBids11.style.display = "block";
    }
    closeBids11.onclick = function() {
        viewBids11.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == viewBids11) {
        viewBids11.style.display = "none";
        }
    }

// get Modal: item 12
    var viewBids12 = document.getElementById("view-bids12");
    var btn12 = document.getElementById("btn12");
    var closeBids12 = document.getElementsByClassName("close-bids")[11];
    btn12.onclick = function() {
        viewBids12.style.display = "block";
    }
    closeBids12.onclick = function() {
        viewBids12.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == viewBids12) {
        viewBids12.style.display = "none";
        }
    }

// get Modal: item 13
var viewBids13 = document.getElementById("view-bids13");
var btn13 = document.getElementById("btn13");
var closeBids13 = document.getElementsByClassName("close-bids")[12];
btn13.onclick = function() {
    viewBids13.style.display = "block";
}
closeBids13.onclick = function() {
    viewBids13.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == viewBids13) {
    viewBids12.style.display = "none";
    }
}

// get Modal: item 14
var viewBids14 = document.getElementById("view-bids14");
var btn14 = document.getElementById("btn14");
var closeBids14 = document.getElementsByClassName("close-bids")[13];
btn14.onclick = function() {
    viewBids14.style.display = "block";
}
closeBids14.onclick = function() {
    viewBids14.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == viewBids14) {
    viewBids14.style.display = "none";
    }
}

// get Modal: item 15
var viewBids15 = document.getElementById("view-bids15");
var btn15 = document.getElementById("btn15");
var closeBids15 = document.getElementsByClassName("close-bids")[14];
btn15.onclick = function() {
    viewBids15.style.display = "block";
}
closeBids15.onclick = function() {
    viewBids15.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == viewBids15) {
    viewBids15.style.display = "none";
    }
}

// get Modal: item 16
var viewBids16 = document.getElementById("view-bids16");
var btn16 = document.getElementById("btn16");
var closeBids16 = document.getElementsByClassName("close-bids")[15];
btn16.onclick = function() {
    viewBids16.style.display = "block";
}
closeBids16.onclick = function() {
    viewBids16.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == viewBids16) {
    viewBids16.style.display = "none";
    }
}

// get Modal: item 17
var viewBids17 = document.getElementById("view-bids17");
var btn17 = document.getElementById("btn17");
var closeBids17 = document.getElementsByClassName("close-bids")[16];
btn17.onclick = function() {
    viewBids17.style.display = "block";
}
closeBids17.onclick = function() {
    viewBids17.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == viewBids17) {
    viewBids17.style.display = "none";
    }
}

// get Modal: item 18
var viewBids18 = document.getElementById("view-bids18");
var btn18 = document.getElementById("btn18");
var closeBids18 = document.getElementsByClassName("close-bids")[17];
btn18.onclick = function() {
    viewBids18.style.display = "block";
}
closeBids18.onclick = function() {
    viewBids18.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == viewBids18) {
    viewBids18.style.display = "none";
    }
}

// get Modal: item 19
var viewBids19 = document.getElementById("view-bids19");
var btn18 = document.getElementById("btn19");
var closeBids19 = document.getElementsByClassName("close-bids")[18];
btn18.onclick = function() {
    viewBids19.style.display = "block";
}
closeBids19.onclick = function() {
    viewBids19.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == viewBids19) {
        viewBids19.style.display = "none";
    }
}

// get Modal: item 20
var viewBids20 = document.getElementById("view-bids20");
var btn20 = document.getElementById("btn20");
var closeBids20 = document.getElementsByClassName("close-bids")[19];
btn18.onclick = function() {
    viewBids20.style.display = "block";
}
closeBids20.onclick = function() {
    viewBids20.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == viewBids20) {
    viewBids20.style.display = "none";
    }
}

// get Modal: item 21
var viewBids21 = document.getElementById("view-bids21");
var btn21 = document.getElementById("btn21");
var closeBids21 = document.getElementsByClassName("close-bids")[20];
btn21.onclick = function() {
    viewBids21.style.display = "block";
}
closeBids21.onclick = function() {
    viewBids21.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == viewBids21) {
    viewBids21.style.display = "none";
    }
}

// get Modal: item 22
var viewBids22 = document.getElementById("view-bids22");
var btn22 = document.getElementById("btn22");
var closeBids22 = document.getElementsByClassName("close-bids")[21];
btn22.onclick = function() {
    viewBids22.style.display = "block";
}
closeBids22.onclick = function() {
    viewBids22.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == viewBids22) {
    viewBids22.style.display = "none";
    }
}
