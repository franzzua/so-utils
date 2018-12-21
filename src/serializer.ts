import {deflate, inflate} from "pako";

export class Serializer {
  static serialize(data: any) {
    var binaryString = deflate(JSON.stringify(data), { to: 'string' });
    return binaryString;
  }

  static deserialize(bytes: any) {
    const str = inflate(bytes, { to: 'string' });
    return  JSON.parse(str);
  }
}
