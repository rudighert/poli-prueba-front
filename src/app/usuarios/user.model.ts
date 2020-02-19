export class UserAttributes {
  name = '';
  email = '';
  city = '';
  location_id = 0;
}

export class User {
  id: number = null;
  type = 'user';
  attributes = new UserAttributes();
}


