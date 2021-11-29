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

    // Subject to change
    //const searchFigure = /<figure>(.|\n)*?<\/figure>/g;
    const searchFigure = /<figure>(.|\s)*?<\/figure>/g;
    const replaceFigure = "[IMAGE]";

    const searchCSS = /<style( |.)*?>(.|\n)*?<\/style>/g;
    const replaceCSS = "<style></style>";

    const searchLang = /.lang="....."/g;
    const replaceLang = "";

    const searchDir = /.dir="..."/g;
    const replaceDir = "";

    const searchListone = /.start="1"/g;
    const replaceListone = "";

    const searchListtype = /.type="1"/g;
    const replaceListtype = "";

    const searchDiv = /<div>/g;
    const replaceDiv = "";

    const searchSpan = /<span( |.)*?>/g;
    const replaceSpan = "";

    const searchSpanend = /<\/span>/g;
    const replaceSpanend = "";

    const searchDivend = /<\/div>/g;
    const replaceDivend = "";

    text = text.replace(searchCSS, replaceCSS);
    text = text.replace(searchFigure, replaceFigure);
    text = text.replace(searchLang, replaceLang);
    text = text.replace(searchDir, replaceDir);
    text = text.replace(searchSpanend, replaceSpanend);
    text = text.replace(searchSpan, replaceSpan);
    text = text.replace(searchListone, replaceListone);
    text = text.replace(searchListtype, replaceListtype);
    text = text.replace(searchDiv, replaceDiv);
    text = text.replace(searchDivend, replaceDivend);

      editor.setText(text);
      //editor.insertText('Hello World')
    }
  }

};
