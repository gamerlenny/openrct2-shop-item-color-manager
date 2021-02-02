# Shop Item Color Manager - a plugin for OpenRCT2
Shop Item Color Manager is a plugin for OpenRCT2 that manages preset colors for items sold by stalls (umbrellas, t-shirts, hats and balloons). It allows to automatically change the preset item color to a custom, user-chosen one, or to a random color that changes everytime a new stall is built.

## Description
Are you getting tired of seing blue balloons and red umbrellas everywhere in your park?<br>
Are you wishing you could provide your peeps with multicolored paraphernalia and souvenirs, but can't be bothered to manually change the preset color for each and every stall?<br>
Do you like to color-code items sold in your parks, or make them all the same color, but just not the default one?<br>
Did you just place 32 balloon stalls in a row to create that fantastic Rainbow Balloon Avenue you dreamt of, only to realize how tiresome and painful it will be to individually set them to different colors?<br>
Search no further! This plugin was made for YOU!

Shop Item Color Manager allows you to:
- Randomize the item color for every Information Kiosk, Hat Stall, T-Shirt Stall, Balloon Stall or Souvenir Stall that you place in your park, instead of balloons always being set to "light blue" and umbrellas, t-shirts, hats to "bright red" by default (as they are in RCT1 and RCT2).<br>
- Or, choose a preset color for each type of item (umbrellas, t-shirts, hats or balloons) and have that color used for every new stall you build that sells that item.<br>
- You can also apply the settings of your choosing to already existing stalls in your park: make all the items of the same type the same color for all stalls, or give each stall a random item color. 

## Contents
This plugin was coded in pure Javascript using Notepad++, with no special software, libraries or other dependencies.<br>
SOURCE FILE: /src/ShopItemColorManager.src.js is the editable source file with the full JS source code for the plugin.<br>
DIST FILE: ShopItemColorManager.js is the minified, lighter version of the script, to be used in the plugin folder.

## Installation
1. Install a compatible version of OpenRCT2. This plugin has been tested on OpenRCT2 0.3.2-2d6da75 develop, compatibility with older version is not guaranteed in any way.
2. Download the plugin file ShopItemColorManager.js
3. Put that file in your OpenRCT2 'plugin' folder (usually in C:\Users\username\Documents\OpenRCT2\plugin on Windows 10)

## Usage
![(ShopItemColorManager window image)](/img/ShopItemColorManager.jpg)
<br>
By default, the plugin is enabled and every time you place a Information Kiosk, Hat Stall, T-Shirt Stall, Balloon Stall or Souvenir Stall, the shop item's preset color will be changed to a random color.
<br>
If you open the ShopItemColorManager window from the map menu, you can change and fine-tune the settings:<br>
- If you uncheck "Manage item colors for all new stalls", the plugin will be disabled and will not manage shop item colors anymore, and default / vanilla item colors will be used for every new stall: red for umbrellas, t-shirts, hats and blue for balloons<br>
- If you want a color not to be random for a specific item type (Hats, T-Shirts, Umbrellas or Balloons), but instead want all the stalls that sell that item to use the same color everywhere, uncheck the corresponding "Random color for every stall" checkbox.<br>
- If the "random" checkbox is unchecked, the item color used by the newly placed stalls will be the one defined by the color picker for that item type. You can change it at any time by selecting another color with the color picker.<br>
- If the "random" checkbox is checked, the color picker will display the last color used (= the color applied to the last stall that was placed in the park that sold that item)<br>
- If you click the "Apply to all existing stalls" button, the current settings will be applied to all previously existing stalls in the park
- Change these settings as many times as you want and combine them as you want! <br>
For instance, you could have all your hat stalls selling yellow hats, all your t-shirt stalls selling puple t-shirts, while umbrellas and ballons colors are randomized (meaning that the preset color will automatically change every time an Information Kiosk, Souvenir Stall or Balloon Stall is built). And if you change your mind later on and suddenly wish to sell green umbrellas only and multicolored hats, no problem! You can always change the settings again and click "Apply to all existing stalls"!

## Disclaimer
This plugin has been coded by a random OpenRCT2 player and is provided as-is, with no guarantee of future improvements or continued support. As long as I continue playing RCT I will try my best to maintain compatibility with future OpenRCT2 versions, since I originally coded this plugin for my own use anyway.
If you discover a major bug or problem with the plugin, however, feel free to open a thread in the Issues section explaining your findings and I will try to check it out as soon as I can.
