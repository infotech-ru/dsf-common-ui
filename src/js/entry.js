import {
  itemActionMenu,
  CopyToClipboard,
  multilevelMenu,
  initTreeTable,
  searchIcon,
} from "./utils";
  
import {init} from "./init.js";
import { FormsFree } from "./forms-free.js";
import { AutoresizeTextarea } from "./autoresizeTextarea.js";
  
export function OnLoad() {
  itemActionMenu();
  multilevelMenu();
  CopyToClipboard();
  init();
  FormsFree();
  AutoresizeTextarea();
}
  
export function iconsInit() { 
  searchIcon();
}
export function tablesInit() { 
  initTreeTable();
}