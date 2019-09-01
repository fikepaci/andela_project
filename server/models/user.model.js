export class User {
  constructor(userId, email, firstname, lastname, password, address, bio, occupation, expertise, type = 'user') {
    this.userId = userId;
    this.email = email;
    this.firstname = firstname;
    this.lastname = lastname;
    this.password = password;
    this.address = address;
    this.bio = bio;
    this.occupation = occupation;
    this.expertise = expertise;
    this.type = type;
  }
}

export const users = [
  new User(1, 'johndoe@gmail.com', 'john', 'doe', '$2b$10$jNllDN/COLawsFtvBUKMoe83FKvkXKI/gJC0wSYRthzmxNistpxVi', 'Rwanda, gikondo, 1890,kicukiro', 'i like learning new things', 'software developer', '10 years', 'admin'),
];
