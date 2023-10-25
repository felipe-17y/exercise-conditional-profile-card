import "../style/index.css";
function render(variables = {}) {
  console.log("These are the current variables: ", variables);
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";
  if (variables.name == null) variables.name = "name";
  if (variables.lastname == null) variables.lastname = "last name";
  if (variables.twitter == null) variables.twitter = "";
  if (variables.github == null) variables.github = "";
  if (variables.linkedin == null) {
    variables.linkedin = "";
  } else {
    variables.linkedin = `in/${variables.linkedin}`;
  }
  if (variables.instagram == null) variables.instagram = "";
  if (variables.role == null) variables.role = "Role";
  if (variables.city == null) variables.city = "City";
  if (variables.country == null) variables.country = "Country";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${variables.name} ${variables.lastname}</h1>
          <h2>${variables.role}</h2>
          <h3>${variables.city}, ${variables.country}</h3>
          <ul class=${variables.socialMediaPosition}>
            <li><a target="_blank" href="https://twitter.com/${variables.twitter}"><i class="fab fa-twitter"></i></a></li>
            <li><a target="_blank" href="https://github.com/${variables.github}"><i class="fab fa-github"></i></a></li>
            <li><a target="_blank" href="https://linkedin.com/${variables.linkedin}"><i class="fab fa-linkedin"></i></a></li>
            <li><a target="_blank" href="https://instagram.com/${variables.instagram}"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background:
      "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    // this is the url for the profile avatar
    avatarURL:
      "https://images.pexels.com/photos/7488465/pexels-photo-7488465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: "felipe-17y",
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables);

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new values
    });
  });
};
