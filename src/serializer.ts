var pako = require('pako');

export class Serializer {
  static serialize(data: any) {
    var binaryString = pako.deflate(JSON.stringify(data), { to: 'string' });
    return binaryString;
  }

  static deserialize(bytes: any) {
    const str = pako.inflate(bytes, { to: 'string' });
    return  JSON.parse(str);
  }
}
