# Clean-Canvas

## Overview

The Clean Canvas extensions for Atom allows users to clean up and transform HTML content in the currently active text editor by applying a series of search and replace operations. The operations include removing unnecessary attributes, replacing certain classes and styles, and modifying the structure of HTML elements. The extension registers a command `clean-canvas:clean`, which can be executed from Atom's command palette or bound to a keyboard shortcut. 

## Installation

- Clone or download the package into the `~/.atom/packages` directory or install it directly via the Atom package manager.


## Usage

#### Activating the Clean Canvas command:
1. Open an HTML file in the active editor
2. Trigger the Clean Canvas command by opening the Command Palette `(Cmd + Shift + P)` or `(Ctrl + Shift + P)` and typing Clean Canvas
3. Alternatively, you can bind the `clean-canvas:clean` command to a custom keyboard shortcut in Atom's keymap file

#### Expected Behavior:
- When you run the `clean-canvas:clean` command, it will search and replace certain HTML attributes, tags, and styles as defined in the code.
- The transformed HTML content will replace the existing content in the editor.
- The cleaned content should be more standardized and simplified, without unnecessary attributes or inline styles.

## Version

#### 0.1.0 - First Release

- Every feature added
- Every bug fixed
