import {
  itemActionMenu,
  CopyToClipboard,
  multilevelMenu,
  initTreeTable,
} from "./utils";
  
import {init} from "./init.js"
  
export function OnLoad() {
  itemActionMenu();
  multilevelMenu();
  CopyToClipboard();
  init();
}
  
export function tablesInit() { 
  initTreeTable();
}