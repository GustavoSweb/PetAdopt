var menuLink = document.querySelectorAll(".menuLink");
var SectionMain = document.querySelector("#SectionMain");
var PawPet = document.querySelector("#PawPet");
var SectionServices = document.querySelector("#SectionServices");
var value_main = 0;
var value_main_left = 0;
var value_pawpet = ["15px", "85px"];
document.addEventListener("scroll", () => {
  console.log("Teste-" + SectionMain.getBoundingClientRect().top);
  if (SectionServices.getBoundingClientRect().top < 60) {
    return (PawPet.style.left = value_pawpet[1]);
  }
  if (SectionMain.getBoundingClientRect().top < 60) {
    return (PawPet.style.left = value_pawpet[0]);
  }
});
