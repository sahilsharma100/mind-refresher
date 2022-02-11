enum type {
  free = 0,
  premium = 1,
}

export class Sound {
    'id': Number;
    'track': String;
    'img': String;
    'volume': Number;
    'playing': Boolean;
    'type': type;
    'name': String;
  }