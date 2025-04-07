# clean-canvas
## Overview
The Clean Canvas extension for Atom allows users to clean up and transform HTML content in the currently active text editor by applying a series of search-and-replace operations. The operations include removing unnecessary attributes, replacing certain classes and styles, and modifying the structure of HTML elements. The extension registers a command, clean-canvas:clean, which can be executed from Atom’s command palette or bound to a keyboard shortcut.

## Usage
1. Installation: Clone or download this package into the ~/.atom/packages/ directory or install it directly via the Atom package manager (if published).
2. Activating the Clean Canvas Command:
     * Open an HTML file in the active editor.
     * Trigger the Clean Canvas command by opening the Command Palette (Cmd + Shift + P or Ctrl + Shift + P) and typing Clean Canvas.
     * Alternatively, you can bind the clean-canvas:clean command to a custom keyboard shortcut in Atom’s keymap file.
3. Expected Behavior:
     * When you run the clean-canvas:clean command, it will search and replace certain HTML attributes, tags, and styles as defined in the code. The transformed HTML content will replace the existing content in the editor.
     * The cleaned content should be more standardized and simplified, without unnecessary attributes or inline styles.
