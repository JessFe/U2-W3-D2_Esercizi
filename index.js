class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  compareAge(otherUser) {
    if (this.age === otherUser.age) {
      return this.firstName + " ha la stessa età di " + otherUser.firstName;
    } else if (this.age < otherUser.age) {
      return this.firstName + " è più giovane di " + otherUser.firstName;
    } else {
      return this.firstName + " è più vecchio di " + otherUser.firstName;
    }
  }
}

const user1 = new User("Mario", "Rossi", 25, "Roma");
const user2 = new User("Andrea", "Bianchi", 35, "Milano");

console.log(user1.compareAge(user2));

/* ---------- */

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
}

function createPet() {
  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const newPet = new Pet(petName, ownerName, species, breed);

  addPet(newPet);
  clearForm();
}

function addPet(pet) {
  const petList = document.getElementById("petList");

  const card = document.createElement("div");
  card.classList.add("col-3", "mb-4");

  card.innerHTML = `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${pet.petName}</h5>
          <p class="card-text">Owner: ${pet.ownerName}</p>
          <p class="card-text">Species: ${pet.species}</p>
          <p class="card-text">Breed: ${pet.breed}</p>
        </div>
      </div>
    `;

  petList.appendChild(card);
}

function clearForm() {
  document.getElementById("petName").value = "";
  document.getElementById("ownerName").value = "";
  document.getElementById("species").value = "";
  document.getElementById("breed").value = "";
}
