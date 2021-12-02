'use babel';

import { CompositeDisposable } from 'atom';

export default {


  subscriptions: null,

  activate(state) {


    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'clean-canvas:clean': () => this.clean()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },


  clean() {
    const editor = atom.workspace.getActiveTextEditor()
    if (editor) {
      let text = editor.getText()

      // Search and replace happens below

      // THINGS TO REMOVE
      const searchID = /.id="\d*?"/g;
      const replaceID = "";

      const searchClass = /class="instructure_file_link instructure_scribd_file inline_disabled"/g;
      const replaceClass = "";

      const searchTarget = /target="_blank"/g;
      const replaceTarget = "";

      const searchRel = /rel="noopener"/g;
      const replaceRel = "";

      const searchPreviewable = /data-canvas-previewable="true"/g; 
      const replacePreviewable = "";

      const searchEndpoint = /data-api-endpoint="(.|\s)*?"/g;
      const replaceEndpoint = "";

      const searchReturnType = /data-api-returntype="File"/g;
      const replaceReturnType = "";

      // THINGS TO REPLACE

      const searchFigureClass = /<figure class="kl_image_white_border kl_image_align_center kl_image_max_fill" style="width: 500px; max-width: 100%;">/g;
      const replaceFigureClass = '<figure class="figure">';

      const searchFigCaption = /<figcaption style="text-align: center;">/g;
      const replaceFigCaption = '<figcaption class="figure-caption">';

      const searchTable = /<table class="table table-bordered" style="border-collapse: collapse; width: 98%; height: 298px; margin-left: auto; margin-right: auto;">/g;
      const replaceTable = '<table class="table">';

      const searchTR = /<tr style ?= ?"(.|\s)*?" ?>/g;
      const replaceTR = '<tr>';

      const searchTH = /<th style ?= ?"(.|\s)*?" scope ?= ?"col" ?>/g;
      const replaceTH = '<th scope="col">';

      const searchTD = /<td style="width: ?\d*?\.\d*?%; height: ?\d*?px;">/g;
      const replaceTD = '<td>';

      const searchAlertDiv = /<div class ?= ?"kl_message_block ?kl_message_block_info" ?>/g;
      const replaceAlertDiv = '<div class="alert alert-success">';

      // THINGS TO REPLACE (WITH CARRIED OVER PARTS)
      const regexTD = /<td style ?= ?"(.|\s)*?" rowspan="/g;
      const replaceRegexTD = '<td rowspan="';

      const regexTH = /<th style ?= ?"(.|\s)*?" rowspan="/g;
      const replaceRegexTH = '<th rowspan="';

      const regexFilePath = /\$IMG-CC-FILEBASE\$(.|\s)*?\//g;
      const replaceRegexFilePath = '/';

      // THINGS TO ADD
      // const searchImgInFig = /<figure (.|\s)*?><img/g;
      // const replaceImgInFig = '<figure'




      // REPLACEMENT FOR REMOVES
      text = text.replace(searchID, replaceID);
      text = text.replace(searchClass, replaceClass);
      text = text.replace(searchTarget, replaceTarget);
      text = text.replace(searchRel, replaceRel);
      text = text.replace(searchPreviewable, replacePreviewable);
      text = text.replace(searchEndpoint, replaceEndpoint);
      text = text.replace(searchReturnType, replaceReturnType);
      
      // REPLACEMENT FOR REPLACES
      text = text.replace(searchFigureClass, replaceFigureClass);
      text = text.replace(searchFigCaption, replaceFigCaption);
      text = text.replace(searchTable, replaceTable);
      text = text.replace(searchTR, replaceTR);
      text = text.replace(searchTH, replaceTH);
      text = text.replace(searchTD, replaceTD);
      text = text.replace(searchAlertDiv, replaceAlertDiv);

      // REPLACEMENT FOR MATCHES (CARRIED OVER)
      text = text.replace(regexTD, replaceRegexTD);
      text = text.replace(regexTH, replaceRegexTH);
      

      editor.setText(text);
    }
  }

};
