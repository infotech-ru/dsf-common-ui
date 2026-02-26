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
import { CustomFileUpload } from "./CustomFileUpload.js";
import { initCopyDataAttrToClipboardBtns } from "./copyTextToClipboardNotify.js";
  
export function OnLoad() {
  itemActionMenu();
  multilevelMenu();
  CopyToClipboard();
  init();
  FormsFree();
  AutoresizeTextarea();
  CustomFileUpload();
  initCopyDataAttrToClipboardBtns();
}
  
export function iconsInit() { 
  searchIcon();
}
export function tablesInit() { 
  initTreeTable();
}
export function CustomFileUploadInit() { 
  CustomFileUpload();
}