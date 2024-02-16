const COMMANDS = [
  {
    command: "about",
    description: "Get the scoop on me!",
  },
  {
    command: "education",
    description: "Where I learned stuff",
  },
  {
    command: "skills",
    description: "Things I'm good at",
  },
  {
    command: "contact",
    description: "Drop me a line",
  },
  {
    command: "clear",
    description: "Clear terminal",
  },
];

const help = () =>
  COMMANDS.map(
    (command) => `
    <div style="display: flex; justify-content: space-between;">
      <p style="font-size: 15px">${command.command}</p>
      <p>${command.description}</p>
    </div>
  `
  ).join("") +
  `
    <br />
    <div class="command">Type one of the above to view. For eg. <span style="color: var(--secondary)">about</span></div>
  `;

const about = () => `
Salut! I'm the ${getAge(
  "02/07/2000"
)}-year-old software engineer bringing a taste of tech to the sunny landscapes of the south of France.
<br/><br/>
By day, I'm crafting digital solutions at <a href="https://www.zendesk.com" target="_blank">Zendesk</a>, but when the workday ends, you'll find me lacing up my running shoes, hopping on my bike, or hitting the trails for a hike.
<br/><br/>
They say programming is all about problem-solving, but let me tell you, debugging code is nothing compared to finding the perfect hiking trail with a view. So, whether you need help with a bug or just want to swap stories about the best cycling routes, I'm your guy – just don't ask me to choose between my love for coding and my love for the great outdoors!
`;

const education = () =>
  `I completed my secondary education at <a href="https://www.lycee-polyvalent-cluses.fr/" target="_blank">Saint Jean Bosco</a>, a private high school in France, and obtained my engineering degree at <a href="https://www.polytech-reseau.org/" target="_blank">Polytech</a> in 2022.`;

const skills = () => `
  Some skills here
  `;

const contact = () => `
<div style="display: flex; justify-content: space-between;">
  <p style="font-size: 15px">linkedin</p>
  <a class="meaning" href="https://www.linkedin.com/in/axel-duval-se/" target="_blank">lkdn/axel-duval-se</a>
</div>
<div style="display: flex; justify-content: space-between;">
  <p style="font-size: 15px">E-mail</p>
  <a class="meaning" href="mailto:axel.duval74@gmail.com?subject=From%20Your%20Terminal&body=Hi%20Axel" target="_blank">axel.duval74@gmail.com</a>
</div>
`;

const error = (input) =>
  `<div class="help-command">sh: Unknown command: ${input}</div><div class="help-command">See \`help\` for info`;

export const CONTENTS = {
  help,
  about,
  education,
  skills,
  contact,
  error,
};

function getAge(dateString) {
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
