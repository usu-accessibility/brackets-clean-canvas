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


      // REPLACEMENT

      text = text.replace(searchID, replaceID);
      text = text.replace(searchClass, replaceClass);
      text = text.replace(searchTarget, replaceTarget);
      text = text.replace(searchRel, replaceRel);
      text = text.replace(searchPreviewable, replacePreviewable);
      text = text.replace(searchEndpoint, replaceEndpoint);
      text = text.replace(searchReturnType, replaceReturnType);
      text = text.replace(searchFigureClass, replaceFigureClass);

      editor.setText(text);
    }
  }

};
