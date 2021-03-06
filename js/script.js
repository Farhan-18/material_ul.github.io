const sidenav = document.querySelectorAll(".sidenav");
M.Sidenav.init(sidenav);

// slider
const slider = document.querySelectorAll(".slider");
M.Slider.init(slider, {
  indicators: false,
  height: 500,
  transition: 500,
  interval: 3000,
});

const materialboxed = document.querySelectorAll(".materialboxed");
M.Materialbox.init(materialboxed);

const parallax = document.querySelectorAll(".parallax");
M.Parallax.init(parallax);

const autocomplete = document.querySelectorAll(".autocomplete");
M.Autocomplete.init(autocomplete);
