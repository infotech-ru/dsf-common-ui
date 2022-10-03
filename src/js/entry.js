import {
    itemActionMenu,
    CopyToClipboard,
    multilevelMenu,
} from "./utils";

import {init} from "./init.js"

export function OnLoad() {
  itemActionMenu();
  multilevelMenu();
  CopyToClipboard();
  init();
}
