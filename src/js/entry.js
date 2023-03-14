import {
  itemActionMenu,
  CopyToClipboard,
  multilevelMenu,
  initTreeTable,
} from "./utils";
  
import {init} from "./init.js";
import { FormsFree } from "./forms-free.js";
  
export function OnLoad() {
  itemActionMenu();
  multilevelMenu();
  CopyToClipboard();
  init();
  FormsFree();
}
  
export function tablesInit() { 
  initTreeTable();
}