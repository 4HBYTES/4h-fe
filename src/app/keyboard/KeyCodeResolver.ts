import {Injectable} from '@angular/core';

@Injectable()
export class KeyCodeResolver {

  public isEnterKeyPressed(event:KeyboardEvent):boolean {
    return event.keyCode === 13;
  }

}
