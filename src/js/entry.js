import {
  itemActionMenu,
  CopyToClipboard,
  multilevelMenu,
  initTreeTable,
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
  searchIcon();
}
  
export function tablesInit() { 
  initTreeTable();
}