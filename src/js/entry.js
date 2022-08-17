import {
    itemActionMenu,
    CopyToClipboard,
} from "./utils";

import {init} from "./init.js"

export function OnLoad() {
  itemActionMenu();
  CopyToClipboard();
  init();
}
