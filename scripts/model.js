var modal = document.getElementById("popup-modal");
var btn = document.getElementById("open-popup-Admin");
var span = document.getElementsByClassName("modal-close")[0];

var modalT = document.getElementById("popup-modal-Tsign");
var btnT = document.getElementById("open-popup-Teacher");
var spanT = document.getElementsByClassName("modal-Tsign-closeT")[0];

var modalSU = document.getElementById("popup-modal-SUsign");
var btnSU = document.getElementById("open-popup-Student");
var btnSU2 = document.getElementById("open-popup-Student-SignUp");
var spanSU = document.getElementsByClassName("modal-SUsign-closeSU")[0];

var modalSI = document.getElementById("popup-modal-SIsign");
var btnSI = document.getElementById("open");
var spanSI = document.getElementsByClassName("modal-SIsign-closeSI")[0];

btn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};

btnT.onclick = function () {
  modalT.style.display = "block";
};
spanT.onclick = function () {
  modalT.style.display = "none";
};

btnSU.onclick = function () {
  modalSU.style.display = "block";
};
spanSU.onclick = function () {
  modalSU.style.display = "none";
};

btnSI.onclick = function () {
  modalSI.style.display = "block";
  modalSU.style.display = "none";
};
spanSI.onclick = function () {
  modalSI.style.display = "none";
};

btnSU2.onclick = function ()
{
  modalSU.style.display = "block";
  modalSI.style.display = "none";
}
spanSU.onclick = function () {
  modalSU.style.display = "none";
};
window.onclick = function (event)
{
  if(event.target == modalSU)
  {
    modalSU.style.display = "none";
  }
  if(event.target == modalSI)
  {
    modalSI.style.display = "none";
  }
  if(event.target == modalT)
  {
    modalT.style.display = "none";
  }
  if(event.target == modal)
  {
    modal.style.display = "none";
  }
};
